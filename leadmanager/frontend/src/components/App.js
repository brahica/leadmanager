// React
import React, { Component, Fragment } from 'react'

// React Router Dom
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
// Redux Store
import store from '../store'

// Alter Modules
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// Layout Components
import Header from './layout/Header'
import Alerts from './layout/Alerts'

// Leads Components
import DashBoard from './leads/DashBoard'

// Accounter Components
import Login from './accounts/Login'
import Register from './accounts/Register'

// Common Components
import PrivateRoute from './common/PrivateRoute'

import { loadUser } from '../actions/auth'

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

// Main App
class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/" Comp={DashBoard} />
                                    <Route exact path="/register/" component={Register} />
                                    <Route exact path="/login/" component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))