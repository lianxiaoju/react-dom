import { combineReducers } from "redux"
import { GETDATA } from './action'

let arr = (state = [], action) => {
    switch (action.type) {
        case GETDATA:
            return action.payload
        default:
            return state
    }
}


let reducer = combineReducers({
    arr
})



export default reducer