import { User } from '../user/User.type';
import { Error } from '../error/Error.type';

export interface SignInResponse {
    signInUser: {
        user?: User;
        success?: boolean;
        error?: Error;
    };
}
