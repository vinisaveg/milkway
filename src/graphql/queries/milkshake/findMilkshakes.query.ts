import { gql } from 'graphql-request';

export const FindMilkshakesQuery = gql`
    query FindMilkshakes($limit: Number!) {
        findMilkshakes(limit: $limit) {
            id
            name
            iconColorA
            iconColorB
        }
    }
`;
