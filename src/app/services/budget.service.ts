import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Budget } from '../entities/budget/budget';

// getBudgets
// getAccountsFromBudget
// getTransactions (all, account)

const getAllBudgetQuery = gql`
    query {
        getAllBudget {
            id
            title
            accounts {
                id
                title
            }
        }
    }
`;
interface GetBudgetsResponse {
    getAllBudget: Budget[];
}
@Injectable({
    providedIn: 'root',
})
export class BudgetService {
    budgets: Observable<Budget[]>;
    constructor(private apollo: Apollo) {
        this.getBudgets();
    }

    public getBudgets() {
        this.budgets = this.apollo
            .watchQuery<GetBudgetsResponse>({ query: getAllBudgetQuery })
            .valueChanges.pipe(map((result) => result.data.getAllBudget));
    }
}
