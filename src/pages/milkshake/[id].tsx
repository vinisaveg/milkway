import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import {
    GlobalWrapper,
    Main,
} from '../../styles/shared/wrapper/wrapper.styles';
import Navbar from '../../components/navbar/Navbar.component';
import Footer from '../../sections/footer/Footer.section';
import Milkshake from '../../components/milkshake/Milkshake.component';

interface MilkshakeByIdProps {
    id: string;
}

const MilkshakeById: FunctionComponent<MilkshakeByIdProps> = ({ id }) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params;

    return {
        props: {
            id,
        },
    };
};

export default MilkshakeById;
