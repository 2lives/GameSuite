import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CreateUserMU from './Mutations/createUserMutation';
import CreateUserForm from './Components/createUserForm';
import { graphql, compose } from 'react-apollo';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Gamesuite</h1>
                </header>
                <CreateUserWithData />
            </div>
        );
    }
}

const CreateUserWithData = compose(
    graphql(CreateUserMU, {
        props: props => ({
            onCreate: user => {
                props.mutate({
                    variables: { ...user },
                    optimisticResponse: () => ({
                        createUser: { ...user, __typename: 'user' }
                    })
                });
            }
        }),
        options: {
            update: (dataProxy, { data: { createUser } }) => {}
        }
    })
)(CreateUserForm);

export default App;
