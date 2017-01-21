import {combineReducers} from 'redux'
import navConfig from '../../config/navConfig'

const test = true

let initNavInfo = {
    list: Object.keys(navConfig),
    currentIndex: 0,
}

if(test) {
    // navInfo.currentCategory
}



const navInfo = (state = initNavInfo, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const reducers = combineReducers({
    navInfo
})

export default reducers