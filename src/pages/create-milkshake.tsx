import { FunctionComponent } from 'react';

import { GlobalWrapper, Main } from '../styles/shared/wrapper/wrapper.styles';

import Navbar from '../components/navbar/Navbar.component';
import Footer from '../sections/footer/Footer.section';
import CreateMilkshakeForm from '../components/createMilkshake/createMilkshake.component';

const CreateMilkshake: FunctionComponent = () => {
    // Auth User
    // If not signed in, send back to home

    return (
        <GlobalWrapper backgroundColor="darkBlue">
            <Main>
                <Navbar />

                <CreateMilkshakeForm />
            </Main>

            <Footer />
        </GlobalWrapper>
    );
};

export default CreateMilkshake;
