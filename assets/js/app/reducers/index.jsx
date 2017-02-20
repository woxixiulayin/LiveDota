import { combineReducers } from 'redux'
import { currentCategoryIndex } from '../Header'
import {navConfig} from 'config'

const liveBase = (state = navConfig, action) => {
    switch (action.type) {
        default:
            return navConfig
    }
}

const reducers = combineReducers({
    liveBase,
    currentCategoryIndex
})

export default reducers