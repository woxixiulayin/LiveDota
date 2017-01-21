import React,{Component} from 'react'
import {connect} from 'react-redux'
import {switchCategory} from '../actions'
import classNames from 'classnames'
import FreeContent from '../Components/FreeContent'

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

    getCurrentNodeInfo() {
        let info = {}

        let node = this.currentNode,
            hintBorderWidth = node.clientWidth,
            hintBorderLeft = node.offsetLeft,
            hintBorderTop = node.offsetTop

        info = {hintBorderTop, hintBorderLeft, hintBorderWidth}
        return info
    }

    componentDidMount() {
        this.setState(this.getCurrentNodeInfo())
    }

    render() {                                        
        let {categorys, currentIndex} = this.props,
            {hintBorderLeft, hintBorderTop, hintBorderWidth} = this.state
            console.log(this.state)
        return (<div id='nav-bar' className='container'>
            {categorys.map( (category, index) => {
                return <span
                ref={node => {
                    if(+currentIndex === index) {
                        this.currentNode = node
                    }
                }}
                className={classNames("header-category main-font", {'current': +currentIndex === index})}
                    >
                    {category}
                </span>
            })}
            <HintBorder 
                left={hintBorderLeft}
                top={hintBorderTop}
                width={hintBorderWidth}
            />
        </div>)

    }
}

const mapStateToProp = (state, ownProps) => ({
    categorys: state.navInfo.list,
    currentIndex: state.navInfo.currentIndex,
})

NavBar = connect(mapStateToProp)(NavBar)

export default NavBar