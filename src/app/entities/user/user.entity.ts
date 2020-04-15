export class User {
    id: string;
    email: string;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
