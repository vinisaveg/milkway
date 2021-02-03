import { FunctionComponent } from 'react';

import { request } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import useSWR from 'swr';

interface Data {
    insert_users: {
        returning: [
            {
                id: string;
                name: string;
                rocket: string;
            }
        ];
    };
}

const fetcher = (mutation: RequestDocument) =>
    request('https://api.spacex.land/graphql/', mutation);

const Register: FunctionComponent = () => {
    const { data, error } = useSWR<Data>(
        `

        mutation {
            insert_users(objects: {
              name: "Vinicius Sanchez de La Silvas",
              rocket: "Super Ricket",
            }) {
              returning {
                id
                name
                rocket
              }
            }
          }


        `,
        fetcher
    );

    if (error) {
        <span>I guess your rocket crashed :/</span>;
    }

    if (data) {
        return (
            <div>
                <span>Register</span>

                {data.insert_users.returning.map((user) => (
                    <div key={user.id}>
                        <span>{user.name}</span>
                        <span>{user.rocket}</span>
                        <span>{user.id}</span>
                    </div>
                ))}
            </div>
        );
    }

    return <span>Loading...Nothing to see yet...</span>;
};

export default Register;
