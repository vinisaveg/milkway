import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { graphqlClient } from '../config/graphqlClient';

import { logoutUserQuery } from '../graphql/queries/user/logout.query';

import { useAuth } from '../hooks/auth/auth';
import { LogoutResponse } from '../types/auth/LogoutResponse.type';

const Home: FunctionComponent = () => {
    const router = useRouter();
    const { data, error } = useAuth();

    const handleLogout = async () => {
        const response = await graphqlClient.request<LogoutResponse>(
            logoutUserQuery
        );

        if (response.logoutUser) {
            router.push({
                pathname: '/',
            });
        }
    };

    if (!data) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (data.authUser) {
        return (
            <div>
                <h1>Hello {data.authUser.nickname}</h1>
                <button onClick={() => handleLogout()}>logout</button>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Something went bad {error.message}</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>Hello stranger!</h1>
        </div>
    );
};

export default Home;
