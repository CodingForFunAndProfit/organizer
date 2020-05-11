export class Account {
    id: string;
    title: string;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
