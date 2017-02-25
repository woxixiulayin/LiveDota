import React from 'react'
import HeaderNav from './Header'
import CategoryWrap from './CategoryWrap'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)

console.log(store.getState())
const App = () => (
    <Provider store={store}>
        <div className="container">
            <HeaderNav />
            <CategoryWrap />
        </div>
    </Provider>
)

export default App