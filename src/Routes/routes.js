import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Components/Login';
import CreateUserForm from '../Components/Signup';
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={CreateUserForm} />
        </Switch>
    );
};
export default Routes;
