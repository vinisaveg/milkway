import { gql } from 'graphql-request';

export const logoutUserQuery = gql`
    query {
        logoutUser
    }
`;
