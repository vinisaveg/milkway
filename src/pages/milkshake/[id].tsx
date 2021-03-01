import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

import {
    GlobalWrapper,
    Main,
} from '../../styles/shared/wrapper/wrapper.styles';
import Navbar from '../../components/navbar/Navbar.component';
import Footer from '../../sections/footer/Footer.section';
import Milkshake from '../../components/milkshake/Milkshake.component';

const MilkshakeById: FunctionComponent = () => {
    const router = useRouter();

    const { id } = router.query;

    return (
        <GlobalWrapper backgroundColor="darkBlue">
            <Main>
                <Navbar />

                <Milkshake id={String(id)} />
            </Main>

            <Footer />
        </GlobalWrapper>
    );
};

export default MilkshakeById;
