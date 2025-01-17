import { User } from '../user/User.type';
import { Error } from '../error/Error.type';

export interface RegisterResponse {
    registerUser: {
        user?: User;
        success?: boolean;
        error?: Error;
    };
}
