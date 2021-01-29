import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            transparent: string;
            red: string;
            green: string;
            darkBlue: string;
            background: string;
            darkBackground: string;
            text: {
                light: string;
                dark: string;
            };
        };
        fonts: {
            primary: string;
            logo: string;
        };
        misc: {
            borderRadius: string;
        };
    }
}
