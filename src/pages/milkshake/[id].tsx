import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';

import {
    GlobalWrapper,
    Main,
} from '../../styles/shared/wrapper/wrapper.styles';
import Navbar from '../../components/navbar/Navbar.component';
import Footer from '../../sections/footer/Footer.section';
import Milkshake from '../../components/milkshake/Milkshake.component';

import { graphqlClient } from '../../config/graphqlClient';
import { FindMilkshakeQuery } from '../../graphql/queries/milkshake/findMilkshake.query';

interface MilkshakeByIdProps {
    id: string;
    milkshake: any;
}

const MilkshakeById: FunctionComponent<MilkshakeByIdProps> = ({
    id,
    milkshake,
}) => {
    return (
        <GlobalWrapper backgroundColor="darkBlue">
            <Main>
                <Navbar />

                <Milkshake id={String(id)} milkshake={milkshake} />
            </Main>

            <Footer />
        </GlobalWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params;

    const milkshake = await graphqlClient.request(FindMilkshakeQuery, {
        id: Number(id),
    });

    return {
        props: {
            id,
            milkshake,
        },
    };
};

export default MilkshakeById;
