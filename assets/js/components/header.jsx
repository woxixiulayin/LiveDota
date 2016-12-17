import React, {Component} from 'react'
import ReactDom from 'react-dom'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {data : 22}
    }
    render() {
        return (
            <div>
            12
                <Ele />
            </div>
        )
    }
}
class Ele extends Component {
    constructor() {
        super()
        this.state = {data: 3}
    }
    componentDidMount() {
        this.setState({data: 16631})
    }
    render() {
        return <div>111331{this.state.data}</div>
    }
}