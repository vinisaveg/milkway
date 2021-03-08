import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { graphqlClient } from '../../config/graphqlClient';
import { RequestDocument } from 'graphql-request/dist/types';
import useSWR from 'swr';

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
    InstructionsPreviewWrapper,
    UsernameLabel,
} from './milkshake.styles';
import InstructionsPreview from '../instructionsPreview/InstructionsPreview.component';

import { FindMilkshakeQuery } from '../../graphql/queries/milkshake/findMilkshake.query';
import { FindMilkshakeResponse } from '../../types/milkshake/FindMilkshakeResponse.type';
import { exportMilkshakeIcon } from '../../utils/functions/exportMilkshakeIcon';

interface MilkshakeProps {
    id: string;
    milkshake: any;
}

const Milkshake: FunctionComponent<MilkshakeProps> = ({ id, milkshake }) => {
    const router = useRouter();

    const fetcher = (query: RequestDocument) =>
        graphqlClient.request(query, {
            id: Number(id),
        });

    const { data, error } = useSWR<FindMilkshakeResponse>(
        FindMilkshakeQuery,
        fetcher,
        { initialData: milkshake }
    );

    const handleExportMilkshakeIcon = () => {
        exportMilkshakeIcon(data?.findMilkshake?.milkshake.name);
    };

    if (data?.findMilkshake?.milkshake) {
        return (
            <BorderWrapper>
                <Wrapper className="wrapper">
                    <ContentWrapper>
                        <IconWrapper>
                            <MilkshakeIcon
                                iconColorA={
                                    data.findMilkshake.milkshake.iconColorA
                                }
                                iconColorB={
                                    data.findMilkshake.milkshake.iconColorB
                                }
                            />

                            <ButtonWrapper
                                className="export-btn"
                                margin={['0px', '0px', '0px', '30px']}
                                width="30%"
                                color="secondary"
                            >
                                <Button
                                    onClick={handleExportMilkshakeIcon}
                                    type="button"
                                    color="secondary"
                                >
                                    Export
                                </Button>
                            </ButtonWrapper>
                        </IconWrapper>

                        <Title>{data.findMilkshake.milkshake.name}</Title>

                        <Text>{data.findMilkshake.milkshake.description}</Text>

                        <Title>Ingredients</Title>

                        <IngredientsWrapper>
                            {data.findMilkshake.milkshake.ingredients.map(
                                (ingredient) => (
                                    <Ingredient key={ingredient}>
                                        {ingredient}
                                    </Ingredient>
                                )
                            )}
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

                        <InstructionsPreviewWrapper>
                            <InstructionsPreview
                                instructions={
                                    data.findMilkshake.milkshake.instructions
                                }
                            />
                        </InstructionsPreviewWrapper>

                        <Text>
                            By{' '}
                            <UsernameLabel>
                                username {data.findMilkshake.milkshake.userId}
                            </UsernameLabel>
                        </Text>

                        <Text>
                            Enjoyed this recipe? Add it to your favorites!
                        </Text>
                    </InstructionsWrapper>
                </Wrapper>
            </BorderWrapper>
        );
    }

    if (error) {
        return <span>Something went bad!</span>;
    }

    return <span>Loading...</span>;
};

export default Milkshake;
