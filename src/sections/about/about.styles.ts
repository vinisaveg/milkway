import styled from 'styled-components';

export const AboutWrapper = styled.div`
    width: 100vw;
    height: 400px; // for now
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 80px 120px;

    background-color: ${(props) => props.theme.colors.darkBlue};
`;
