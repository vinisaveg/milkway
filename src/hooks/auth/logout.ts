import useSWR from 'swr';
import { RequestDocument } from 'graphql-request/dist/types';

import { graphqlClient } from '../../config/graphqlClient';

import { logoutUserQuery } from '../../graphql/queries/user/logout.query';

import { LogoutResponse } from '../../types/auth/LogoutResponse.type';
import { mutateCallback } from 'swr/dist/types';

interface HookResponse {
    data: LogoutResponse;
    error: any;
    mutate: (
        data?:
            | LogoutResponse
            | Promise<LogoutResponse>
            | mutateCallback<LogoutResponse>,
        shouldRevalidate?: boolean
    ) => Promise<LogoutResponse | undefined>;
}

export const useLogout = (isSubmited: boolean): HookResponse => {
    const fetcher = (query: RequestDocument) => graphqlClient.request(query);

    const { data, error, mutate } = useSWR<LogoutResponse>(
        isSubmited ? logoutUserQuery : null,
        fetcher
    );

    return { data, error, mutate };
};
