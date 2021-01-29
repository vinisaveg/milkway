import { FunctionComponent } from 'react';

import {
    FeaturesWrapper,
    Feature,
    FeatureIcon,
    FeatureTitle,
    FeatureText,
} from './features.styles';

import MiniMilkshakeIcon from '../../assets/icons/mini-milkshake-icon.svg';

import homepageContent from '../../content/homepage';

const Features: FunctionComponent = () => {
    return (
        <FeaturesWrapper>
            <Feature>
                <FeatureIcon>
                    <MiniMilkshakeIcon />
                </FeatureIcon>

                <FeatureTitle>
                    {homepageContent.features.first.title}
                </FeatureTitle>

                <FeatureText>{homepageContent.features.first.text}</FeatureText>
            </Feature>

            <Feature>
                <FeatureIcon>
                    <MiniMilkshakeIcon />
                </FeatureIcon>

                <FeatureTitle>
                    {homepageContent.features.second.title}
                </FeatureTitle>

                <FeatureText>
                    {homepageContent.features.second.text}
                </FeatureText>
            </Feature>

            <Feature>
                <FeatureIcon>
                    <MiniMilkshakeIcon />
                </FeatureIcon>

                <FeatureTitle>
                    {homepageContent.features.third.title}
                </FeatureTitle>

                <FeatureText>{homepageContent.features.third.text}</FeatureText>
            </Feature>

            <Feature>
                <FeatureIcon>
                    <MiniMilkshakeIcon />
                </FeatureIcon>

                <FeatureTitle>
                    {homepageContent.features.fourth.title}
                </FeatureTitle>

                <FeatureText>
                    {homepageContent.features.fourth.text}
                </FeatureText>
            </Feature>
        </FeaturesWrapper>
    );
};

export default Features;
