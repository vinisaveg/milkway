import styled from 'styled-components';
import {
    Button,
    ButtonWrapper,
} from '../../styles/shared/button/button.styles';

export const BorderWrapper = styled.div`
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 8px;
    transition: all 0.22s ease-in;

    :hover {
        border-color: transparent;

        && .wrapper {
            transform: translate(0px, 0px);
        }
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;
    transform: translate(-20px, -20px);
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #0e2c49;
    transition: all 0.2s ease-in-out;
`;

export const ContentWrapper = styled.div`
    width: 60%;
    padding: 50px 0px 50px 50px;
    display: flex;
    flex-flow: column;
`;

export const Title = styled.h2`
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

export const ExploreButtonWrapper = styled(ButtonWrapper)`
    @media only screen and (min-width: 520px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 100%;
        margin: 0;
        padding: 0;

        background-color: ${(props) => props.theme.colors.secondary};
        border: none;
        cursor: pointer;
        border-radius: 0px;
        transition: all 0.2s ease-in-out;

        &&:hover {
            opacity: 0.8;
        }
    }
`;

export const ExploreButton = styled(Button)`
    @media only screen and (min-width: 520px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 0px;
        background-color: none;

        color: ${(props) => props.theme.colors.text.light};
        text-align: center;
        font-weight: bold;
        font-size: 20px;

        padding: 0;
        margin: 0;

        cursor: pointer;
        transform: translate(0px, 0px);

        &&:hover {
            box-shadow: none;
        }
    }
`;
