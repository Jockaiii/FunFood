import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { ContactView } from '../view/contactview/ContactView'

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/ContactView" component={ContactView} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}
