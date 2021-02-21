import styled from 'styled-components';

import { Button } from '../../styles/shared/button/button.styles';

export const FormButtonAsButton = Button.withComponent('button');

export const FormButton = styled(FormButtonAsButton)`
    border: none;
    outline: none;
`;

export const BorderWrapper = styled.div`
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 8px;
    transition: all 0.22s ease-in;
    margin-bottom: 160px;

    :hover {
        border-color: transparent;

        && .wrapper {
            transform: translate(0px, 0px);
        }
    }

    @media only screen and (max-width: 520px) {
        border-color: transparent;
    }
`;

export const Wrapper = styled.form`
    width: 100%;
    min-height: 350px;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    overflow: hidden;
    transform: translate(-20px, -20px);
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #0e2c49;
    transition: all 0.2s ease-in-out;

    @media only screen and (max-width: 990px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 520px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 50px 40px 50px 40px;

        transform: translate(0px, 0px);
        height: auto;
    }
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text.light};
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 30px;
`;

export const Text = styled.p`
    color: ${(props) => props.theme.colors.text.light};
    font-size: 20px;
    margin-bottom: 50px;
`;

export const FormWrapper = styled.div`
    width: 45%;

    @media only screen and (max-width: 990px) {
        width: 100%;
    }
`;

export const ErrorLabel = styled.label`
    width: 100%;
    min-height: 20px;
    color: ${(props) => props.theme.colors.red};
    font-size: 14px;
    display: block;
    margin-bottom: 20px;
`;

export const InputLabel = styled.label`
    color: ${(props) => props.theme.colors.text.light};
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

export const InputTextArea = Input.withComponent('textarea');

export const TextArea = styled(InputTextArea)`
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: 300px;
    max-height: 320px;
    height: 300px;

    font-family: ${(props) => props.theme.fonts.primary};
`;

export const MilkshakeWrapper = styled(FormWrapper)``;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
