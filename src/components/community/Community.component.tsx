import { FunctionComponent } from 'react';
import Link from 'next/link';

import {
    BorderWrapper,
    Wrapper,
    ContentWrapper,
    Title,
    Text,
    ExploreButtonWrapper,
    ExploreButton,
} from './community.styles';

export const Community: FunctionComponent = () => {
    return (
        <BorderWrapper>
            <Wrapper className="wrapper">
                <ContentWrapper>
                    <Title>The community</Title>

                    <Text>
                        Explore lots of milkshakes from people all around the
                        globe
                    </Text>

                    <div>{/* Milkshake Icons */}</div>
                </ContentWrapper>

                <ExploreButtonWrapper width="auto" color="secondary">
                    <Link href="/explore" passHref>
                        <ExploreButton color="secondary">Explore</ExploreButton>
                    </Link>
                </ExploreButtonWrapper>
            </Wrapper>
        </BorderWrapper>
    );
};

export default Community;
