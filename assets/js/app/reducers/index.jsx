import {combineReducers} from 'redux'
import navConfig from '../../config/navConfig'

const categorys = Object.keys(navConfig)
const navbar = (state = categorys, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const reducers = combineReducers({
    navbar
})

export default reducers