export class Action {
    id: number;
    title: string;
    completed: boolean;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
