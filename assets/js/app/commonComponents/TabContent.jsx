import React,{Component, PropTypes} from 'react'
import classNames from 'classnames'

class TabContent extends Component {
    static propTypes = {
        items = PropTypes.array.isRequired
    }

    static
    constructor() {
        super()
    }
    
    componentDidMount() {

    }

    render() {
        let {index} = this.props

        return (
            <div classNames={classNames('container flex tab-content')}>
            {
                React.Children.map((child, index) => {
                    <div classNames='tab-item full'>
                    {child}
                    </div>
                })
            }
            </div> 
        )
    }
}