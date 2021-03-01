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

export const Wrapper = styled.form`
    width: 100%;
    min-height: 350px;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    overflow: hidden;
    transform: translate(-20px, -20px);
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #0e2c49;
    transition: all 0.2s ease-in-out;

    @media only screen and (max-width: 990px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 520px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 50px 40px 50px 40px;

        transform: translate(0px, 0px);
        height: auto;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;

    @media only screen and (max-width: 940px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text.light};
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 30px;
`;

export const Text = styled.p`
    color: ${(props) => props.theme.colors.text.light};
    font-size: 20px;
    margin-bottom: 50px;
`;

export const IconWrapper = styled.div`
    display: flex;
    height: 120px;
    align-items: flex-end;
    margin-bottom: 50px;
`;

export const IngredientsWrapper = styled.ul`
    max-width: 80%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 50px;
`;

export const Ingredient = styled.li`
    color: ${(props) => props.theme.colors.text.light};
    margin: 15px 10px;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InstructionsWrapper = styled(ContentWrapper)`
    width: 45%;
    position: relative;

    @media only screen and (max-width: 940px) {
        width: 100%;
        padding-top: 50px;
    }
`;

export const InstructionsPreview = styled.div`
    background-color: #0b2641;
    min-height: 350px;
    max-height: 350px;
    padding: 15px;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.text.light};
    margin-bottom: 50px;
    overflow-y: scroll;
`;

export const UsernameLabel = styled.span`
    color: ${(props) => props.theme.colors.secondary};
`;
