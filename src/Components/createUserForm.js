import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { assetColors } from '../gsAssets/styles';
import { Form, Field } from 'react-final-form';

const styles = {
    submitButton: {
        padding: 10,
        width: 80,
        borderRadius: 5,
        textTransform: 'capitalize',
        backgroundColor: assetColors.teal,
        outline: 'none',
        border: 'none',
        marginTop: 20,
        ':hover': { backgroundColor: 'white' }
    }
};

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

    handleUpdateFirstname = event => {
        this.setState({
            [event.target.name]: event.target.value,
            lastname: this.state.lastname,
            email: this.state.email,
            username: this.state.username,
            joined: new Date()
        });
    };
    handleUpdateLastname = event => {
        this.setState({
            firstname: this.state.firstname,
            [event.target.name]: event.target.value,
            email: this.state.email,
            username: this.state.username,
            joined: new Date()
        });
    };
    handleUpdateEmail = event => {
        this.setState({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            [event.target.name]: event.target.value,
            username: this.state.username,
            joined: new Date()
        });
    };
    handleUpdateUsername = event => {
        this.setState({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            [event.target.name]: event.target.value,
            joined: new Date()
        });
    };

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
            <div className="signup form">
                <p>Signup</p>
                <Form
                    onSubmit={values => this.onSubmit(values)}
                    validate={this.validate.bind(this)}
                    render={({ handleSubmit, values }) => (
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
                                            onInput={this.handleUpdateFirstname}
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
                                            onInput={this.handleUpdateLastname}
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
                                            onInput={this.handleUpdateEmail}
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
                                            onInput={this.handleUpdateUsername}
                                        />

                                        {meta.touched &&
                                            meta.error && (
                                                <span>{meta.error}</span>
                                            )}
                                    </div>
                                )}
                            />
                            <button
                                onClick={this.handleCreate}
                                style={styles.submitButton}
                            >
                                submit
                            </button>
                        </form>
                    )}
                />
            </div>
        );
    }
}
export default CreateUserForm;
