import styled, { keyframes } from 'styled-components';

export const HeroWrapper = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 80px;
`;

export const SideWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-flow: column;

    &&:last-child {
        margin-left: 50px;
    }

    @media only screen and (max-width: 520px) {
        padding: 0px 0px 0px 40px;
    }
`;

export const Title = styled.h2`
    max-width: 600px;
    font-size: 74px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text.light};
    margin-bottom: 50px;

    @media only screen and (max-width: 1000px) {
        font-size: 54px;
        max-width: 500px;
    }

    @media only screen and (max-width: 600px) {
        max-width: auto;
        font-size: 42px;
    }
`;

export const SubTitle = styled.p`
    max-width: 500px;
    font-size: 24px;
    color: ${(props) => props.theme.colors.text.light};
    margin-bottom: 30px;

    @media only screen and (max-width: 1000px) {
        font-size: 20px;
        max-width: 400px;
    }

    @media only screen and (max-width: 600px) {
        max-width: auto;
        font-size: 18px;
    }
`;

export const HeroImage = styled.img`
    width: 100%;
    max-width: 600px;

    @media only screen and (max-width: 1000px) {
        display: none;
    }
`;

const backgroundAnimation = keyframes`
    0% {
      background-position: 92% 0%;
    }
    50% {
      background-position: 9% 100%;
    }
    100% {
      background-position: 92% 0%;
    }

`;

export const BackgroundLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 70%;
    height: 1500px;
    background: linear-gradient(
        220deg,
        #6070ff,
        #ff78ce,
        #fc6d79,
        #a18af1,
        #ff78ce,
        #6070ff
    );
    background-size: 900% 900%;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    animation: ${backgroundAnimation} 25s ease infinite;

    @media only screen and (max-width: 1360px) {
        width: 80%;
    }

    @media only screen and (max-width: 835px) {
        width: 95%;
        height: 1200px;
    }

    @media only screen and (max-width: 750px) {
        width: 140%;
        height: 900px;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 500px;
        clip-path: none;
    }

    @media only screen and (max-width: 525px) {
        width: 100%;
        height: 600px;
        clip-path: none;
    }
`;

export const Glass = styled.div`
    width: 100%;
    height: 1500px;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(300px);
    background-clip: padding-box;
    border: solid 2px transparent;
`;
