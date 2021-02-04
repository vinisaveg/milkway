import { FunctionComponent } from 'react';

import { request } from 'graphql-request';
import useSWR from 'swr';
import { signInMutation } from '../graphql/mutations/signIn.mutation';

import { environment } from '../config/environment';
import { RequestDocument } from 'graphql-request/dist/types';

interface Data {
    characters: {
        results: [{ id: string; name: string }];
    };
}

const fetcher = (mutation: RequestDocument) =>
    request(environment.baseURL, mutation);

const SignIn: FunctionComponent = () => {
    const { data, error } = useSWR(signInMutation, fetcher);

    if (error) {
        return <span>Something went bad</span>;
    }

    if (data) {
        console.log(data);

        return (
            <div>
                <span>Sign In </span>
            </div>
        );
    }

    return <span>Loading...Nothing to see yet...</span>;
};

export default SignIn;
