import Link from 'next/link';
import { FunctionComponent } from 'react';

import {
    PageWrapper,
    SignInWrapper,
    SideLayer,
    Logo,
    Form,
    Title,
    InputLabelWrapper,
    InputLabel,
    Input,
    ForgotPassword,
    RegisterSpan,
    RegisterLink,
} from '../styles/pages/signin/signIn.styles';
import { ButtonWrapper, Button } from '../styles/shared/button/button.styles';

const SignIn: FunctionComponent = () => {
    return (
        <PageWrapper>
            <SignInWrapper>
                <Form>
                    <Title>Sign in to your account</Title>

                    <InputLabel>Nickname</InputLabel>

                    <Input type="text" />

                    <InputLabelWrapper>
                        <InputLabel>Password</InputLabel>

                        <Link href="/recoverpass" passHref>
                            <ForgotPassword>Forgot password?</ForgotPassword>
                        </Link>
                    </InputLabelWrapper>

                    <Input type="password" />

                    <ButtonWrapper
                        margin={['0px', '0px', '30px', '0px']}
                        width="100%"
                        color="primary"
                    >
                        <Button color="primary">Sign In</Button>
                    </ButtonWrapper>

                    <RegisterSpan>
                        Don't have an account?{' '}
                        <Link href="/register" passHref>
                            <RegisterLink>Register here</RegisterLink>
                        </Link>
                    </RegisterSpan>
                </Form>
            </SignInWrapper>

            <SideLayer>
                <Logo>milkway</Logo>
            </SideLayer>
        </PageWrapper>
    );
};

export default SignIn;
