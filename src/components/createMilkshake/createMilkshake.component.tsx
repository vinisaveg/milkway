import { FunctionComponent } from 'react';

import {
    BorderWrapper,
    Wrapper,
    FormWrapper,
    MilkshakeWrapper,
    Title,
    Text,
    Form,
    ErrorLabel,
    Input,
    InputLabel,
    TextArea,
} from './createMilkshake.styles';

const CreateMilkshakeForm: FunctionComponent = () => {
    return (
        <BorderWrapper>
            <Wrapper className="wrapper">
                <FormWrapper>
                    <Title>Create your awesome recipe</Title>

                    <Text>
                        All the needed ingredients and a step by step
                        instruction are essential
                    </Text>

                    <Form>
                        <ErrorLabel>Something went bad</ErrorLabel>

                        <InputLabel htmlFor="name">Name</InputLabel>

                        <Input type="text" id="name" />

                        <InputLabel htmlFor="description">
                            Description
                        </InputLabel>

                        <Input type="text" id="description" />

                        <InputLabel htmlFor="ingredients">
                            Ingredients
                        </InputLabel>

                        <Input type="text" id="ingredients" />

                        <InputLabel htmlFor="instructions">
                            Instructions
                        </InputLabel>

                        <TextArea id="instructions" />
                    </Form>
                </FormWrapper>

                <MilkshakeWrapper>
                    <Title>Make it unique...</Title>

                    <Text>
                        Choose the colors for your milkshake icon, and let your
                        recipe be unique
                    </Text>
                </MilkshakeWrapper>
            </Wrapper>
        </BorderWrapper>
    );
};

export default CreateMilkshakeForm;
