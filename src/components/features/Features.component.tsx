import { FunctionComponent } from 'react';

import {
    FeaturesWrapper,
    Feature,
    FeatureIcon,
    FeatureTitle,
    FeatureText,
} from './features.styles';

import ExploreIcon from '../../assets/icons/explore-icon.svg';
import ShareIcon from '../../assets/icons/share-icon.svg';
import FavoriteIcon from '../../assets/icons/favorite-icon.svg';
import MiniMilkshakeIcon from '../../assets/icons/mini-milkshake-icon.svg';

import homepageContent from '../../content/homepage';

const Features: FunctionComponent = () => {
    return (
        <FeaturesWrapper>
            <Feature>
                <FeatureIcon>
                    <ExploreIcon />
                </FeatureIcon>

                <FeatureTitle>
                    {homepageContent.features.first.title}
                </FeatureTitle>

                <FeatureText>{homepageContent.features.first.text}</FeatureText>
            </Feature>

            <Feature>
                <FeatureIcon>
                    <ShareIcon />
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
                    <FavoriteIcon />
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
