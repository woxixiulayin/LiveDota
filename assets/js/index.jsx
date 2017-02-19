import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ReactDom from 'react-dom'
import App from './app'

import '../css/index.scss'


ReactDom.render(
        <App />,
    document.getElementById('app')
)
