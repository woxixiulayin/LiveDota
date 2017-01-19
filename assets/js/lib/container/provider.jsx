import React, {Component} from 'react'

class Provider extends Component {

    constructor() {
        super()
    }

    getChildContext() {
        return {store: this.props.store}
    }

    render() {
        return <div>{this.props.children}</div>
    }
}

Provider.childContextTypes = {
store: React.PropTypes.object
}

export default Provider