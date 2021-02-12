import { FunctionComponent } from 'react';

import Navbar from '../components/navbar/Navbar.component';

import { Main } from '../styles/pages/index/index.styles';

const Home: FunctionComponent = () => {
    return (
        <Main>
            <Navbar />
        </Main>
    );
};

export default Home;
