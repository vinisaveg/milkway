import styled from 'styled-components';

export const FeaturesWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 8px 8px 0px 0px;

    padding: 80px;
    box-sizing: border-box;

    @media only screen and (max-width: 1170px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 820px) {
        padding: 80px 40px;
    }

    @media only screen and (max-width: 600px) {
        background-color: rgba(255, 255, 255);
    }
`;

export const DoubleFeatureWrapper = styled.div`
    width: 50%;
    display: flex;

    @media only screen and (max-width: 1170px) {
        width: 100%;
        margin-bottom: 30px;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 620px) {
        align-items: flex-start;
        flex-direction: column;
        margin-bottom: 0px;
    }
`;

export const Feature = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-flow: column;

    text-align: left;

    @media only screen and (max-width: 820px) {
        margin-bottom: 30px;
    }

    @media only screen and (max-width: 620px) {
        width: 100%;
    }
`;

export const FeatureIcon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.secondary};

    margin-bottom: 30px;

    &&:after {
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        right: -8px;
        bottom: -8px;
        border-radius: 8px;
        border: 1px solid ${(props) => props.theme.colors.secondary};
    }
`;

export const FeatureTitle = styled.h3`
    color: ${(props) => props.theme.colors.text.dark};
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
`;

export const FeatureText = styled.p`
    color: ${(props) => props.theme.colors.text.dark};
    min-height: 60px;
    max-width: 200px;
    font-size: 16px;

    @media only screen and (max-width: 620px) {
        min-height: auto;
    }
`;
