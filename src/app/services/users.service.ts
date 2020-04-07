import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, BehaviorSubject } from 'rxjs';
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
const deleteUserMutation = gql`
    mutation deleteUser($id: String!) {
        deleteUser(id: $id)
    }
`;
interface GetUsersResponse {
    users: User[];
}

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private _users = new BehaviorSubject<User[]>([]);
    private dataStore: { users: User[] } = { users: [] };
    readonly users = this._users.asObservable();
    usersold: Observable<User[]>;
    constructor(private apollo: Apollo) {
        this.update();
    }
    getAll() {
        this.apollo
            .watchQuery<GetUsersResponse>({ query: getUsersQuery })
            .valueChanges.subscribe(
                (result) => {
                    console.log(result);
                    this.dataStore.users = result.data.users;
                    this._users.next(Object.assign({}, this.dataStore).users);
                },
                (error) => console.error(error)
            );
    }
    private update(): void {
        this.usersold = this.apollo
            .watchQuery<GetUsersResponse>({ query: getUsersQuery })
            .valueChanges.pipe(map((result) => result.data.users));
    }

    public getUsers(): Observable<User[]> {
        return this.usersold;
    }

    public delete(id: string) {
        this.apollo
            .mutate({
                mutation: deleteUserMutation,
                variables: {
                    id,
                },
            })
            .subscribe(
                ({ data }) => {
                    console.log('got data', data);
                    // this.getAll();
                    // this._users.next(Object.assign({}, this.dataStore).users);
                    // this.update();
                    this.dataStore.users.forEach((t, i) => {
                        if (t.id === id) {
                            this.dataStore.users.splice(i, 1);
                        }
                    });
                    this._users.next(Object.assign({}, this.dataStore).users);
                },
                (error) => {
                    console.log('there was an error sending the query', error);
                }
            );
    }
}
