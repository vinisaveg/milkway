import { FunctionComponent } from 'react';

import { Main } from '../styles/shared/wrapper/wrapper.styles';

import Hero from '../sections/hero/Hero.section';
import About from '../sections/about/About.section';
import Share from '../sections/share/Share.section';
import Footer from '../sections/footer/Footer.section';
import Navbar from '../components/navbar/Navbar.component';

const Index: FunctionComponent = () => {
    return (
        <>
            <Main>
                <Navbar />

                <Hero />

                <About />

                <Share />
            </Main>

            <Footer />
        </>
    );
};

export default Index;
