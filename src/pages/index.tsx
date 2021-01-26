import Head from 'next/head';

import { FunctionComponent } from 'react';

import MilkshakeIcon from '../assets/icons/milkshake-icon.svg';

const Home: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>milkway | Drink you way to the moon</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ marginBottom: '30px' }}>Welcome to milkway!</h1>

                <MilkshakeIcon />
            </main>
        </div>
    );
};

export default Home;
