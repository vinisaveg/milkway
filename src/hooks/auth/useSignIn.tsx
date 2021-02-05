import { RequestDocument } from 'graphql-request/dist/types';
import useSWR from 'swr';
import { graphqlClient } from '../../config/graphqlClient';
import { signInMutation } from '../../graphql/mutations/user/signIn.mutation';

interface hookResponse {
    nickname: string;
    password: string;
}

export const useSignIn = (
    nickname: string,
    password: string
): Array<hookResponse> => {
    const fetcher = (mutation: RequestDocument) =>
        graphqlClient.request(mutation, {
            nickname: nickname,
            password: password,
        });

    const { data, error } = useSWR(signInMutation, fetcher);

    return [data, error];
};
