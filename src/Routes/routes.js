import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Components/Login';
import CreateUserFormContainer from '../Components/Signup';
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={CreateUserFormContainer} />
        </Switch>
    );
};
export default Routes;
