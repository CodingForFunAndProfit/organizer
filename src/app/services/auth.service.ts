import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../entities/user/user.entity';
import { Router } from '@angular/router';

const loginMutation = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;

interface LoginData {
    email: string;
    password: string;
}
interface LoginResponse {
    login: string;
}

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
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private query: QueryRef<any>;

    constructor(
        private apollo: Apollo,
        private userService: UserService,
        private router: Router
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(
            JSON.parse(localStorage.getItem('currentUser'))
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    public async login(
        email: string,
        password: string
    ): Promise<string | null> {
        this.apollo
            .mutate<LoginResponse>({
                mutation: loginMutation,
                variables: {
                    email,
                    password,
                },
            })
            .subscribe(
                (response) => {
                    localStorage.setItem('token', response.data.login);
                    this.getUser();
                    return response.data.login;
                },
                (error) => {
                    console.log('there was an error', error);
                }
            );
        return null;
    }
    public logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }
    public async getUser() {
        this.query = this.apollo.watchQuery<GetMe>({
            query: meQuery,
        });

        this.query.valueChanges.subscribe(
            (response) => {
                localStorage.setItem(
                    'currentUser',
                    JSON.stringify(response.data.me)
                );
                this.currentUserSubject.next(response.data.me);
                this.router.navigate(['/dashboard']);
            },
            (error) => {
                console.log('there was an error', error);
            }
        );
    }
}
