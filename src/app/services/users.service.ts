import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../entities/user/user.entity';
// import { map } from 'rxjs/operators';

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
    private _users = new BehaviorSubject<User[]>([]);

    constructor(private apollo: Apollo) {}

    get users() {
        return this._users.asObservable();
    }

    getUsers() {
        this.apollo
            .watchQuery<GetUsersResponse>({ query: getUsersQuery })
            .valueChanges.subscribe(
                (result) => {
                    // console.log(result);
                    this._users.next(result.data.users);
                },
                (error) => console.error(error)
            );
    }
    /*
    delete(id: string): boolean {
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
                    return true;
                },
                (error) => {
                    console.log('there was an error sending the query', error);
                }
            );
        return false;
    }
    */
}
