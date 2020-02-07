import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from '../pages/login'
import Index from '../pages/mainIndex'

function Main(){
    return (
        <Router>
            <Route path="/index" component={Index} exact></Route>
            <Route path="/" component={Login} exact></Route>
        </Router>
    )
}
export default Main