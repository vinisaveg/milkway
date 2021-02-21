import styled from 'styled-components';

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
