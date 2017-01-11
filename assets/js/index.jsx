import App from './components/App'
import React from 'react'
import ReactDom from 'react-dom'
import store from './lib/sedux'
import '../css/style.css'

store.setState({
    categorys: ['data', 'lol', '炉石']
})

ReactDom.render(<App store={store}/>, document.getElementById('app'))
