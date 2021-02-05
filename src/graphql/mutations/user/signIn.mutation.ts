import { gql } from 'graphql-request';

export const signInMutation = gql`
    mutation SignIn($nickname: String!, $password: String!){
        signInUser(data: { nickname: $nickname:, password: $password }) {
            user {
                id
                nickname
                password
            }
            success
            error {
                message
                field
            }
        }
    }
`;
