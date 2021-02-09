import { FunctionComponent } from 'react';
import Link from 'next/link';

import {
    Wrapper,
    Logo,
    NavWrapper,
    NavLink,
    RegisterButtonWrapper,
} from './navbar.styles';
import { Button } from '../../styles/shared/button/button.styles';

const Navbar: FunctionComponent = () => {
    return (
        <Wrapper>
            <Logo>milkway</Logo>

            <NavWrapper>
                <Link href="/home" passHref>
                    <NavLink>home</NavLink>
                </Link>

                <Link href="/explore" passHref>
                    <NavLink>explore</NavLink>
                </Link>

                <NavLink href="#about">about</NavLink>

                <Link href="/signin" passHref>
                    <NavLink>sign in</NavLink>
                </Link>
            </NavWrapper>

            <RegisterButtonWrapper width="150px" color="primary">
                <Link href="/register" passHref>
                    <Button color="primary">Register</Button>
                </Link>
            </RegisterButtonWrapper>
        </Wrapper>
    );
};

export default Navbar;
