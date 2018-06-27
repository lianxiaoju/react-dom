import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import { GETDATA } from './action'

let middleware = ({ getState, dispatch }) => (next) => (action) => {
    if (action.type === GETDATA) {
        axios.get('/api/log').then(result => {
            // console.log(result.data)
            next({
                type: GETDATA,
                payload: result.data
            })
        })

    } else {
        next(action)
    }
}


const store = createStore(reducer, applyMiddleware(logger, middleware))

export default store