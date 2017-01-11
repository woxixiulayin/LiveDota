import { Component } from 'react'
import isEqual from 'lodash/isEqual'

const mergeProps = (stateProps = {}, dispatchProps = {}, parentProps = {}) => ({
    ...parentProps,
    ...stateProps,
    ...dispatchProps,
})

export default function continer(mapStatToProps, mapDispatchTopros, updateRefer) {

    return class extends SourceComponent {

        _onChange(state) {
            let props = mapStatToProps(state),
                _props = {},
                shouldSetState = false

            Object.keys(props).map(item => {
                if (typeof props[item] !== 'undefined') {
                    if (!shouldSetState) {
                        shouldSetState = true
                    }
                    _props[item] = state[item]
                }
            })
            if(shouldSetState) {
                this.setState(_props)
            }
        }

        componentDidMount() {
            let {store, mapStatToProps, mapDispatchTopros} = this.props.store

            if (!store) {
                throw new Error('container component should be given a store prop')
            }

            //不映射state和dispatch的组件不需要当做container
            if (!mapStatToProps || !mapDispatchTopros) {
                throw new Error('container component should set mapStatToProps or mapDispatchTopros')
            }

            //将dispatch方法加到组件上
            if (mapDispatchTopros) {
                Object.assign(this, mapDispatchTopros)
            }


            store.subScribe(this._onChange.bind(this))
        }
    }
}