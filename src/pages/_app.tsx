import { FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global/global';

import theme from '../styles/theme/theme';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>milkway | The Intergalactic lab for milkshakes</title>
            </Head>

            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default MyApp;
