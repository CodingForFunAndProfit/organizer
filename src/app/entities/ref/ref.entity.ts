export class Ref {
    id: string;
    title: string;
    description?: string;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
