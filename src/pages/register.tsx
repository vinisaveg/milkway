import Link from 'next/link';
import { FunctionComponent } from 'react';

import {
    PageWrapper,
    FormWrapper,
    SideLayer,
    Logo,
    Form,
    Title,
    InputLabel,
    Input,
    OptionSpan,
    RegisterLink,
} from '../styles/pages/signinRegister/signInRegister.styles';
import { ButtonWrapper, Button } from '../styles/shared/button/button.styles';

export const Register: FunctionComponent = () => {
    return (
        <PageWrapper>
            <FormWrapper>
                <Form>
                    <Title>Register an account</Title>

                    <InputLabel>Nickname</InputLabel>

                    <Input type="text" placeholder="Choose a nickname" />

                    <InputLabel>E-mail</InputLabel>

                    <Input type="text" placeholder="Your best e-mail here" />

                    <InputLabel>Password</InputLabel>

                    <Input type="password" placeholder="Make sure it's safe" />

                    <InputLabel>Confirm password</InputLabel>

                    <Input type="password" placeholder="And easy to remember" />

                    <ButtonWrapper
                        margin={['0px', '0px', '30px', '0px']}
                        width="100%"
                        color="primary"
                    >
                        <Button color="primary">Register</Button>
                    </ButtonWrapper>

                    <OptionSpan>
                        Already have an account?{' '}
                        <Link href="/signin" passHref>
                            <RegisterLink>Sign in here</RegisterLink>
                        </Link>
                    </OptionSpan>
                </Form>
            </FormWrapper>

            <SideLayer>
                <Logo>milkway</Logo>
            </SideLayer>
        </PageWrapper>
    );
};

export default Register;
