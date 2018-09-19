import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export class Login extends Component {
    render() {
        return (
            <div>
                <p>login</p>
                <div>
                    <Link to={'/signup'}>
                        <p>signup</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Login;
