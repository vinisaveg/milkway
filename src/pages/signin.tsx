import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';

import { signInSchema } from '../utils/validation/signIn.schema';

import { useSignIn } from '../hooks/auth/useSignIn';

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

interface SignInResponse {
    user?: { id: string; nickname: string };
    success?: boolean;
    error?: { message: string; field: string };
}

const SignIn: FunctionComponent = () => {
    const [responseError, setResponseError] = useState<string>('');
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
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

    let { data, error, mutate } = useSignIn(
        formik.values.nickname,
        formik.values.password,
        isSubmited
    );

    const handleSignIn = async () => {
        setIsSubmited(true);

        const response = await mutate();

        if (response.signInUser.error) {
            setResponseError(response.signInUser.error.message);
            setIsSubmited(false);
        } else {
            setResponseError('');
            setIsSubmited(false);

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
