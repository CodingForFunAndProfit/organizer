import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../entities/user/user.entity';
import { PageRequest, Page } from '../shared/pagination';

const getUsersQuery = gql`
    query getUsers($input: PagingInput!, $sortby: SortByInput!) {
        pagedusers(input: $input, sortby: $sortby) {
            users {
                id
                email
            }
            total
        }
    }
`;
interface GetUsersResponse {
    pagedusers: User[];
}

interface PagedUsersResponse {
    pagedusers: {
        users: User[];
        total: number;
    };
}
const deleteUserMutation = gql`
    mutation deleteUser($id: String!) {
        deleteUser(id: $id)
    }
`;

const getUserQuery = gql`
    query getUser($id: String!) {
        user(id: $id) {
            id
            email
        }
    }
`;
const updateUserMutation = gql`
    mutation updateUser($id: String!, $input: UserInput!) {
        updateUser(id: $id, input: $input)
    }
`;
interface GetUserRes {
    user: User;
}
interface GetMe {
    me: User;
}
@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private defaultPage = 0;
    private defaultPageSize = 10;
    defaultpage = {
        content: [],
        number: this.defaultPage,
        size: this.defaultPageSize,
        totalElements: 100,
    };

    private pagedUserQueryRef: QueryRef<PagedUsersResponse>;
    private _pagedUsers = new BehaviorSubject<Page<User>>(this.defaultpage);

    constructor(private apollo: Apollo) {}

    page(pageRequest: PageRequest<User>): Observable<Page<User>> {
        this.createpagedUserQueryRef(pageRequest);
        return this._pagedUsers.asObservable();
    }

    createpagedUserQueryRef(pageRequest: PageRequest<User>) {
        this.pagedUserQueryRef = this.apollo.watchQuery<PagedUsersResponse>({
            query: getUsersQuery,
            variables: {
                input: {
                    pageSize: pageRequest.size,
                    pageNo: pageRequest.page,
                },
                sortby: {
                    by: pageRequest.sort.property,
                    sort: pageRequest.sort.order,
                },
            },
        });
        this.pagedUserQueryRef.valueChanges.subscribe((result) => {
            console.log('pagedUserQueryRef value changed');
            const response = result.data.pagedusers;
            const page = {
                content: response.users,
                number: pageRequest.page,
                size: pageRequest.size,
                totalElements: response.total,
            };
            this._pagedUsers.next(page);
        });
    }

    refetchPagedUserQuery() {
        this.pagedUserQueryRef.refetch();
    }

    deleteUser(id: string) {
        this.apollo
            .mutate({
                mutation: deleteUserMutation,
                variables: {
                    id,
                },
            })
            .subscribe(
                ({ data }) => {
                    this.refetchPagedUserQuery();
                    return true;
                },
                (error) => {
                    console.log('there was an error sending the query', error);
                }
            );
        return false;
    }
}
