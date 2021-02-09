import { gql } from 'graphql-request';

export const authUserQuery = gql`
    query {
        authUser {
            id
            nickname
        }
    }
`;
