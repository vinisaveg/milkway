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
    IconWrapper,
    ButtonsWrapper,
    FormButton,
} from './createMilkshake.styles';
import { ButtonWrapper } from '../../styles/shared/button/button.styles';

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

                        <Input
                            type="text"
                            id="name"
                            placeholder="Your milkshake's awesome name"
                        />

                        <InputLabel htmlFor="description">
                            Description
                        </InputLabel>

                        <Input
                            type="text"
                            id="description"
                            placeholder="Describe how sweet it is"
                        />

                        <InputLabel htmlFor="ingredients">
                            Ingredients
                        </InputLabel>

                        <Input
                            type="text"
                            id="ingredients"
                            placeholder="The goodies needed"
                        />

                        <InputLabel htmlFor="instructions">
                            Instructions
                        </InputLabel>

                        <TextArea
                            id="instructions"
                            placeholder="Give us the instructions to this amazing recipe. You can use markdown here :)"
                        />
                    </Form>
                </FormWrapper>

                <MilkshakeWrapper>
                    <Title>Make it unique...</Title>

                    <Text>
                        Choose the colors for your milkshake icon, and let your
                        recipe be unique
                    </Text>

                    {/* Color Picker */}
                    <Title>Download your new icon</Title>

                    <Text>
                        You can export this icon just by hitting the export
                        button
                    </Text>

                    <IconWrapper></IconWrapper>

                    <ButtonsWrapper>
                        <ButtonWrapper width="40%" color="primary">
                            <FormButton type="button" color="primary">
                                Export
                            </FormButton>
                        </ButtonWrapper>

                        <ButtonWrapper width="40%" color="secondary">
                            <FormButton type="button" color="secondary">
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
