import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding: 80px 120px 160px 120px;

    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.darkBackground};

    /* @media only screen and (max-width: 1250px) {} */
`;

export const SideWrapper = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-flow: column;

    &&:last-child {
        margin-left: 50px;
    }
`;

export const LinksSideWrapper = styled(SideWrapper)`
    flex-flow: row;
`;

export const Logo = styled.h1`
    font-family: ${(props) => props.theme.fonts.logo};
    font-size: 42px;
    color: ${(props) => props.theme.colors.text.dark};
    margin-bottom: 30px;
`;

export const SimpleLink = styled.a`
    text-decoration: underline;
    color: ${(props) => props.theme.colors.text};
    transition: opacity 0.15s ease-in-out;

    &&:hover {
        opacity: 0.85;
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    flex-flow: column;
    width: 120px;
    margin-right: 50px;

    &&:last-child {
        margin: 0;
    }
`;

export const LinksTitle = styled.span`
    color: ${(props) => props.theme.colors.text.dark};
    font-size: 20px;
    font-weight: bold;

    margin-bottom: 30px;
`;

export const UsefulLink = styled(SimpleLink)`
    text-decoration: none;

    margin-bottom: 15px;

    &&:last-child {
        margin: 0;
    }
`;
