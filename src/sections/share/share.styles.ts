import styled from 'styled-components';

export const ShareWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 80px;

    box-sizing: border-box;

    /* @media only screen and (max-width: 1250px) {} */
`;

export const SideWrapper = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-flow: column;

    &&:last-child {
        margin-left: 50px;
    }
`;
export const Title = styled.h3`
    max-width: 600px;
    font-size: 42px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text.dark};
    margin-bottom: 50px;
`;

export const Text = styled.p`
    max-width: 500px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.text.dark};
    margin-bottom: 30px;
`;

export const ShareLink = styled.a`
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;

    transition: opacity 0.15 ease-in-out;

    &&:hover {
        opacity: 0.85;
    }
`;

export const MilkshakesWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
`;

export const Milkshake = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 30px;
    margin: 15px; //check size later

    background-color: #ffffff;

    border-radius: 8px;
    box-sizing: border-box;
    border: 2px solid transparent;
    transition: border 0.15s ease-in-out;

    &&:hover {
        border: 2px solid ${(props) => props.theme.colors.primary};
    }
`;
