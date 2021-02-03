import styled, { keyframes } from 'styled-components';

export const PageWrapper = styled.div`
    display: flex;
`;

export const SignInWrapper = styled.div`
    width: 60%;
    height: 100vh;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.colors.background};

    @media only screen and (max-width: 1050px) {
        width: 100%;
    }
`;

export const Form = styled.form`
    position: relative;
    width: 540px;
    flex-flow: column;
    text-align: left;
    background-color: #ffffff;

    box-sizing: border-box;
    border-radius: 8px;

    padding: 80px;

    @media only screen and (max-width: 500px) {
        padding: 80px 40px;
    }
`;

export const Title = styled.h2`
    color: ${(props) => props.theme.colors.text.dark};
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
`;

export const InputLabelWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ForgotPassword = styled.a`
    font-size: 14px;
    font-weight: lighter;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
        text-decoration: underline;
    }
`;

export const InputLabel = styled.label`
    color: ${(props) => props.theme.colors.text.dark};
    margin-bottom: 15px;
    display: inline-block;
`;

export const Input = styled.input`
    color: ${(props) => props.theme.colors.text.dark};
    width: 100%;
    border-radius: 8px;
    padding: 12px 14px;
    background-color: ${(props) => props.theme.colors.background};
    margin-bottom: 15px;
    font-weight: lighter;
    border: 1px solid transparent;
    outline: none;
    transition: border 0.15s ease-in-out;

    box-sizing: border-box;

    &&:focus {
        border: 1px solid ${(props) => props.theme.colors.primary};
    }

    &&:nth-last-of-type(1) {
        margin-bottom: 30px;
    }
`;

export const RegisterSpan = styled.span`
    display: inline-block;
    color: ${(props) => props.theme.colors.text.dark};
    margin-right: 2px;
`;

export const RegisterLink = styled.a`
    display: inline-block;
    color: ${(props) => props.theme.colors.primary};

    &&:hover {
        text-decoration: underline;
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

export const SideLayer = styled.div`
    width: 40%;
    height: 100vh;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    background: linear-gradient(
        45deg,
        #ff88cd,
        #ffa5ba,
        #ffb6bf,
        #d7a2ca,
        #d8aed4,
        #bcc2fe
    );
    background-size: 900% 900%;
    animation: ${backgroundAnimation} 25s ease infinite;

    @media only screen and (max-width: 1050px) {
        display: none;
    }
`;

export const Logo = styled.h1`
    font-family: ${(props) => props.theme.fonts.logo};
    font-size: 38px;
    color: ${(props) => props.theme.colors.text.light};
`;
