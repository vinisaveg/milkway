import * as yup from 'yup';

export const createMilkshakeSchema = yup.object().shape({
    name: yup.string().min(2).required(),
    description: yup.string().required(),
    ingredients: yup.string().required(),
    instructions: yup.string().required(),
});
