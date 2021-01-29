import styled from 'styled-components';

export const FeaturesWrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 8px 0px 0px 0px;

    padding: 80px 0px 80px 80px;
    margin-left: 250px;

    box-sizing: border-box;
`;

export const Feature = styled.div`
    width: 25%;
    max-width: 280px;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-flow: column;

    text-align: left;
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
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
`;

export const FeatureText = styled.p`
    min-height: 60px;
    max-width: 200px;
    font-size: 16px;
`;
