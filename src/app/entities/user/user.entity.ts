export class User {
    id: number;
    email: string;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
