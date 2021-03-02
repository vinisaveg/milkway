import { gql } from 'graphql-request';

export const FindMilkshakeQuery = gql`
    query FindMilkshakeQuery($id: Float!) {
        findMilkshake(id: $id) {
            milkshake {
                id
                userId
                name
                description
                ingredients
                instructions
                iconColorA
                iconColorB
            }
            success
            error {
                message
                field
            }
        }
    }
`;
