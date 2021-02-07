import { gql } from 'graphql-request';

export const registerUserMutation = gql`
    mutation Register(
        $name: String!
        $email: String!
        $nickname: String!
        $password: String!
    ) {
        registerUser(
            data: {
                name: $name
                email: $email
                nickname: $nickname
                password: $password
            }
        ) {
            user {
                id
                nickname
            }
            error {
                message
                field
            }
            success
        }
    }
`;
