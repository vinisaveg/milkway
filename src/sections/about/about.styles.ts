import styled from 'styled-components';

export const AboutWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding: 80px;

    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.darkBlue};

    @media only screen and (max-width: 935px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 820px) {
        padding: 80px 40px;
    }
`;

export const SideWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-flow: column;

    &&:last-child {
        margin-left: 50px;
    }

    @media only screen and (max-width: 935px) {
        width: 100%;
        margin-bottom: 30px;

        &&:last-child {
            margin-left: 0px;
        }
    }

    @media only screen and (max-width: 860px) {
        flex-direction: column;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 935px) {
        margin-right: 30px;
    }
`;

export const Title = styled.h3`
    max-width: 600px;
    font-size: 42px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text.light};
    margin-bottom: 50px;

    @media only screen and (max-width: 935px) {
        font-size: 32px;
    }
`;

export const Text = styled.p`
    max-width: 500px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.text.light};
    margin-bottom: 50px;

    @media only screen and (max-width: 935px) {
        font-size: 18px;
    }
`;

interface AboutImageProps {
    width?: string;
}

export const AboutImage = styled.img<AboutImageProps>`
    max-width: 500px;
    width: ${(props) => props.width || 'auto'};

    @media only screen and (max-width: 1130px) {
        flex-direction: column;
        width: 100%;
        max-width: auto;
    }

    /* @media only screen and (max-width: 935px) {
        width: 300px;
        height: 300px;
    } */

    @media only screen and (max-width: 860px) {
        width: 100%;
        height: auto;
    }
`;

export const TipWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 1130px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 935px) {
        width: 100%;
        align-items: flex-start;
    }
`;

export const TipWrapperText = styled(TipWrapper)`
    /* max-width: 280px; */
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;

    padding: 0;
    margin-left: 30px;

    @media only screen and (max-width: 1130px) {
        margin: 30px 0px 0px 0px;
    }
`;

export const CreateLink = styled.a`
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    margin-top: -20px;

    transition: opacity 0.15 ease-in-out;

    &&:hover {
        opacity: 0.85;
    }
`;
