import { Component, OnInit, ViewChild } from '@angular/core';
// import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/entities/user/user.entity';
import { DataSource } from '@angular/cdk/collections';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UsersService],
})
export class UsersComponent implements OnInit {
    users: User[];
    displayedColumns: string[] = ['id', 'email'];
    dataSource: MatTableDataSource<User>;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private usersService: UsersService) {
        this.usersService.users.subscribe((users) => {
            this.dataSource = new MatTableDataSource<User>(users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    ngOnInit() {}

    deleteUser(user: User) {
        console.log('deleteing user: ' + user.id);
    }
}

export class UserTableDataSource extends DataSource<any> {
    constructor(private usersService: UsersService) {
        super();
    }
    connect(): Observable<User[]> {
        return this.usersService.getUsers();
    }
    disconnect() {}
}
