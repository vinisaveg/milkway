import { FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global/global';

import theme from '../styles/theme/theme';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />;
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default MyApp;
