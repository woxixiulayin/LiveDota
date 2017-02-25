import React,{Component, PropTypes} from 'react'
import classnames from 'classnames'

export default class LiveList extends Component {
    static propTypes = {
        category: PropTypes.string.isRequired,
        site: PropTypes.string.isRequired,
        lives: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div>123</div> 
        )
    }
}