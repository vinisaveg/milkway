import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: {
                light: string;
                dark: string;
            };
        };
        fonts: {
            primary: string;
            logo: string;
        };
    }
}
