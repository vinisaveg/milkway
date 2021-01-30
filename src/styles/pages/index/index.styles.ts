import styled from 'styled-components';

export const Main = styled.main`
    max-width: 1600px;

    display: flex;
    flex-flow: column;
    align-items: center;

    margin: 0 auto;
    padding: 50px 120px 0px 120px;

    box-sizing: border-box;

    @media only screen and (max-width: 1200px) {
        padding: 50px 60px 0px 60px;
    }

    @media only screen and (max-width: 620px) {
        padding: 50px 30px 0px 30px;
    }

    @media only screen and (max-width: 520px) {
        padding: 50px 0px 0px 0px;
    }
`;
