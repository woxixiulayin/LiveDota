import React,{Component} from 'react'
import {connect} from 'react-redux'
import {switchCategory} from '../actions'

class NavBar extends Component {

    render() {
        let {categorys} = this.props

        console.log(`category: ${categorys}`)
        return (<div id='nav-bar'>
            {categorys.map(function(category, index) {
                return (<span className="header-category"
                >{category}
                </span>)
            })}
        </div>)

    }
}

const mapStateToProp = (state, ownProps) => ({
    categorys: state.navbar
})

NavBar = connect(mapStateToProp)(NavBar)

export default NavBar