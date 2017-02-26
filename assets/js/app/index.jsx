import React from 'react'
import HeaderNav from './Header'
import MainContent from './MainContent'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)

console.log(store.getState())

const App = () => (
    <Provider store={store}>
        <div className="full container">
            <div className="header-nav flex center">
                <HeaderNav />
            </div>
            <MainContent />
        </div>
    </Provider>
)

export default App