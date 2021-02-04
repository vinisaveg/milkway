import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

import { GraphQLClient } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import useSWR from 'swr';

import { signInMutation } from '../graphql/mutations/signIn.mutation';

import { environment } from '../config/environment';

const gqlClient = new GraphQLClient(environment.baseURL, {
    credentials: 'include',
});

// interface Data {
//     characters: {
//         results: [{ id: string; name: string }];
//     };
// }

const fetcher = (mutation: RequestDocument) => gqlClient.request(mutation);

const SignIn: FunctionComponent = () => {
    const router = useRouter();
    const { data, error } = useSWR(signInMutation, fetcher);

    if (error) {
        return <span>Something went bad</span>;
    }

    if (data) {
        console.log(data);
        router.push('/home');

        return (
            <div>
                <span>Sign In </span>
            </div>
        );
    }

    return <span>Loading...Nothing to see yet...</span>;
};

export default SignIn;
