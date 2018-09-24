import CreateUserForm from './createUserForm';
import CreateUserMU from '../../Mutations/createUserMutation';

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

export class CreateUserFormContainer extends Component {
    render() {
        return <CreateUserWithData />;
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
export default CreateUserFormContainer;
