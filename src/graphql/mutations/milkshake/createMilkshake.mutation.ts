import { gql } from 'graphql-request';

export const CreateMilkshakeMutation = gql`
    mutation CreateMilkshake(
        $name: String!
        $description: String!
        $ingredients: [String!]!
        $instructions: String!
        $iconColorA: String!
        $iconColorB: String!
    ) {
        createMilkshake(
            data: {
                name: $name
                description: $description
                instructions: $instructions
                ingredients: $ingredients
                iconColorA: $iconColorA
                iconColorB: $iconColorB
            }
        ) {
            milkshake {
                userId
                id
                name
            }
            error {
                message
                field
            }
            success
        }
    }
`;
