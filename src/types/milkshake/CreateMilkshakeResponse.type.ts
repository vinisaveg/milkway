import { Error } from '../error/Error.type';
import { Milkshake } from './Milkshake.type';

export interface CreateMilkshakeresponse {
    createMilkshake?: {
        milkshake?: Milkshake;
        error?: Error;
        success?: boolean;
    };
}
