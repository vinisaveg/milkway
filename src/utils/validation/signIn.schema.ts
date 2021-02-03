import * as yup from 'yup';

// yup.setLocale({
//     mixed: {
//         default: 'Please, fill in all fields to sign in',
//     },
// });

export const signInSchema = yup.object().shape({
    nickname: yup.string().required(),
    password: yup.string().required(),
});
