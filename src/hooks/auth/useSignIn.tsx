import { RequestDocument } from 'graphql-request/dist/types';
import useSWR from 'swr';
import { graphqlClient } from '../../config/graphqlClient';
import { signInMutation } from '../../graphql/mutations/user/signIn.mutation';

interface hookResponse {
    nickname: string;
    password: string;
    isSubmited: boolean;
}

export const useSignIn = (
    nickname: string,
    password: string,
    isSubmited: boolean
) => {
    const fetcher = (mutation: RequestDocument) =>
        graphqlClient.request(mutation, {
            nickname: nickname,
            password: password,
        });

    const { data, error, mutate } = useSWR(
        isSubmited ? signInMutation : null,
        fetcher
    );

    return [data, error, mutate];
};
