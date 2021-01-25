import Head from 'next/head';

import { FunctionComponent } from 'react';

const Home: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>milkway | Drink you way to the moon</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Welcome to milkway!</h1>
            </main>
        </div>
    );
};

export default Home;
