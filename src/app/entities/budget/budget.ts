import { Account } from './account';

export class Budget {
    id: string;
    title: string;
    accounts: Account[];

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
