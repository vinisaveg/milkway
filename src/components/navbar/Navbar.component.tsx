import { FunctionComponent } from 'react';
import Link from 'next/link';

import { Wrapper, Logo, NavWrapper, NavLink } from './navbar.styles';
import {
    Button,
    ButtonWrapper,
} from '../../styles/shared/button/button.styles';

const Navbar: FunctionComponent = () => {
    return (
        <Wrapper>
            <Logo>milkway</Logo>

            <NavWrapper>
                <Link href="/" passHref>
                    <NavLink>home</NavLink>
                </Link>

                <Link href="/explore" passHref>
                    <NavLink>explore</NavLink>
                </Link>

                <Link href="#about" passHref>
                    <NavLink>about</NavLink>
                </Link>

                <Link href="/signin" passHref>
                    <NavLink>sign in</NavLink>
                </Link>
            </NavWrapper>

            <ButtonWrapper width="150px" color="primary">
                <Link href="/signup" passHref>
                    <Button color="primary">Register</Button>
                </Link>
            </ButtonWrapper>
        </Wrapper>
    );
};

export default Navbar;
