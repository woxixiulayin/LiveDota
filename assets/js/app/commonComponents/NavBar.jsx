import React,{PureComponent} from 'react'
import classNames from 'classnames'

class NavBar extends PureComponent {

    constructor() {
        super()
        this.state = {
            hoverIndex: -1
        }
        this.items = []
    }

    getItemLayoutInfo(index) {
        let node = this.items[index],
            width = node.clientWidth - 10,
            left = node.offsetLeft + 3,
            top = node.offsetTop + 22
 
        return {width, left , top}
    }

    getIndexOfItemToShow() {
        let {hoverIndex} = this.state,
            {currentIndex} = this.props

        return hoverIndex === -1 ? currentIndex : hoverIndex 
    }

    setBorderLayout() {
        let layoutInfo = this.getItemLayoutInfo(this.getIndexOfItemToShow()),
            borderStyle = this.hintBorder.style
        borderStyle.left = layoutInfo.left + 'px';
        borderStyle.top = layoutInfo.top + 'px';
        borderStyle.width = layoutInfo.width + 'px';
    }

    changeIndex(index) {
        this.props.changeIndex(index)
    }

    componentDidMount() {
        this.setBorderLayout()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.currentIndex !== this.props.currentIndex ||
            nextState.hoverIndex !== this.state.hoverIndex
    }

    componentDidUpdate() {
        this.setBorderLayout()
    }

    onItemMouseEnter(index) {
        this.setState({
            hoverIndex: index
        })
    }

    onItemMouseOut() {
        this.setState({
            hoverIndex: -1
        })
    }

    render() {                                        
        let {items, currentIndex} = this.props

        return (<div className='nav-bar container'>
            {items.map( (item, index) => {
                return <span
                ref={node => {
                    this.items[index] = node
                }}
                key={index}
                onClick={this.changeIndex.bind(this, index)}
                onMouseEnter={this.onItemMouseEnter.bind(this, index)}
                onMouseOut={this.onItemMouseOut.bind(this, index)}
                className={classNames("header-category", {'current': +currentIndex === index})}
                    >
                    {item}
                </span>
            })}
            <span ref={node => this.hintBorder = node} className='hint-border'>
            </span>
        </div>)

    }
}

export default NavBar