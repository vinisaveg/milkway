import * as yup from 'yup';

export const signInSchema = yup.object().shape({
    nickname: yup.string().required(),
    password: yup.string().required(),
});
