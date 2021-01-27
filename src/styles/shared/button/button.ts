import styled from 'styled-components';

interface ButtonProps {
    minWidth?: string;
}

export const ButtonWrapper = styled.div`
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.primary};
`;

export const ButtonBorder = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.misc.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.primary};
`;

export const Button = styled.a<ButtonProps>`
    position: relative;
    display: inline-block;
    min-width: ${(props) => props.minWidth || ''};
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.misc.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.primary};

    color: ${(props) => props.theme.colors.text.light};
    text-align: center;
    font-weight: bold;
    font-size: 1em;

    padding: 14px 24px;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: translate(-8px, -8px);

    &&:hover {
        transform: translate(0, 0);
    }
`;
