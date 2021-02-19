import { gql } from 'graphql-request';

export const FindMilkshakesQuery = gql`
    query FindMilkshakes($limit: Float!) {
        findMilkshakes(limit: $limit) {
            id
            name
            iconColorA
            iconColorB
        }
    }
`;
