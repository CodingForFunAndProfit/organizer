import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Ref } from '../entities/ref/ref.entity';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class QuickRefService {
    private _refs = new BehaviorSubject<Ref[]>([]);

    constructor(private apollo: Apollo) {}

    public create() {
        const createRefMutation = gql`
            mutation createRef($input: RefInput) {
                createRef(input: $input) {
                    id
                    title
                    description
                    url
                }
            }
        `;
    }

    public read(id: string) {
        const readRefQuery = gql`
            query readRef($id: String!) {
                readRef(id: $id) {
                    id
                    title
                    description
                    url
                }
            }
        `;
    }

    public update(id: string) {
        const updateRefMutation = gql`
            mutation updateRef($id: String!, $input: RefInput!) {
                updateRef(id: $id, input: $input)
            }
        `;
    }

    public delete(id: string) {
        const deleteRefMutation = gql`
            mutation deleteRef($id: String!) {
                deleteRef(id: $id)
            }
        `;
        return this.apollo.mutate({
            mutation: deleteRefMutation,
            variables: {
                id,
            },
        });
    }

    public getAll(): Observable<Ref[]> {
        const getRefsQuery = gql`
            query getRefs() {
                getRefs() {
                    id
                    title
                    description
                    url
                }
            }
        `;
        interface GetRefsResponse {
            getrefs: Ref[];
        }
        this.apollo
            .watchQuery<GetRefsResponse>({ query: getRefsQuery })
            .valueChanges.subscribe((result) => {
                this._refs.next(result.data.getrefs);
            });
        return this._refs.asObservable();
    }
}
