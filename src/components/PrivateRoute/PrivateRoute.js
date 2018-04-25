import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('tokens')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
    )} />
)