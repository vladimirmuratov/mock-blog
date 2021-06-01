import React from 'react'
import {Redirect, Route, Switch} from "react-router";
import {Articles} from "./components/article/Articles";
import {Users} from "./components/user/Users";

export const Routes = () => {
    return (
        <Switch>
            <Route path='/articles' component={Articles}/>
            <Route path='/users' component={Users}/>
            <Redirect from='/' to='/articles'/>
        </Switch>
    )
}