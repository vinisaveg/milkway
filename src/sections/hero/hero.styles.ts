import styled, { keyframes } from 'styled-components';

export const HeroWrapper = styled.div`
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
`;

export const Title = styled.h2`
    max-width: 600px;
    font-size: 82px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text.light};
    margin-bottom: 50px;
`;

export const SubTitle = styled.p`
    max-width: 500px;
    font-size: 24px;
    color: ${(props) => props.theme.colors.text.light};
    margin-bottom: 30px;
`;

export const HeroImage = styled.img`
    width: 100%;
    max-width: 600px;
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
    width: 75%;
    height: 1500px;
    background: linear-gradient(220deg, #ff4959, #6070ff, #ff78ce);
    background-size: 900% 900%;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    animation: ${backgroundAnimation} 21s ease infinite;
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
