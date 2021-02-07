import { FunctionComponent } from 'react';
import Link from 'next/link';

import { useFormik } from 'formik';

import { registerSchema } from '../utils/validation/register.schema';

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
    FormButton,
    ErrorLabel,
} from '../styles/pages/signinRegister/signInRegister.styles';
import { ButtonWrapper } from '../styles/shared/button/button.styles';

export const Register: FunctionComponent = () => {
    const formik = useFormik({
        initialValues: {
            nickname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validateOnChange: false,
        validateOnBlur: true,
        validationSchema: registerSchema,
        onSubmit: (values) => submitRegister(),
    });

    const submitRegister = () => {
        console.log(formik.values);
    };

    return (
        <PageWrapper>
            <FormWrapper>
                <Form onSubmit={formik.handleSubmit}>
                    <ErrorLabel>
                        {Object.values(formik.errors).find((error) => error)}
                    </ErrorLabel>

                    <Title>Register an account</Title>

                    <InputLabel htmlFor="nickname">Nickname</InputLabel>

                    <Input
                        type="text"
                        placeholder="Choose a nickname"
                        id="nickname"
                        onChange={formik.handleChange}
                        value={formik.values.nickname}
                    />

                    <InputLabel htmlFor="email">E-mail</InputLabel>

                    <Input
                        type="text"
                        placeholder="Your best e-mail here"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                    <InputLabel htmlFor="password">Password</InputLabel>

                    <Input
                        type="password"
                        placeholder="Make sure it's safe"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />

                    <InputLabel htmlFor="confirmPassword">
                        Confirm password
                    </InputLabel>

                    <Input
                        type="password"
                        placeholder="And easy to remember"
                        id="confirmPassword"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />

                    <ButtonWrapper
                        margin={['0px', '0px', '30px', '0px']}
                        width="100%"
                        color="primary"
                    >
                        <FormButton type="submit" color="primary">
                            Register
                        </FormButton>
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
