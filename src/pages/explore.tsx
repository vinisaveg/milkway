import { FunctionComponent } from 'react';
import Navbar from '../components/navbar/Navbar.component';
import Footer from '../sections/footer/Footer.section';

import { GlobalWrapper, Main } from '../styles/shared/wrapper/wrapper.styles';
import ExploreMilkshakes from '../components/exploreMilkshakes/ExploreMilkshakes.component';

const Explore: FunctionComponent = () => {
    return (
        <GlobalWrapper backgroundColor="darkBlue">
            <Main>
                <Navbar />

                <ExploreMilkshakes />
            </Main>

            <Footer />
        </GlobalWrapper>
    );
};

export default Explore;
