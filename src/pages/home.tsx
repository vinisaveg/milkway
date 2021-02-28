import { FunctionComponent } from 'react';
import Community from '../components/community/Community.component';

import Navbar from '../components/navbar/Navbar.component';
import UserMilkshakes from '../components/userMilkshakes/UserMilkshakes.component';
import Footer from '../sections/footer/Footer.section';

import { GlobalWrapper, Main } from '../styles/shared/wrapper/wrapper.styles';

const Home: FunctionComponent = () => {
    return (
        <GlobalWrapper backgroundColor="darkBlue">
            <Main>
                <Navbar />

                <UserMilkshakes />

                <Community />
            </Main>

            <Footer />
        </GlobalWrapper>
    );
};

export default Home;
