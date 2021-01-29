import styled from 'styled-components';

export const AboutWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding: 80px;

    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.darkBlue};

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
    color: ${(props) => props.theme.colors.text.light};
    margin-bottom: 50px;
`;

export const Text = styled.p`
    max-width: 500px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.text.light};
    margin-bottom: 50px;
`;

interface AboutImageProps {
    width?: string;
}

export const AboutImage = styled.img<AboutImageProps>`
    max-width: 500px;
    width: ${(props) => props.width || 'auto'};
`;

export const TipWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const TipWrapperText = styled(TipWrapper)`
    /* max-width: 280px; */
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;

    padding: 0;
    margin-left: 30px;
`;

export const CreateLink = styled.a`
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    margin-top: -20px;

    transition: opacity 0.15 ease-in-out;

    &&:hover {
        opacity: 0.85;
    }
`;
