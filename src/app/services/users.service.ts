import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../entities/user/user.entity';
import { PageRequest, Page } from '../shared/pagination';
// import { map } from 'rxjs/operators';

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

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private _users = new BehaviorSubject<User[]>([]);

    private defaultPage = 0;
    private defaultPageSize = 20;
    defaultpage = {
        content: [],
        number: this.defaultPage,
        size: this.defaultPageSize,
        totalElements: 100,
    };
    private _userPage = new BehaviorSubject<Page<User>>(this.defaultpage);
    userPage: Observable<Page<User>>;
    constructor(private apollo: Apollo) {}

    get usersPage() {
        return this._userPage.asObservable();
    }
    get users() {
        return this._users.asObservable();
    }

    getUsers(pageSize: number = 10, pageNo: number = 0) {
        this.apollo
            .watchQuery<GetUsersResponse>({
                query: getUsersQuery,
                variables: {
                    input: {
                        pageSize,
                        pageNo,
                    },
                },
            })
            .valueChanges.subscribe(
                (result) => {
                    // console.log(result);
                    this._users.next(result.data.pagedusers);
                },
                (error) => console.error(error)
            );
    }
    page(pageRequest: PageRequest<User>): Observable<Page<User>> {
        this.apollo
            .watchQuery<PagedUsersResponse>({
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
            })
            .valueChanges.subscribe(
                (result) => {
                    // console.log(result);
                    // this._users.next(result.data.pagedusers);
                    const response = result.data.pagedusers;
                    const page = {
                        content: response.users,
                        number: pageRequest.page,
                        size: pageRequest.size,
                        totalElements: response.total,
                    };
                    this._userPage.next(page);
                    // page.content = result.data.pagedusers;
                    // return page;
                },
                (error) => console.error(error)
            );
        return this._userPage.asObservable();
    }
}
