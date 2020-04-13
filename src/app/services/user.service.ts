import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { User } from '../entities/user/user.entity';

const meQuery = gql`
    query {
        me {
            id
            email
        }
    }
`;

interface GetMe {
    me: User;
}
@Injectable({
    providedIn: 'root',
})
export class UserService {
    userId: string;
    token: string;
    private query: QueryRef<any>;
    constructor(private apollo: Apollo) {}

    setToken(token: string) {
        this.token = token;
        localStorage.setItem('token', token);
        this.getUser();
    }

    getUser() {
        this.query = this.apollo.watchQuery<GetMe>({
            query: meQuery,
        });

        this.query.valueChanges.subscribe(
            (result) => {
                console.log(result);
                // this.users = result.data && result.data.users;
                this.userId = result.data && result.data.me.id;
            },
            (error) => {
                console.log('there was an error', error);
            }
        );
    }
}
