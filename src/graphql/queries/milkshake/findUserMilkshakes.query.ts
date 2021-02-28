import { gql } from 'graphql-request';

export const FindUserMilkshakesQuery = gql`
    query FindUserMilkshakes {
        findUserMilkshakes {
            id
            name
            description
            iconColorA
            iconColorB
        }
    }
`;
