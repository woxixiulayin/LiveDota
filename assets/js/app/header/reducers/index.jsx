import {combineReducers} from 'redux'
import navConfig from 'config/navConfig'
import * as actions from '../actions'
import * as types from '../const/types'

const test = true

let initNavInfo = {
    list: Object.keys(navConfig),
    currentIndex: 0,
}

if(test) {
    // navInfo.currentCategory
}



const navInfo = (state = initNavInfo, action) => {
    let newState
    switch(action.type) {
        case types.SWITCH_CATEGORY:
            newState = {...state, currentIndex: action.index}
            console.log(newState)
            return newState
        default:
            return state
    }
}

export default navInfo