import { gql } from 'graphql-request';

export const FindUserMilkshakesQuery = gql`
    query FindUserMilkshakes($limit: Float!) {
        findUserMilkshakes(limit: $limit) {
            id
            name
            description
            iconColorA
            iconColorB
        }
    }
`;
