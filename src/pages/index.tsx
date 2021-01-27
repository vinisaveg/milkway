import Head from 'next/head';

import { FunctionComponent } from 'react';
import { Button, ButtonWrapper } from '../styles/shared/button/button';

const Home: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>milkway | Drink your way to the moon</title>
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
                <ButtonWrapper>
                    <Button
                        target="_blank"
                        href="https://vinisaveg.com"
                        minWidth="100px"
                    >
                        Sign in
                    </Button>
                </ButtonWrapper>
            </main>
        </div>
    );
};

export default Home;
