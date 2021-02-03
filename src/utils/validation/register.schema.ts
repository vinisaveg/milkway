import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    nickname: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'passwords must match')
        .required(),
});
