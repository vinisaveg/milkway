import { Error } from '../error/Error.type';

export interface FindMilkshakeResponse {
    findMilkshake: {
        milkshake?: {
            id: string;
            userId: number;
            name: string;
            description: string;
            ingredients: Array<string>;
            instructions: string;
            iconColorA: string;
            iconColorB: string;
        };
        success?: boolean;
        error?: Error;
    };
}
