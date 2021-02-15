import styled from 'styled-components';

import { ButtonWrapper } from '../../styles/shared/button/button.styles';

export const Wrapper = styled.header`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
`;

interface SubWrapperProps {
    isNavOpen: boolean;
}

export const SubWrapper = styled.nav<SubWrapperProps>`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 4;
    box-sizing: border-box;

    @media only screen and (max-width: 990px) {
        display: ${(props) => (props.isNavOpen ? 'flex' : 'none')};
        width: 100%;
        height: 500px;
        position: absolute;
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;
        top: -10px;
        background-color: rgba(255, 255, 255, 0.95);
        padding: 0px 30px;
        border-radius: 8px;
    }

    @media only screen and (max-width: 520px) {
        width: 90%;
        right: 5%;
        left: 5%;
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;

    && a:last-child {
        margin-right: 0;
    }

    @media only screen and (max-width: 990px) {
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;
    }
`;

export const NavLink = styled.a`
    font-size: 20px;
    color: ${(props) => props.theme.colors.text.light};
    margin-right: 60px;
    cursor: pointer;
    transition: opacity 0.15 ease-in-out;

    &&:hover {
        opacity: 0.85;
    }

    @media only screen and (max-width: 990px) {
        margin-right: 0px;
        margin-bottom: 60px;
        color: ${(props) => props.theme.colors.text.dark};
    }
`;

export const Logo = styled.h1`
    font-family: ${(props) => props.theme.fonts.logo};
    font-size: 38px;
    color: ${(props) => props.theme.colors.text.light};

    @media only screen and (max-width: 520px) {
        margin-left: 40px;
    }
`;

export const RegisterButtonWrapper = styled(ButtonWrapper)``;

export const NavIconWrapper = styled.div`
    display: none;
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0px;
    top: 0px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    margin: 0 auto;
    z-index: 10;

    @media only screen and (max-width: 990px) {
        display: block;
    }

    @media only screen and (max-width: 520px) {
        margin-right: 40px;
    }
`;

interface NavIconProps {
    isNavOpen: boolean;
}

export const NavIcon = styled.div<NavIconProps>`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
        props.isNavOpen
            ? 'rgba(11, 38, 65, 0.05)'
            : 'rgba(255, 255, 255, 0.25)'};
    border-radius: 8px;
    cursor: pointer;
    transform: translate(-5px, -5px);
    transition: all 0.2s ease-in-out;
    z-index: 11;

    &:hover {
        transform: translate(0px, 0px);
    }
`;

interface NavIconSpanProps {
    isNavOpen: boolean;
}

export const NavIconSpan = styled.span<NavIconSpanProps>`
    position: relative;
    background-color: ${(props) =>
        props.isNavOpen ? props.theme.colors.text.dark : '#ffffff'};
    width: 24px;
    height: 1px;
    transition: all 0.2s ease-in-out;
    z-index: 12;

    &:before {
        content: '';
        width: 24px;
        height: 1px;
        position: absolute;
        top: -8px;
        transition: all 0.2s ease-in-out;
        background-color: ${(props) =>
            props.isNavOpen ? props.theme.colors.text.dark : '#ffffff'};
    }

    &:after {
        content: '';
        width: 24px;
        height: 1px;
        position: absolute;
        top: 8px;
        transition: all 0.2s ease-in-out;
        background-color: ${(props) =>
            props.isNavOpen ? props.theme.colors.text.dark : '#ffffff'};
    }
`;
