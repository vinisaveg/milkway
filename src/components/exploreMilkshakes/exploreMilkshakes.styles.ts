import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const MilkshakeBorderWrapper = styled.div`
    width: 22%;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 8px;
    transition: all 0.22s ease-in;
    margin-bottom: 80px;

    :hover {
        border-color: transparent;

        && .wrapper {
            transform: translate(0px, 0px);
        }
    }

    @media only screen and (max-width: 1380px) {
        width: 30%;
    }

    @media only screen and (max-width: 980px) {
        width: 46%;
    }

    @media only screen and (max-width: 700px) {
        width: 100%;
    }

    @media only screen and (max-width: 520px) {
        border-color: transparent;
    }
`;

export const MilkshakeWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;

    overflow: hidden;
    transform: translate(-20px, -20px);
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #0e2c49;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    @media only screen and (max-width: 520px) {
        transform: translate(0px, 0px);
        height: auto;
    }

    .textStyles {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

export const MilkshakeIconWrapper = styled.div`
    display: inline-block;
`;

export const MilkshakeName = styled.h2`
    color: ${(props) => props.theme.colors.text.light};
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 30px;
    text-align: center;
    max-width: 80%;
    min-height: 58px;
`;

export const MilkshakeDescription = styled.p`
    color: ${(props) => props.theme.colors.text.light};
    font-size: 18px;
    text-align: center;
    max-width: 190px;
    min-width: 190px;

    min-height: 50px;
    max-height: 50px;
`;
