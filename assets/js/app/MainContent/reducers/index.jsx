import navConfig from 'config/navConfig'
import * as types from '../const'
import {combineReducers} from 'redux'

const initSiteNavInfo = new Array(Object.keys(navConfig).length).fill(0)

export const siteNavInfo = (state = initSiteNavInfo, action) => {
    let newState = [...state]
    switch(action.type) {
        case types.SWITCH_SITE:
            newState[action.categoryID] = action.siteID
            return newState
        default:
            return state
    }
}

// const liveWrap = combineReducers(siteNavInfo)

// export default liveWrap