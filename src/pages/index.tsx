import { FunctionComponent } from 'react';
import Head from 'next/head';

import { Main } from '../styles/pages/index/index.styles';

import Hero from '../sections/hero/Hero.section';
import About from '../sections/about/About.section';
import Share from '../sections/share/Share.section';

const Index: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>milkway | Drink your way to the moon</title>
            </Head>

            <Main>
                <Hero />

                <About />

                <Share />
            </Main>
        </>
    );
};

export default Index;
