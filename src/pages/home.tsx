import { GetServerSideProps } from 'next';
import { FunctionComponent } from 'react';
import Community from '../components/community/Community.component';

import Navbar from '../components/navbar/Navbar.component';
import UserMilkshakes from '../components/userMilkshakes/UserMilkshakes.component';
import { graphqlClient } from '../config/graphqlClient';
import { FindMilkshakesQuery } from '../graphql/queries/milkshake/findMilkshakes.query';
import { FindUserMilkshakesQuery } from '../graphql/queries/milkshake/findUserMilkshakes.query';
import Footer from '../sections/footer/Footer.section';

import { GlobalWrapper, Main } from '../styles/shared/wrapper/wrapper.styles';
import { FindMilkshakesResponse } from '../types/milkshake/FindMilkshakesResponse.type';
import { FindUserMilkshakesResponse } from '../types/milkshake/FindUserMilkshakesResponse.type';

interface HomeProps {
    userMilkshakes: FindUserMilkshakesResponse;
    communityMilkshakes: FindMilkshakesResponse;
}

const Home: FunctionComponent<HomeProps> = ({
    userMilkshakes,
    communityMilkshakes,
}) => {
    return (
        <GlobalWrapper backgroundColor="darkBlue">
            <Main>
                <Navbar />

                <UserMilkshakes userMilkshakes={userMilkshakes} />

                <Community communityMilkshakes={communityMilkshakes} />
            </Main>

            <Footer />
        </GlobalWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const userMilkshakes = await graphqlClient.request<FindUserMilkshakesResponse>(
        FindUserMilkshakesQuery,
        { limit: 3 }
    );

    const communityMilkshakes = await graphqlClient.request<FindMilkshakesResponse>(
        FindMilkshakesQuery,
        { limit: 6 }
    );

    return {
        props: {
            userMilkshakes,
            communityMilkshakes,
        },
    };
};

export default Home;
