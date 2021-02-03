import styled from 'styled-components';

interface ButtonProps {
    width?: string;
    color?: 'primary' | 'secondary' | 'transparent' | 'red' | 'green';
    margin?: Array<string>;
}

export const ButtonWrapper = styled.div<ButtonProps>`
    display: flex;
    width: ${(props) => props.width || 'auto'};
    border-radius: 11px;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors[props.color]};
    margin: ${(props) => props.margin?.join(' ')};
`;

export const Button = styled.a<ButtonProps>`
    position: relative;
    display: inline-block;
    width: 100%;
    border-radius: ${(props) => props.theme.misc.borderRadius};
    background-color: ${(props) => props.theme.colors[props.color]};

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

        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.1);
    }
`;
