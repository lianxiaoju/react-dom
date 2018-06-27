import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom'

import Home from '../components/home/home'
import Classify from '../components/classify/classify'
import Find from '../components/find/find'
import Shohpcar from '../components/shopcar/shopcar'
import Login from '../components/login/login'


import Foots from './footer/footer.jsx'



class Rou extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/classify" component={Classify} />
                            <Route path="/find" component={Find} />
                            <Route path="/shohpcar" component={Shohpcar} />
                            <Route path="/login" component={Login} />
                            <Route path="/" exact render={() => {
                                return <Redirect to="/home" />
                            }} />
                        </Switch>
                        {/*<Foots />*/}

                    </div>

                </Router>
            </div>
        )
    }
}


export default Rou