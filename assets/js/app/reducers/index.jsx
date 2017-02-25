import { combineReducers } from 'redux'
import { currentCategoryIndex } from '../Header'
import { siteNavInfo } from '../CategoryWrap'
import {navConfig} from 'config'

const liveBase = (state = navConfig, action) => {
    switch (action.type) {
        default:
            return navConfig
    }
}

const reducers = combineReducers({
    liveBase,
    currentCategoryIndex,
    siteNavInfo,
})

export default reducers