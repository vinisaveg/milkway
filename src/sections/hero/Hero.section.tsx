import { FunctionComponent } from 'react';
import Link from 'next/link';

import {
    HeroWrapper,
    SideWrapper,
    Title,
    SubTitle,
    HeroImage,
    BackgroundLayer,
} from './hero.styles';
import {
    Button,
    ButtonWrapper,
} from '../../styles/shared/button/button.styles';
import Navbar from '../../components/navbar/Navbar.component';
import Features from '../../components/features/Features.component';

import homepageContent from '../../content/homepage';

import heroImage from '../../assets/images/hero-img.png';

const Hero: FunctionComponent = () => {
    return (
        <>
            <HeroWrapper>
                <SideWrapper>
                    <Title>{homepageContent.hero.title}</Title>
                    <SubTitle>{homepageContent.hero.subTitle}</SubTitle>

                    <ButtonWrapper width="150px" color="transparent">
                        <Link href="/register" passHref>
                            <Button color="transparent">Start now!</Button>
                        </Link>
                    </ButtonWrapper>
                </SideWrapper>

                <SideWrapper>
                    <HeroImage
                        src={heroImage}
                        alt="Create a milkshake demo image"
                    />
                </SideWrapper>
            </HeroWrapper>

            <Features />

            <BackgroundLayer>{/* <Glass /> */}</BackgroundLayer>
        </>
    );
};

export default Hero;
