import { gql } from 'graphql-request';

export const FindUserMilkshakesQuery = gql`
    query FindUserMilkshakes {
        findUserMilkshakes(limit: 3) {
            id
            name
            description
            iconColorA
            iconColorB
        }
    }
`;
