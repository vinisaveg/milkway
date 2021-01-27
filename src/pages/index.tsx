import { FunctionComponent } from 'react';
import Head from 'next/head';

import { Main } from '../styles/pages/index/index.styles';
import { Button, ButtonWrapper } from '../styles/shared/button/button.styles';

const Index: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>milkway | Drink your way to the moon</title>
            </Head>

            <Main>
                <ButtonWrapper width="150px" color="green">
                    <Button
                        target="_blank"
                        href="https://vinisaveg.com"
                        color="green"
                    >
                        Sign in
                    </Button>
                </ButtonWrapper>
            </Main>
        </>
    );
};

export default Index;
