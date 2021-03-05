import { FunctionComponent, useState } from 'react';

import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import {
    BorderWrapper,
    Wrapper,
    FormWrapper,
    MilkshakeWrapper,
    Title,
    Text,
    ErrorLabel,
    Input,
    InputLabel,
    TextArea,
    IconColorPickerWrapper,
    ColorPicker,
    Color,
    ColorInput,
    IconWrapper,
    ButtonsWrapper,
    FormButton,
} from './createMilkshake.styles';
import { ButtonWrapper } from '../../styles/shared/button/button.styles';
import { graphqlClient } from '../../config/graphqlClient';
import { CreateMilkshakeMutation } from '../../graphql/mutations/milkshake/createMilkshake.mutation';
import { CreateMilkshakeresponse } from '../../types/milkshake/CreateMilkshakeResponse.type';
import { createMilkshakeSchema } from '../../utils/validation/createMilkshake.schema';
import MilkshakeIcon from '../milkshakeIcon/MilkshakeIcon.component';
import { exportMilkshakeIcon } from '../../utils/functions/exportMilkshakeIcon';

const CreateMilkshakeForm: FunctionComponent = () => {
    const [responseError, setResponseError] = useState<string>('');
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            ingredients: '',
            instructions: '',
            iconColorA: '',
            iconColorB: '',
        },
        validateOnChange: false,
        validationSchema: createMilkshakeSchema,
        onSubmit: () => handleCreateMilkshake(),
    });

    const handleCreateMilkshake = async () => {
        const milkshakeIngredients = formik.values.ingredients.split(',');

        const response = await graphqlClient.request<CreateMilkshakeresponse>(
            CreateMilkshakeMutation,
            {
                name: formik.values.name,
                description: formik.values.description,
                ingredients: milkshakeIngredients,
                instructions: formik.values.instructions,
                iconColorA: formik.values.iconColorA,
                iconColorB: formik.values.iconColorB,
            }
        );

        if (response.createMilkshake.error) {
            setResponseError(response.createMilkshake.error.message);
        } else {
            setResponseError('');

            router.push({
                pathname: '/home',
            });
        }
    };

    const handleExportMilkshakeIcon = () => {
        exportMilkshakeIcon(formik.values.name);
    };

    return (
        <BorderWrapper>
            <Wrapper className="wrapper" onSubmit={formik.handleSubmit}>
                <FormWrapper>
                    <Title>Create your awesome recipe</Title>

                    <Text>
                        All the needed ingredients and a step by step
                        instruction are essential
                    </Text>

                    {responseError ? (
                        <ErrorLabel>{responseError}</ErrorLabel>
                    ) : (
                        <ErrorLabel>
                            {Object.values(formik.errors).find(
                                (error) => error
                            )}
                        </ErrorLabel>
                    )}

                    <InputLabel htmlFor="name">Name</InputLabel>

                    <Input
                        type="text"
                        id="name"
                        placeholder="Your milkshake's awesome name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />

                    <InputLabel htmlFor="description">Description</InputLabel>

                    <Input
                        type="text"
                        id="description"
                        placeholder="Describe how sweet it is"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />

                    <InputLabel htmlFor="ingredients">Ingredients</InputLabel>

                    <Input
                        type="text"
                        id="ingredients"
                        placeholder="The goodies needed"
                        onChange={formik.handleChange}
                        value={formik.values.ingredients}
                    />

                    <InputLabel htmlFor="instructions">Instructions</InputLabel>

                    <TextArea
                        id="instructions"
                        placeholder="Give us the instructions to this amazing recipe. You can use markdown here :)"
                        onChange={formik.handleChange}
                        value={formik.values.instructions}
                    />
                </FormWrapper>

                <MilkshakeWrapper>
                    <Title>Make it unique...</Title>

                    <Text>
                        Choose the colors for your milkshake icon, and let your
                        recipe be unique
                    </Text>

                    <IconColorPickerWrapper>
                        <ColorPicker>
                            <Color color="#FF78CE" />
                            <Color color="#04DEA8" />
                            <Color color="#FFED4E" />
                            <Color color="#FF4959" />
                            <Color color="#6070FF" />
                            <Color color="#0B2641" />

                            <ColorInput
                                id="iconColorA"
                                type="text"
                                placeholder="#FF78CE"
                                onChange={formik.handleChange}
                                value={formik.values.iconColorA}
                            />
                        </ColorPicker>

                        <MilkshakeIcon
                            iconColorA={formik.values.iconColorA}
                            iconColorB={formik.values.iconColorB}
                        />

                        <ColorPicker>
                            <Color color="#FF78CE" />
                            <Color color="#04DEA8" />
                            <Color color="#FFED4E" />
                            <Color color="#FF4959" />
                            <Color color="#6070FF" />
                            <Color color="#0B2641" />

                            <ColorInput
                                id="iconColorB"
                                type="text"
                                placeholder="#FF78CE"
                                onChange={formik.handleChange}
                                value={formik.values.iconColorB}
                            />
                        </ColorPicker>
                    </IconColorPickerWrapper>

                    <Title>Download your new icon</Title>

                    <Text>
                        You can export this icon just by hitting the export
                        button
                    </Text>

                    <IconWrapper>
                        <MilkshakeIcon
                            iconColorA={formik.values.iconColorA}
                            iconColorB={formik.values.iconColorB}
                        />
                    </IconWrapper>

                    <ButtonsWrapper>
                        <ButtonWrapper width="40%" color="primary">
                            <FormButton
                                onClick={handleExportMilkshakeIcon}
                                type="button"
                                color="primary"
                            >
                                Export
                            </FormButton>
                        </ButtonWrapper>

                        <ButtonWrapper width="40%" color="secondary">
                            <FormButton type="submit" color="secondary">
                                Create
                            </FormButton>
                        </ButtonWrapper>
                    </ButtonsWrapper>
                </MilkshakeWrapper>
            </Wrapper>
        </BorderWrapper>
    );
};

export default CreateMilkshakeForm;
