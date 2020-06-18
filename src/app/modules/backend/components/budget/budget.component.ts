import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { Budget } from 'src/app/entities/budget/budget';

@Component({
    selector: 'app-budget',
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
    private timezoneOffset: string;
    budgets: Budget[];
    constructor(private budgetService: BudgetService) {
        console.log(new Date());
        this.timezoneOffset = this.getTimezoneOffset();
        console.log(this.timezoneOffset);

        this.budgetService.budgets.subscribe((budgets) => (this.budgets = budgets));
    }

    ngOnInit(): void {}

    private getTimezoneOffset(): string {
        return String(new Date().getTimezoneOffset());
    }
}
