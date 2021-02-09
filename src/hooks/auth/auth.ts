import useSWR from 'swr';
import { RequestDocument } from 'graphql-request/dist/types';

import { graphqlClient } from '../../config/graphqlClient';

import { authUserQuery } from '../../graphql/queries/user/auth.query';

import { AuthResponse } from '../../types/auth/AuthResponse.types';

interface HookResponse {
    data: AuthResponse;
    error: any;
}

export const useAuth = (): HookResponse => {
    const fetcher = (query: RequestDocument) => graphqlClient.request(query);

    const { data, error } = useSWR<AuthResponse>(authUserQuery, fetcher);

    return { data, error };
};
