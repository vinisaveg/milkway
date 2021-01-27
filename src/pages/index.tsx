import { FunctionComponent } from 'react';
import Head from 'next/head';

import { Main } from '../styles/pages/index/index.styles';
import Hero from '../components/hero/Hero.component';

const Index: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>milkway | Drink your way to the moon</title>
            </Head>

            <Main>
                <Hero />
            </Main>
        </>
    );
};

export default Index;
