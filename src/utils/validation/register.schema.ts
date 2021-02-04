import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    nickname: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'passwords must match')
        .required(),
});
