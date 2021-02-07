import { RequestDocument } from 'graphql-request/dist/types';
import useSWR from 'swr';
import { mutateCallback } from 'swr/dist/types';
import { graphqlClient } from '../../config/graphqlClient';
import { signInMutation } from '../../graphql/mutations/user/signIn.mutation';

interface SignInResponse {
    signInUser: {
        user?: { id: string; nickname: string };
        success?: boolean;
        error?: { message: string; field: string };
    };
}

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
