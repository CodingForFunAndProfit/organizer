import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from '../entities/action/action';

const getActionsQuery = gql`
    query getActions {
        actions {
            id
            title
            completed
        }
    }
`;

const deleteActionMutation = gql`
    mutation deleteAction {
        actions {
            id
            title
            completed
        }
    }
`;
const createActionMutation = gql`
    mutation createAction($options: ActionInput) {
        createAction(options: $options) {
            id
            title
            completed
        }
    }
`;
interface GetActionsResponse {
    actions: Action[];
}
@Injectable({
    providedIn: 'root',
})
export class ActionsService {
    actions: Action[] = [];
    actionsObs: Observable<Action[]>;
    constructor(private apollo: Apollo) {
        this.getActions();
    }
    getActions() {
        this.actionsObs = this.apollo
            .watchQuery<GetActionsResponse>({ query: getActionsQuery })
            .valueChanges.pipe(map(result => result.data.actions));
    }
    getAllTasks(): Observable<Action[]> {
        return this.actionsObs;
    }

    public delete(id: number) {}

    public create(action: Action) {
        this.apollo
            .mutate({
                mutation: createActionMutation,
                variables: {
                    options: action,
                },
            })
            .subscribe(
                data => {
                    console.log('got data', data);
                },
                error => {
                    console.log('there was an error', error);
                }
            );
    }
}

/*
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Task } from '../entities/task/task';
import { TASKS } from 'src/app/entities/task/task.data';

const getTasksQuery = gql`
    query getTasks {
        tasks {
            title
            completed
        }
    }
`;
interface GetTasksResponse {
    tasks: Task[];
}
@Injectable({
    providedIn: 'root',
})
export class TasksService {
    tasks: Task[] = [];

    tasksTest: Observable<Task[]>;
    constructor(private apollo: Apollo, httpLink: HttpLink) {
        apollo.create({
            link: httpLink.create({
                uri: 'http://localhost:8080/api',
                withCredentials: true,
            }),
            cache: new InMemoryCache(),
        });
        this.getTasks();
    }
    getTasks() {
        this.tasksTest = this.apollo
            .watchQuery<GetTasksResponse>({ query: getTasksQuery })
            .valueChanges.pipe(map(result => result.data.tasks));
    }
    getAllTasks(): Observable<Task[]> {
        return this.tasksTest;
    }

    add(task: Task) {
        this.tasks.push(task);
    }
    delete(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    update(id: number, values: object = {}): Task {
        const task = this.get(id);
        if (!task) {
            return null;
        }
        Object.assign(task, values);
        return task;
    }
    getAll(): Task[] {
        return this.tasks;
    }
    get(id: number): Task {
        return this.tasks.filter(todo => todo.id === id).pop();
    }
    complete(id: number, completed: boolean) {
        const task = this.update(id, { complete: completed });
    }
}


*/
