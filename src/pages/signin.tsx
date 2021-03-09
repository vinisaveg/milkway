import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { FunctionComponent, useState } from 'react';

import { signInSchema } from '../utils/validation/signIn.schema';

import { graphqlClient } from '../config/graphqlClient';
import { signInMutation } from '../graphql/mutations/user/signIn.mutation';
import { SignInResponse } from '../types/auth/SignInResponse.type';

import {
    PageWrapper,
    FormWrapper,
    SideLayer,
    Logo,
    Form,
    Title,
    InputLabelWrapper,
    InputLabel,
    Input,
    ForgotPassword,
    OptionSpan,
    RegisterLink,
    FormButton,
    ErrorLabel,
} from '../styles/pages/signinRegister/signInRegister.styles';
import { ButtonWrapper } from '../styles/shared/button/button.styles';

import { useAuth } from '../hooks/auth/auth';

const SignIn: FunctionComponent = () => {
    const [responseError, setResponseError] = useState<string>('');
    const router = useRouter();

    const { data } = useAuth();

    if (data?.authUser) {
        router.push({
            pathname: '/home',
        });
    }

    const formik = useFormik({
        initialValues: {
            nickname: '',
            password: '',
        },
        validateOnChange: false,
        validationSchema: signInSchema,
        onSubmit: () => handleSignIn(),
    });

    const handleSignIn = async () => {
        const response = await graphqlClient.request<SignInResponse>(
            signInMutation,
            {
                nickname: formik.values.nickname,
                password: formik.values.password,
            }
        );

        if (response.signInUser.error) {
            setResponseError(response.signInUser.error.message);
        } else {
            setResponseError('');

            router.push({
                pathname: '/home',
            });
        }
    };

    return (
        <PageWrapper>
            <FormWrapper>
                <Form onSubmit={formik.handleSubmit}>
                    {formik.errors.nickname ? (
                        <ErrorLabel>{formik.errors.nickname}</ErrorLabel>
                    ) : (
                        <ErrorLabel>{formik.errors.password}</ErrorLabel>
                    )}

                    {responseError ? (
                        <ErrorLabel>{responseError}</ErrorLabel>
                    ) : null}

                    <Title>Sign in to your account</Title>

                    <InputLabel htmlFor="nickname">Nickname</InputLabel>

                    <Input
                        type="text"
                        id="nickname"
                        onChange={formik.handleChange}
                        value={formik.values.nickname}
                    />

                    <InputLabelWrapper>
                        <InputLabel htmlFor="password">Password</InputLabel>

                        <Link href="/recoverpass" passHref>
                            <ForgotPassword>Forgot password?</ForgotPassword>
                        </Link>
                    </InputLabelWrapper>

                    <Input
                        type="password"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />

                    <ButtonWrapper
                        margin={['0px', '0px', '30px', '0px']}
                        width="100%"
                        color="primary"
                    >
                        <FormButton type="submit" color="primary">
                            Sign In
                        </FormButton>
                    </ButtonWrapper>

                    <OptionSpan>
                        Don't have an account?{' '}
                        <Link href="/register" passHref>
                            <RegisterLink>Register here</RegisterLink>
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

export default SignIn;
