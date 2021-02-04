import { gql } from 'graphql-request';

export const signInMutation = gql`
    mutation {
        signInUser(data: { nickname: "vineras", password: "12345678" }) {
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
