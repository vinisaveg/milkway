import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';

import { useAuth } from '../hooks/auth/auth';
import { useLogout } from '../hooks/auth/logout';

const Home: FunctionComponent = () => {
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
    const router = useRouter();
    const { data, error } = useAuth();
    const { mutate } = useLogout(isSubmited);

    const handleLogout = async () => {
        setIsSubmited(true);

        await mutate();

        setIsSubmited(false);

        router.push({
            pathname: '/',
        });
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
