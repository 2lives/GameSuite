import gql from 'graphql-tag';

export default gql`
    mutation createUser(
        $firstname: String!
        $lastname: String!
        $email: String!
        $username: String!
        $joined: String!
        $avatar: String!
    ) {
        createUser(
            firstname: $firstname
            lastname: $lastname
            email: $email
            username: $username
            joined: $joined
            avatar: $avatar
        ) {
            __typename
            id
            firstname
            lastname
            username
            joined
        }
    }
`;
