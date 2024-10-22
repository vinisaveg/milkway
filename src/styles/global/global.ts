import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

html, body {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
}

html, body {
    scroll-behavior: smooth;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text.dark};
}

ol, ul {
	list-style: none;
}

body {
    background-color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.primary};
}

`;
