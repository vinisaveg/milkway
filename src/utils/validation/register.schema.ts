import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().min(2).required(),
    nickname: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'passwords must match')
        .required(),
});
