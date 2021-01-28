import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    && a:last-child {
        margin-right: 0;
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
`;

export const Logo = styled.h1`
    font-family: ${(props) => props.theme.fonts.logo};
    font-size: 42px;
    color: ${(props) => props.theme.colors.text.light};
`;
