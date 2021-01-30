import styled from 'styled-components';

export const ShareWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 80px;

    box-sizing: border-box;

    @media only screen and (max-width: 940px) {
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (max-width: 820px) {
        padding: 80px 40px;
    }
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

    @media only screen and (max-width: 940px) {
        width: 100%;

        &&:last-child {
            margin-left: 0px;
            margin-top: 30px;
        }
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
    max-width: 500px;
    flex-wrap: wrap;

    @media only screen and (max-width: 940px) {
        max-width: 1000px;
    }
`;

export const Milkshake = styled.div`
    width: 130px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px 30px;
    margin: 10px;

    background-color: #ffffff;

    box-sizing: border-box;

    border-radius: 8px;
    border: 2px solid transparent;
    transition: border 0.15s ease-in-out;

    &&:hover {
        border: 2px solid ${(props) => props.theme.colors.primary};
    }

    @media only screen and (max-width: 1365px) {
        width: 45%;
        padding: 15px 25px;
        margin: 2%;
    }

    @media only screen and (max-width: 940px) {
        width: 150px;
        padding: 20px;
        margin: 10px;
    }

    @media only screen and (max-width: 725px) {
        width: 120px;
    }

    @media only screen and (max-width: 390px) {
        width: 100px;
    }

    @media only screen and (max-width: 340px) {
        width: 80px;
        padding: 10px;
    }
`;
