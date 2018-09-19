// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import HeaderBar from './Components/HeaderBar';

// import CreateUserMU from './Mutations/createUserMutation';
// import CreateUserForm from './Components/Signup';
// import { graphql, compose } from 'react-apollo';

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <HeaderBar />
//                 <CreateUserWithData />
//             </div>
//         );
//     }
// }

// const CreateUserWithData = compose(
//     graphql(CreateUserMU, {
//         props: props => ({
//             onCreate: user => {
//                 props.mutate({
//                     variables: { ...user },
//                     optimisticResponse: () => ({
//                         createUser: { ...user, __typename: 'user' }
//                     })
//                 });
//             }
//         }),
//         options: {
//             update: (dataProxy, { data: { createUser } }) => {}
//         }
//     })
// )(CreateUserForm);

// export default App;
