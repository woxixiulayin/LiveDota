import {Component} from 'react'

const mergeProps = (stateProps={}, dispatchProps={}, parentProps={}) => ({
    ...parentProps,
    ...stateProps,
    ...dispatchProps,
})

export default function intercmpt(mapStatToProps, mapDispatchTopros) {
    return SourceComponent => class extends Component {

        _onChange(state) {
            this.setState(mapStatToProps(state))
        }

        componentDidMount() {
            if(!this.props.store) {
                throw new Error('interact component should be given a store prop')
            }

            store.subScribe(this._onChange.bind(this))
        }

        render() {
            let props = mergeProps(this.state, mapDispatchTopros, this.props)
            <SourceComponent {...props} />
        }
    }
}