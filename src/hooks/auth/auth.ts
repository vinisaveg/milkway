import useSWR from 'swr';
import { RequestDocument } from 'graphql-request/dist/types';

import { graphqlClient } from '../../config/graphqlClient';

import { authUserQuery } from '../../graphql/queries/user/auth.query';

import { AuthResponse } from '../../types/auth/AuthResponse.types';
import { mutateCallback } from 'swr/dist/types';

interface HookResponse {
    data: AuthResponse;
    error: any;
    mutate: (
        data?:
            | AuthResponse
            | Promise<AuthResponse>
            | mutateCallback<AuthResponse>,
        shouldRevalidate?: boolean
    ) => Promise<AuthResponse | undefined>;
}

export const useAuth = (): HookResponse => {
    const fetcher = (query: RequestDocument) => graphqlClient.request(query);

    const { data, error, mutate } = useSWR<AuthResponse>(
        authUserQuery,
        fetcher
    );

    return { data, error, mutate };
};
