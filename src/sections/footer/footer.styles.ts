import styled from 'styled-components';

export const FooterOutsideLayer = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.darkBackground};
`;

export const FooterWrapper = styled.footer`
    width: 100%;
    max-width: 1600px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding: 80px 120px 160px 120px;
    margin: 0 auto;

    box-sizing: border-box;

    @media only screen and (max-width: 820px) {
        flex-direction: column;
        padding: 80px;
    }

    @media only screen and (max-width: 520px) {
        padding: 80px 40px;
    }
`;

export const SideWrapper = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-flow: column;

    @media only screen and (max-width: 820px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

export const LinksSideWrapper = styled(SideWrapper)`
    flex-flow: row;
    justify-content: center;
    box-sizing: border-box;

    @media only screen and (max-width: 820px) {
        margin-top: 30px;
        width: 100%;
        justify-content: flex-start;
    }
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
    width: 100px;
    margin-right: 50px;

    &&:last-child {
        margin: 0;
    }

    @media only screen and (max-width: 1150px) {
        flex-direction: column;

        &&:nth-child(2) {
            margin: 30px 0px 0px 0px;
        }

        &&:nth-child(4) {
            margin: 30px 0px 0px 0px;
        }
    }
`;

export const DoubleLinksWrapper = styled.div`
    display: flex;
    justify-content: center;

    &&:last-child {
        margin-left: 30px;
    }

    @media only screen and (max-width: 1150px) {
        flex-direction: column;

        &&:last-child {
            margin: 0;
            justify-content: flex-start;
        }
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
