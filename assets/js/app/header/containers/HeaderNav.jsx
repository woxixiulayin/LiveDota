import React,{Component} from 'react'
import {connect} from 'react-redux'
import {switchCategory} from '../actions'
import * as actions from '../actions'
import {NavBar} from 'app/commonComponents'

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

const HeaderNav = connect(
    mapStateToProp,
    mapDispatchToProp
)(NavBar)

export default HeaderNav