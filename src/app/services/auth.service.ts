import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';

import { User } from '../entities/user/user.entity';
import { LogService } from './logger/log.service';

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
interface LogoutResponse {
    logout: boolean;
}
const logoutMutation = gql`
    mutation {
        logout
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
        private router: Router,
        private log: LogService
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
        this.log.info('Login request');
        if (!(email && email.length > 0)) {
            this.log.warn('Email null or empty.');
        }
        if (!(password && password.length > 0)) {
            this.log.warn('Password null or empty.');
        }
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
                    const login = response.data.login;
                    if (login) {
                        localStorage.setItem('token', response.data.login);
                        this.getUser();
                        this.log.info('Authenticated');
                        return response.data.login;
                    } else {
                        this.log.error('Authentication failed.');
                    }
                },
                (error) => {
                    this.log.error('AuthService -> login', error);
                }
            );
        return null;
    }
    public logout() {
        this.apollo
            .mutate<LogoutResponse>({
                mutation: logoutMutation,
            })
            .subscribe(
                (response) => {
                    const logout = response.data.logout;
                    if (logout) {
                        this.log.info('User logged out');
                    }
                    // else -> possible?

                    // delete local authentication data
                    localStorage.removeItem('currentUser');
                    localStorage.removeItem('token');
                    this.currentUserSubject.next(null);
                    this.router.navigate(['/auth']);
                },
                (error) => {
                    this.log.error('AuthService -> logout', error);
                }
            );
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
