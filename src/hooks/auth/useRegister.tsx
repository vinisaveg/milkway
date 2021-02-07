import { RequestDocument } from 'graphql-request/dist/types';
import { mutateCallback } from 'swr/dist/types';
import useSWR from 'swr';

import { graphqlClient } from '../../config/graphqlClient';
import { registerUserMutation } from '../../graphql/mutations/user/register.mutation';

import { RegisterResponse } from '../../types/auth/RegisterResponse.type';

interface HookResponse {
    data: RegisterResponse;
    error: any;
    mutate: (
        data?:
            | RegisterResponse
            | Promise<RegisterResponse>
            | mutateCallback<RegisterResponse>,
        shouldRevalidate?: boolean
    ) => Promise<RegisterResponse | undefined>;
}

export const useRegister = (
    name: string,
    nickname: string,
    email: string,
    password: string,
    isSubmitted: boolean
): HookResponse => {
    const fetcher = (mutation: RequestDocument) =>
        graphqlClient.request(mutation, {
            name: name,
            email: email,
            nickname: nickname,
            password: password,
        });

    const { data, error, mutate } = useSWR<RegisterResponse>(
        isSubmitted ? registerUserMutation : null,
        fetcher
    );

    return { data, error, mutate };
};
