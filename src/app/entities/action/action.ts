export class Action {
    id: string;
    title: string;
    completed: boolean;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
