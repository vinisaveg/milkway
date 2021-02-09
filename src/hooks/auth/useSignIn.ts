import { RequestDocument } from 'graphql-request/dist/types';
import { mutateCallback } from 'swr/dist/types';
import useSWR from 'swr';

import { graphqlClient } from '../../config/graphqlClient';
import { signInMutation } from '../../graphql/mutations/user/signIn.mutation';

import { SignInResponse } from '../../types/auth/SignInResponse.type';

interface HookResponse {
    data: SignInResponse;
    error: any;
    mutate: (
        data?:
            | SignInResponse
            | Promise<SignInResponse>
            | mutateCallback<SignInResponse>,
        shouldRevalidate?: boolean
    ) => Promise<SignInResponse | undefined>;
}

export const useSignIn = (
    nickname: string,
    password: string,
    isSubmited: boolean
): HookResponse => {
    const fetcher = (mutation: RequestDocument) =>
        graphqlClient.request(mutation, {
            nickname: nickname,
            password: password,
        });

    const { data, error, mutate } = useSWR<SignInResponse>(
        isSubmited ? signInMutation : null,
        fetcher
    );

    return { data, error, mutate };
};
