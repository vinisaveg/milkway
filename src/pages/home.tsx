import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

const Home: FunctionComponent = () => {
    const router = useRouter();

    return (
        <div>
            <h1>Hello home! </h1>
        </div>
    );
};

export default Home;
