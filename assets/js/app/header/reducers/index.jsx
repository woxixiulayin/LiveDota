import {combineReducers} from 'redux'
import navConfig from 'config/navConfig'
import * as actions from '../actions'
import * as types from '../const/types'


const currentCategoryIndex = (state = 0, action) => {
    switch(action.type) {
        case types.SWITCH_CATEGORY:
            return action.index
        default:
            return state
    }
}

export default currentCategoryIndex