import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { User } from '../entities/user/user.entity';
import { map } from 'rxjs/operators';

const getUsersQuery = gql`
    query getUsers {
        users {
            id
            email
        }
    }
`;

interface GetUsersResponse {
    users: User[];
}

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    users: Observable<User[]>;
    constructor(private apollo: Apollo) {
        this.users = this.apollo
            .watchQuery<GetUsersResponse>({ query: getUsersQuery })
            .valueChanges.pipe(map((result) => result.data.users));
    }
    public getUsers(): Observable<User[]> {
        return this.users;
    }

    public delete(id: number) {}
}
