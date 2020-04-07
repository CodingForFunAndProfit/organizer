import { Component, OnInit, ViewChild } from '@angular/core';
// import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/entities/user/user.entity';
import { DataSource } from '@angular/cdk/collections';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UsersService],
})
export class UsersComponent implements OnInit {
    users: Observable<User[]>;
    usersold: User[];
    displayedColumns: string[] = ['id', 'email', 'controls'];
    // dataSource: MatTableDataSource<User>;
    dataSource: UserDataSource;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<User[]>;

    constructor(private usersService: UsersService) {
        /*
        this.usersService.usersold.subscribe((users) => {
            this.dataSource = new MatTableDataSource<User>(users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
        */
    }

    ngOnInit() {
        this.users = this.usersService.users;
        this.usersService.getAll();

        this.dataSource = new UserDataSource(this.usersService);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        /*
        this.dataSource = new MatTableDataSource<Observable<User[]>>(
            this.users
        );
        this.dataSource.data = this.users;
        
        */
    }

    deleteUser(user: User) {
        console.log('deleteing user: ' + user.id);
        this.usersService.delete(user.id);
        this.table.renderRows();
    }
}

export class UserDataSource extends DataSource<any> {
    constructor(private usersService: UsersService) {
        super();
    }
    connect(): Observable<User[]> {
        return this.usersService.getUsers();
    }
    disconnect() {}
}
