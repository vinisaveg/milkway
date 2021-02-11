import { FunctionComponent, useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
import { graphqlClient } from '../config/graphqlClient';
import { registerUserMutation } from '../graphql/mutations/user/register.mutation';
import { RegisterResponse } from '../types/auth/RegisterResponse.type';

export const Register: FunctionComponent = () => {
    const [responseError, setResponseError] = useState<string>('');
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            name: '',
            nickname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validateOnChange: false,
        validationSchema: registerSchema,
        onSubmit: () => handleRegister(),
    });

    const handleRegister = async () => {
        const response = await graphqlClient.request<RegisterResponse>(
            registerUserMutation,
            {
                name: formik.values.name,
                email: formik.values.email,
                nickname: formik.values.nickname,
                password: formik.values.password,
            }
        );

        if (response.registerUser.error) {
            setResponseError(response.registerUser.error.message);
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
                    <ErrorLabel>
                        {Object.values(formik.errors).find((error) => error)}
                    </ErrorLabel>

                    {responseError ? (
                        <ErrorLabel>{responseError}</ErrorLabel>
                    ) : null}

                    <Title>Register an account</Title>

                    <InputLabel htmlFor="name">Name</InputLabel>

                    <Input
                        type="text"
                        placeholder="What's your name?"
                        id="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />

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
