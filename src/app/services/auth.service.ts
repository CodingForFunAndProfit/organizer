import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';

import { User } from '../entities/user/user.entity';
import { LogService } from './logger/log.service';
import { CookieService } from 'ngx-cookie-service';

const loginMutation = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            accessToken
            msg
            login
            user {
                id
                email
            }
        }
    }
`;

interface LoginData {
    email: string;
    password: string;
}

interface LoginResult {
    accessToken: string;
    msg: string;
    login: string;
    user: User;
}
interface LoginResponse {
    login: LoginResult;
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

interface ConfirmUserResponse {
    confirmUser: boolean;
}
const confirmUserMutation = gql`
    mutation confirmUser($token: String!) {
        confirmUser(token: $token)
    }
`;

interface SignupUserResponse {
    UserRegister: boolean;
}
const signupUserMutation = gql`
    mutation UserRegister($input: RegisterInput!) {
        UserRegister(input: $input)
    }
`;
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private query: QueryRef<any>;

    private _confirmed: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public confirmed: Observable<boolean> = this._confirmed.asObservable();

    private _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public loading: Observable<boolean> = this._loading.asObservable();

    private _isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public isAuthenticated: Observable<boolean> = this._isAuthenticated.asObservable();

    private _loginfailure: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public loginfailure: Observable<boolean> = this._loginfailure.asObservable();

    private _isRegistered: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public isRegistered: Observable<boolean> = this._isRegistered.asObservable();

    constructor(private apollo: Apollo, private router: Router, private log: LogService, private cookieService: CookieService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public async login(email: string, password: string): Promise<void> {
        this.log.info('Login request');
        if (!(email && email.length > 0)) {
            this.log.warn('Email null or empty.');
            return;
        }
        if (!(password && password.length > 0)) {
            this.log.warn('Password null or empty.');
            return;
        }
        this._loading.next(true);
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
                    this._loading.next(false);
                    const login = response.data.login;

                    if (login.login === 'success') {
                        if (login.user) {
                            localStorage.setItem('token', login.accessToken);
                            localStorage.setItem('currentUser', JSON.stringify(login.user));
                            this.currentUserSubject.next(login.user);
                            this.log.info('Authenticated');
                            this._isAuthenticated.next(true);
                        } else {
                        }
                    } else {
                        this.log.error('Authentication failed.');
                        console.error(response);
                    }
                },
                (error) => {
                    this.log.error('AuthService -> login', error);
                    this._loading.next(false);
                }
            );
        return;
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
                        this._isAuthenticated.next(false);
                    }
                    // else -> possible?
                    // delete local authentication data
                    this.cookieService.delete('refreshtoken', '/', 'localhost');
                    localStorage.removeItem('currentUser');
                    localStorage.removeItem('token');
                    this.currentUserSubject.next(null);
                    this.router.navigate(['/']);
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
                localStorage.setItem('currentUser', JSON.stringify(response.data.me));
                this.currentUserSubject.next(response.data.me);
            },
            (error) => {
                console.log('there was an error', error);
            }
        );
    }

    public confirmUser(token: string) {
        this.apollo
            .mutate<ConfirmUserResponse>({
                mutation: confirmUserMutation,
                variables: {
                    token,
                },
            })
            .subscribe(
                (response) => {
                    const confirmed = response.data.confirmUser;
                    if (confirmed) {
                        this.log.info('User confirmed');
                    } else {
                        this.log.info('Could not confirm user');
                    }
                    this._confirmed.next(confirmed);
                },
                (error) => {
                    this.log.error('AuthService -> confirmUser', error);
                }
            );
    }

    public signupUser(email: string, password: string): Promise<boolean> {
        this.log.info('Signup request');
        if (!(email && email.length > 0)) {
            this.log.warn('Email null or empty.');
        }
        if (!(password && password.length > 0)) {
            this.log.warn('Password null or empty.');
        }
        this._loading.next(true);
        this.apollo
            .mutate<SignupUserResponse>({
                mutation: signupUserMutation,
                variables: {
                    input: {
                        email,
                        password,
                    },
                },
            })
            .subscribe(
                (response) => {
                    this._loading.next(false);
                    const register = response.data.UserRegister;
                    this.log.warn(register);
                    if (register) {
                        this.log.info('User got mail to confirm his account');
                        this._isRegistered.next(true);
                    } else {
                        this.log.error('Error during registration.');
                    }
                    return register;
                },
                (error) => {
                    this.log.error('AuthService -> signupUser', error);
                    this._loading.next(false);
                }
            );
        return null;
    }
}
