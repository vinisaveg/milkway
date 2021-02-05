import { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { RequestDocument } from 'graphql-request/dist/types';
import useSWR from 'swr';

import { signInSchema } from '../utils/validation/signIn.schema';

import { graphqlClient } from '../config/graphqlClient';
import { signInMutation } from '../graphql/mutations/user/signIn.mutation';

// import { useSignIn } from '../hooks/auth/useSignIn';

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

const SignIn: FunctionComponent = () => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            nickname: '',
            password: '',
        },
        validateOnChange: false,
        validationSchema: signInSchema,
        onSubmit: (values) => handleSignIn(),
    });

    const handleSignIn = () => {
        router.push({
            pathname: '/auth',
            query: {
                nickname: formik.values.nickname,
                password: formik.values.password,
            },
        });
        // const [data, error] = useSignIn(
        //     formik.values.nickname,
        //     formik.values.password
        // );
        // console.log(data, error);
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
