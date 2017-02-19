import React from 'react'
import HeaderNav, { navInfo } from './header'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
    navInfo,
})

const store = createStore(reducers)

console.log(store.getState())
const App = () => (
    <Provider store={store}>
        <div className="container">
            <HeaderNav />
        </div>
    </Provider>
)

export default App