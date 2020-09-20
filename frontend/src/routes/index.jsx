import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Redirect exact from="/" to="/dashboard" />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={Profile} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Routes