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
import { Sort, Page } from 'src/app/shared/pagination';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    displayedColumns: string[] = ['id', 'email', 'controls'];

    tableSource = new PaginatedDataSource<User>(
        (request) => this.usersService.page(request),
        { property: 'email', order: 'asc' },
        20
    );

    /*
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<User[]>;
    */

    constructor(private usersService: UsersService) {}

    sortData(event: any) {
        const sortby: Sort<User> = {
            property: event.active,
            order: event.direction,
        };
        this.tableSource.sortBy(sortby);
    }
    ngOnInit() {}

    ngAfterViewInit() {}

    deleteUser(user: User) {
        this.usersService.deleteUser(user.id);
    }

    paginatorEvent(event: any) {
        console.log(event);
        // if(this.tableSource.page$)
    }
}
