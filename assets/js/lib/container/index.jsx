import React,{Component} from 'react'

export const container = function (mapStatToProps, mapDispatchTopros) {

    //不映射state和dispatch的组件不需要当做container
    if (!mapStatToProps) {
        throw new Error('container component should set mapStatToProps or mapDispatchTopros')
    }

    if(typeof mapStatToProps === 'function') {
        mapDispatchTopros = mapStatToProps
    }

    return SourceComponent => {

        class ComponentWrap extends Component {

            constructor() {
                super()
                if(!mapStatToProps) return

                let {store} = this.context,
                    storeState = store.getState()

                this.state = mapStatToProps(storeState)
            }


            _onChange(state) {
                if(!mapStatToProps) return
                let props = mapStatToProps(state),
                    _props = {},
                    shouldSetState = false

                //过滤掉空的属性
                Object.keys(props).map(item => {
                    if (typeof props[item] !== 'undefined') {
                        if (!shouldSetState) {
                            shouldSetState = true
                        }
                        _props[item] = state[item]
                    }
                })

                //只有一个属性发生变化就setState
                if (shouldSetState) {
                    this.setState(_props)
                }
            }

            // getDefaultProps() {
            //     //TODO 如何添加初始值
            //     if(!mapStatToProps) return
            //     let {store} = this.context
            //     return Object.assign(mapStatToProps(store.getState()), super.getDefaultProps())
            // }

            componentDidMount() {
                let {store} = this.context

                if (!store) {
                    throw new Error('container component should be given a store prop')
                }


                //将dispatch方法加到组件上
                if(mapDispatchTopros) {
                    Object.assign(this, mapDispatchTopros)
                }

                if(mapStatToProps) {
                    store.subscribe(this._onChange.bind(this))
                }

                super.componentDidMount()
                console.log('this.props')
                console.log(store.getState())
            }

            render() {
                let {props} = this.state
                return <div> 
                    <SourceComponent {...props}/>
                </div>
            }

        }

        ComponentWrap.contextTypes = {
            store: React.PropTypes.object,
        }

        return ComponentWrap
    }

}

export default container