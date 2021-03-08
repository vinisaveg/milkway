import { FunctionComponent } from 'react';
import Navbar from '../components/navbar/Navbar.component';
import Footer from '../sections/footer/Footer.section';

import { GlobalWrapper, Main } from '../styles/shared/wrapper/wrapper.styles';
import ExploreMilkshakes from '../components/exploreMilkshakes/ExploreMilkshakes.component';

import { FindMilkshakesResponse } from '../types/milkshake/FindMilkshakesResponse.type';
import { GetServerSideProps } from 'next';
import { FindMilkshakesQuery } from '../graphql/queries/milkshake/findMilkshakes.query';
import { graphqlClient } from '../config/graphqlClient';

interface ExploreProps {
    milkshakes: FindMilkshakesResponse;
}

const Explore: FunctionComponent<ExploreProps> = ({ milkshakes }) => {
    return (
        <GlobalWrapper backgroundColor="darkBlue">
            <Main>
                <Navbar />

                <ExploreMilkshakes milkshakes={milkshakes} />
            </Main>

            <Footer />
        </GlobalWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const milkshakes = await graphqlClient.request<FindMilkshakesResponse>(
        FindMilkshakesQuery,
        {
            limit: 8,
        }
    );

    return {
        props: {
            milkshakes,
        },
    };
};

export default Explore;
