import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import {
    Button,
    ButtonWrapper,
} from '../../styles/shared/button/button.styles';

import MilkshakeIcon from '../milkshakeIcon/MilkshakeIcon.component';
import {
    BorderWrapper,
    Wrapper,
    ContentWrapper,
    IconWrapper,
    Title,
    Text,
    IngredientsWrapper,
    Ingredient,
    ButtonsWrapper,
    InstructionsWrapper,
    InstructionsPreview,
    UsernameLabel,
} from './milkshake.styles';

interface MilkshakeProps {
    id: string;
}

const Milkshake: FunctionComponent<MilkshakeProps> = ({ id }) => {
    const router = useRouter();

    const testIngredients: Array<string> = [
        'Ingredient 1',
        'Ingredient 2',
        'Ingredient 3',
        'Ingredient 4',
        'Ingredient 5',
        'Ingredient 6',
    ];

    return (
        <BorderWrapper>
            <Wrapper className="wrapper">
                <ContentWrapper>
                    <IconWrapper>
                        <MilkshakeIcon
                            iconColorA="##FF78CE"
                            iconColorB="#FF78CE"
                        />

                        <ButtonWrapper
                            margin={['0px', '0px', '0px', '30px']}
                            width="30%"
                            color="secondary"
                        >
                            <Button type="button" color="secondary">
                                Export
                            </Button>
                        </ButtonWrapper>
                    </IconWrapper>

                    <Title>Super Duper Milkshake</Title>

                    <Text>The super ultra master legal milkshake</Text>

                    <Title>Ingredients</Title>

                    <IngredientsWrapper>
                        {testIngredients.map((ingredient) => (
                            <Ingredient key={ingredient}>
                                {ingredient}
                            </Ingredient>
                        ))}
                    </IngredientsWrapper>

                    <ButtonsWrapper>
                        <ButtonWrapper width="40%" color="primary">
                            <Button
                                onClick={() => router.back()}
                                type="button"
                                color="primary"
                            >
                                Back
                            </Button>
                        </ButtonWrapper>

                        <ButtonWrapper width="40%" color="secondary">
                            <Button type="button" color="secondary">
                                Favorite
                            </Button>
                        </ButtonWrapper>
                    </ButtonsWrapper>
                </ContentWrapper>

                <InstructionsWrapper>
                    <Title>Instructions</Title>

                    <InstructionsPreview></InstructionsPreview>

                    <Text>
                        By <UsernameLabel>username</UsernameLabel>
                    </Text>

                    <Text>Enjoyed this recipe? Add it to your favorites!</Text>
                </InstructionsWrapper>
            </Wrapper>
        </BorderWrapper>
    );
};

export default Milkshake;
