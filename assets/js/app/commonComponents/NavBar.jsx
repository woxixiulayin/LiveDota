import React,{Component} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import FreeContent from './FreeContent'

const HintBorder = ({top=0, left=0, width=0}) => (
    <FreeContent {...{left, top}}>
        <span className='hint-border'
        style={{width}}
        ></span>
    </FreeContent>
)

class NavBar extends Component {

    constructor() {
        super()
        this.state = {
            hintBorderLeft: 0,
            hintBorderTop: 0,
            hintBorderWidth: 0,
        }
    }

    getItemNodeInfo(item) {
        let info = {}

        let node = this[`${item}`],
            width = node.clientWidth - 10,
            left = node.offsetLeft + 3,
            top = node.offsetTop + 22

        info = {width, left , top}
        return info
    }

    setBorderStyle() {
        let style = this.getItemNodeInfo(this.props.items[this.props.currentIndex]),
            borderStyle = this.hintBorder.style
            console.log(style)
        borderStyle.left = style.left + 'px';
        borderStyle.top = style.top + 'px';
        borderStyle.width = style.width + 'px';
    }
    changeIndex(index) {
        this.props.changeIndex(index)
        console.log('change')
    }

    componentDidMount() {
        // this.setState(this.getCategoryNodeInfo(this.props.categorys[this.props.currentIndex]))
        this.setBorderStyle()
    }

    componentShouldUpdate(nextProps) {
        return nextProps.currentIndex !== this.props.currentIndex
    }

    componentDidUpdate() {
        this.setBorderStyle()
    }

    render() {                                        
        let {items, currentIndex} = this.props

        return (<div id='nav-bar' className='container'>
            {items.map( (item, index) => {
                return <span
                ref={node => {
                    this[`${item}`] = node
                }}
                onClick={() => {
                        this.changeIndex(index)
                    }
                 }
                className={classNames("header-category main-font", {'current': +currentIndex === index})}
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