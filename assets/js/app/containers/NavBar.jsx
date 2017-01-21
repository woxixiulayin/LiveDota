import React,{Component} from 'react'
import {connect} from 'react-redux'
import {switchCategory} from '../actions'
import classNames from 'classnames'
import FreeContent from '../Components/FreeContent'
import * as actions from '../actions'

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

    getCategoryNodeInfo(category) {
        let info = {}

        let node = this[`${category}`],
            hintBorderWidth = node.clientWidth - 6,
            hintBorderLeft = node.offsetLeft + 3,
            hintBorderTop = node.offsetTop + 22

        info = {hintBorderTop, hintBorderLeft, hintBorderWidth}
        return info
    }

    changeIndex(index) {
        this.props.changeIndex(index)
        console.log('change')
    }

    componentDidMount() {
        this.setState(this.getCategoryNodeInfo(this.props.categorys[this.props.currentIndex]))
    }

    componentShouldUpdate(nextProps) {
        return nextProps.currentIndex !== this.props.currentIndex
    }

    componentWillUpdate(nextProps) {
        if(nextProps.currentIndex !== this.props.currentIndex) {
            console.log('cahnge border')
            console.log(this.props.categorys[nextProps.currentIndex])
            console.log(this.getCategoryNodeInfo(this.props.categorys[nextProps.currentIndex]))
            this.setState(this.getCategoryNodeInfo(this.props.categorys[nextProps.currentIndex]))
        }
    }

    render() {                                        
        let {categorys, currentIndex} = this.props,
            {hintBorderLeft, hintBorderTop, hintBorderWidth} = this.state
        
        this.nodes = []
            
        return (<div id='nav-bar' className='container'>
            {categorys.map( (category, index) => {
                return <span
                ref={node => {
                    this[`${category}`] = node
                }}
                onClick={() => {
                        this.changeIndex(index)
                    }
                 }
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
const mapDispatchToProp = (dispatch, owdnProps) => ({
    changeIndex: (index) => {
        console.log(`dispatch ${index}`)
        dispatch(actions.switchCategory(index))
    }
})
NavBar = connect(
    mapStateToProp,
    mapDispatchToProp
)(NavBar)

export default NavBar