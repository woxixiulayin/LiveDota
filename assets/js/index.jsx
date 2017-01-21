import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ReactDom from 'react-dom'
import App from './app/containers/App'
import reducers from './app/reducers'

import '../css/index.scss'

const store = createStore(reducers)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
