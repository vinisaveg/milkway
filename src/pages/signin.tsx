import { FunctionComponent } from 'react';

import { request } from 'graphql-request';
import useSWR from 'swr';

// import { environment } from '../config/environment';

interface Data {
    characters: {
        results: [{ id: string; name: string }];
    };
}

const fetcher = (query) =>
    request('https://rickandmortyapi.com/graphql', query);

const SignIn: FunctionComponent = () => {
    const { data, error } = useSWR<Data>(
        `
    {
        characters {
          results {
            id
            name
          }
        }
      }
    `,
        fetcher
    );

    if (error) {
        return <span>Something went bad</span>;
    }

    if (data) {
        console.log(data.characters);

        return (
            <div>
                <span>Sign In </span>

                {data.characters.results.map((character) => (
                    <span key={character.id}>{character.name}</span>
                ))}
            </div>
        );
    }

    return <span>Loading...Nothing to see yet...</span>;
};

export default SignIn;
