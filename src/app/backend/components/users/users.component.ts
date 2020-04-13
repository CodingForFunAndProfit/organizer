import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/entities/user/user.entity';
import { DataSource } from '@angular/cdk/collections';
import { UsersService } from 'src/app/services/users.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { PaginatedDataSource } from 'src/app/shared/paginated.datasource';
import { Sort } from 'src/app/shared/pagination';

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
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, AfterViewInit {
    users: User[];
    data: Observable<any>;

    me: User;
    private userQref: QueryRef<any>;

    private query: QueryRef<any>;

    newName: string;

    displayedColumns: string[] = ['id', 'email', 'controls'];
    dataSource: UserDataSource;

    tableSource = new PaginatedDataSource<User>(
        (request) => this.usersService.page(request),
        { property: 'email', order: 'asc' }
    );

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<User[]>;

    constructor(private apollo: Apollo, private usersService: UsersService) {}

    sortData(event: any) {
        console.log(event);
        const sortby: Sort<User> = {
            property: event.active,
            order: event.direction,
        };
        this.tableSource.sortBy(sortby);
    }
    ngOnInit() {
        // this.tableSource.sortBy(this.sort);
        /*
        this.usersService.users.subscribe((users) => {
            this.users = users;
        });
        */
        // this.users = this.usersService.users;
        /*
        this.query = this.apollo.watchQuery<GetMe>({
            query: getUsersQuery,
        });

        this.query.valueChanges.subscribe((result) => {
            console.log(result);
            this.users = result.data && result.data.users;
        });

        this.userQref = this.apollo.watchQuery<GetUserRes>({
            query: getUserQuery,
            variables: {
                id: '4fdbb92e-9860-454c-a720-547e18e2a6a1',
            },
        });
        this.userQref.valueChanges.subscribe((result) => {
            console.log('user subscription fired');
            this.me = result.data && result.data.user;
        });
        */
        /*
        this.users = this.apollo
            .watchQuery<GetUsersResponse>({
                query: getUsersQuery,
            })
            .valueChanges.pipe(map((result) => result.data.users));

            .subscribe((result) => {
                console.log(result);
                this.users = result.data.users;
            });
            */
        // this.dataSource = new UserDataSource(this.usersService);
        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
        // this.usersService.getUsers(10, 0);
    }

    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
    }

    updateName() {
        this.apollo
            .mutate({
                mutation: updateUserMutation,
                variables: {
                    id: '4fdbb92e-9860-454c-a720-547e18e2a6a1',
                    input: { email: this.newName },
                },
            })
            .subscribe(
                ({ data }) => {
                    console.log('got data', data);
                    // this.update();
                    return true;
                },
                (error) => {
                    console.log('there was an error sending the query', error);
                }
            );
    }
    // needed for changed lists, watchQuery will not fire on add/delete?
    update() {
        this.query.refetch();
    }

    deleteUser(user: User) {
        this.apollo
            .mutate({
                mutation: deleteUserMutation,
                variables: {
                    id: user.id,
                },
            })
            .subscribe(
                ({ data }) => {
                    console.log('got data', data);
                    this.update();
                    return true;
                },
                (error) => {
                    console.log('there was an error sending the query', error);
                }
            );
        return false;
        // this.usersService.getAll();
        /*
        console.log('Trying to delete user: ' + user.id);
        const isDeleted = this.usersService.delete(user.id);
        if (isDeleted) {
            // this.users = this.usersService.users;
            this.usersService.getAll();
            this.users = this.usersService.users;
        }
        */
    }
}
export class UserDataSource extends DataSource<any> {
    sort: MatSort;
    paginator: MatPaginator;

    private dataSubject = new BehaviorSubject<User[]>([]);

    constructor(private usersService: UsersService) {
        super();
        this.usersService.users.subscribe((data) =>
            this.dataSubject.next(data)
        );
    }
    connect(): Observable<User[]> {
        return this.dataSubject.asObservable();
    }
    disconnect() {
        this.dataSubject.complete();
    }

    /*
    public setSort(sort: MatSort) {
        this.sort = sort;
        // this.sort.sortChange.subscribe(() => this.dataSubject.next(this.getSortedData(this.dataSubject.getValue())))
    }
    */
}
