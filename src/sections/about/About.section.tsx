import { FunctionComponent } from 'react';
import Link from 'next/link';

import {
    AboutWrapper,
    SideWrapper,
    Text,
    Title,
    AboutImage,
    TipWrapper,
    CreateLink,
    TipWrapperText,
} from './about.styles';

import homepage from '../../content/homepage';

import AboutImage1 from '../../assets/images/about-img-1.png';
import AboutImage2 from '../../assets/images/about-img-2.png';

const About: FunctionComponent = () => {
    return (
        <AboutWrapper id="about">
            <SideWrapper>
                <Title>{homepage.about.what.title}</Title>

                <Text>{homepage.about.what.text}</Text>

                <AboutImage
                    width="100%"
                    src={AboutImage1}
                    alt="About the icon"
                />
            </SideWrapper>

            <SideWrapper>
                <Title>{homepage.about.how.title}</Title>

                <Text>{homepage.about.how.text}</Text>

                <TipWrapper>
                    <AboutImage
                        width="50%"
                        src={AboutImage2}
                        alt="About the icon"
                    />

                    <TipWrapperText>
                        <Text>{homepage.about.how.tip}</Text>

                        <Link href="/milkshake" passHref>
                            <CreateLink>Create now</CreateLink>
                        </Link>
                    </TipWrapperText>
                </TipWrapper>
            </SideWrapper>
        </AboutWrapper>
    );
};

export default About;
