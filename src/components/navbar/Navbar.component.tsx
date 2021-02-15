import { FunctionComponent, useState } from 'react';
import Link from 'next/link';

import {
    Wrapper,
    Logo,
    NavWrapper,
    NavLink,
    RegisterButtonWrapper,
    NavIconWrapper,
    NavIcon,
    NavIconSpan,
    SubWrapper,
} from './navbar.styles';
import { Button } from '../../styles/shared/button/button.styles';
import { useAuth } from '../../hooks/auth/auth';
import { graphqlClient } from '../../config/graphqlClient';
import { logoutUserQuery } from '../../graphql/queries/user/logout.query';
import { LogoutResponse } from '../../types/auth/LogoutResponse.type';

const Navbar: FunctionComponent = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const { data, mutate } = useAuth();

    const handleLogout = async () => {
        const response = await graphqlClient.request<LogoutResponse>(
            logoutUserQuery
        );

        if (response.logoutUser) {
            await mutate();
        }

        return;
    };

    const handleNav = () => {
        isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
    };

    return (
        <Wrapper>
            <Logo>milkway</Logo>

            <SubWrapper isNavOpen={isNavOpen}>
                <NavWrapper>
                    <Link href="/home" passHref>
                        <NavLink>home</NavLink>
                    </Link>

                    <Link href="/explore" passHref>
                        <NavLink>explore</NavLink>
                    </Link>

                    <NavLink href="#about">about</NavLink>

                    {data?.authUser ? (
                        <NavLink onClick={() => handleLogout()}>logout</NavLink>
                    ) : (
                        <Link href="/signin" passHref>
                            <NavLink>sign in</NavLink>
                        </Link>
                    )}
                </NavWrapper>

                <RegisterButtonWrapper width="150px" color="primary">
                    {data?.authUser ? (
                        <Link href="/me" passHref>
                            <Button color="primary">
                                {data.authUser.nickname}
                            </Button>
                        </Link>
                    ) : (
                        <Link href="/register" passHref>
                            <Button color="primary">Register</Button>
                        </Link>
                    )}
                </RegisterButtonWrapper>
            </SubWrapper>

            <NavIconWrapper onClick={() => handleNav()}>
                <NavIcon isNavOpen={isNavOpen}>
                    <NavIconSpan isNavOpen={isNavOpen} />
                </NavIcon>
            </NavIconWrapper>
        </Wrapper>
    );
};

export default Navbar;
