import React, { Component } from 'react';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Form, Field } from 'react-final-form';
import { Mutation } from 'react-apollo';

class CreateUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            joined: new Date()
        };
    }

    handleCreate = () => {
        this.props.onCreate({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            username: this.state.username,
            joined: this.state.joined
        });
    };
    validate(...args) {
        console.log('validating:', args);
    }
    onSubmit(values) {
        console.log('Form was submitted', values);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Form
                    onSubmit={values => this.onSubmit(values)}
                    validate={this.validate.bind(this)}
                    render={({ handleSubmit, pristine, invalid, values }) => (
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                console.log(this.state);
                                handleSubmit(values);
                            }}
                        >
                            <Field
                                name="firstname"
                                type="text"
                                render={({ input, meta }) => (
                                    <div>
                                        <TextField
                                            {...input}
                                            floatingLabelText="First Name"
                                            onInput={this.handleUpdate}
                                        />

                                        {meta.touched &&
                                            meta.error && (
                                                <span>{meta.error}</span>
                                            )}
                                    </div>
                                )}
                            />

                            <Field
                                name="lastname"
                                type="text"
                                render={({ input, meta }) => (
                                    <div>
                                        <TextField
                                            {...input}
                                            floatingLabelText="Last Name"
                                            onInput={this.handleUpdate}
                                        />

                                        {meta.touched &&
                                            meta.error && (
                                                <span>{meta.error}</span>
                                            )}
                                    </div>
                                )}
                            />

                            <Field
                                name="email"
                                type="text"
                                render={({ input, meta }) => (
                                    <div>
                                        <TextField
                                            {...input}
                                            floatingLabelText="Email"
                                            onInput={this.handleUpdate}
                                        />

                                        {meta.touched &&
                                            meta.error && (
                                                <span>{meta.error}</span>
                                            )}
                                    </div>
                                )}
                            />

                            <Field
                                name="username"
                                type="text"
                                render={({ input, meta }) => (
                                    <div>
                                        <TextField
                                            {...input}
                                            floatingLabelText="Username"
                                            onInput={this.handleUpdate}
                                        />

                                        {meta.touched &&
                                            meta.error && (
                                                <span>{meta.error}</span>
                                            )}
                                    </div>
                                )}
                            />
                            <button onClick={this.handleCreate}>submit</button>
                        </form>
                    )}
                    //     </Mutation>
                />
            </div>
        );
    }
}
export default CreateUserForm;
