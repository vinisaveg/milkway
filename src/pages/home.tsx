import { FunctionComponent } from 'react';
import Community from '../components/community/Community.component';

import Navbar from '../components/navbar/Navbar.component';

import { GlobalWrapper, Main } from '../styles/shared/wrapper/wrapper.styles';

const Home: FunctionComponent = () => {
    return (
        <GlobalWrapper backgroundColor="darkBlue">
            <Main>
                <Navbar />

                <Community />
            </Main>
        </GlobalWrapper>
    );
};

export default Home;
