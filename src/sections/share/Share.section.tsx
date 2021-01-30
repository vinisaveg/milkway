import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import {
    ShareWrapper,
    SideWrapper,
    Title,
    Text,
    ShareLink,
    MilkshakesWrapper,
    Milkshake,
} from './share.styles';

import homepage from '../../content/homepage';

import MilkshakeIcon1 from '../../assets/icons/milkshake-icon-1.svg';
import MilkshakeIcon2 from '../../assets/icons/milkshake-icon-2.svg';
import MilkshakeIcon3 from '../../assets/icons/milkshake-icon-3.svg';
import MilkshakeIcon4 from '../../assets/icons/milkshake-icon-4.svg';
import MilkshakeIcon5 from '../../assets/icons/milkshake-icon-5.svg';
import MilkshakeIcon6 from '../../assets/icons/milkshake-icon-6.svg';

const Share: FunctionComponent = () => {
    return (
        <ShareWrapper>
            <SideWrapper>
                <Title>{homepage.share.title}</Title>

                <Text>{homepage.share.text}</Text>

                <Link href="/share" passHref>
                    <ShareLink>Share now</ShareLink>
                </Link>
            </SideWrapper>

            <SideWrapper>
                <MilkshakesWrapper>
                    <Milkshake>
                        <MilkshakeIcon1 />
                    </Milkshake>
                    <Milkshake>
                        <MilkshakeIcon2 />
                    </Milkshake>
                    <Milkshake>
                        <MilkshakeIcon3 />
                    </Milkshake>
                    <Milkshake>
                        <MilkshakeIcon4 />
                    </Milkshake>
                    <Milkshake>
                        <MilkshakeIcon5 />
                    </Milkshake>
                    <Milkshake>
                        <MilkshakeIcon6 />
                    </Milkshake>
                </MilkshakesWrapper>
            </SideWrapper>
        </ShareWrapper>
    );
};

export default Share;
