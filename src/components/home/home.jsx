import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Carousel, WingBlank } from 'antd-mobile';
import {GETDATA} from '../../store/action'
import "./home.css"
class App extends Component {
    componentDidMount() {
        this.props.getdata()
    }
    render() {
        console.log(this.props.list)
        
        return (
            <div>
              home
            </div>
        )
    }
}

export default connect((state => {
    console.log(state.arr)
    return {
        list: state.arr
    }
}), (dispatch => {
    return {
      getdata(){
          dispatch({
              type:GETDATA
          })
      }
    }
}))(App)