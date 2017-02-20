import React from 'react'
import HeaderNav from './Header'
import LiveWrap from './LiveWrap'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

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