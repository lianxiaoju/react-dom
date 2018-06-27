import React from 'react'
import ReactDom from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
// import reducer from './store'
import {Provider} from 'react-redux'
import Router from './Router/index'
import "./index.css"
import 'antd-mobile/dist/antd-mobile.css'; 

import store from './store/'

// const store = createStore(reducer, applyMiddleware(logger))
ReactDom.render(<Provider store={store}><Router/></Provider>,document.getElementById('app'))

