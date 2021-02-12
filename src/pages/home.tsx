import { FunctionComponent } from 'react';

import Navbar from '../components/navbar/Navbar.component';

import { GlobalWrapper, Main } from '../styles/shared/wrapper/wrapper.styles';

const Home: FunctionComponent = () => {
    return (
        <GlobalWrapper backgroundColor="darkBlue">
            <Main>
                <Navbar />
            </Main>
        </GlobalWrapper>
    );
};

export default Home;
