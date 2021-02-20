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

export const Wrapper = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;
    transform: translate(-20px, -20px);
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #0e2c49;
    transition: all 0.2s ease-in-out;

    @media only screen and (max-width: 520px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        transform: translate(0px, 0px);
        height: auto;
    }
`;

export const ContentWrapper = styled.div`
    width: 60%;
    padding: 50px 0px 50px 50px;
    display: flex;
    flex-flow: column;
    overflow: hidden;

    @media only screen and (max-width: 520px) {
        width: 80%;
        /* overflow: visible; */
        padding: 50px 0px 50px 40px;
    }
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

interface MilkshakeWrapperProps {
    position: number;
}

export const MilkshakesWrapper = styled.div<MilkshakeWrapperProps>`
    width: 1600px;
    display: flex;

    transition: all 0.2s ease-in-out;

    @media only screen and (max-width: 520px) {
        transform: ${(props) => `translateX(${props.position}px)`};
    }
`;

export const MilkshakeIconWrapper = styled.div`
    display: inline-block;
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

    margin: 0 auto 50px auto;
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
