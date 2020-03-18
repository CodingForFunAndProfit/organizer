import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const loginMutation = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

interface LoginData {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private apollo: Apollo) {}

    public login(email: string, password: string) {
        this.apollo
            .mutate({
                mutation: loginMutation,
                variables: {
                    email: 'me@seelentripper.de',
                    password: 'password',
                },
            })
            .subscribe(
                data => {
                    console.log('got data', data);
                },
                error => {
                    console.log('there was an error', error);
                }
            );
    }
}
