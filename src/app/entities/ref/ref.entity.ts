export class Ref {
    id: string;
    title: string;
    description?: string;
    url: string;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
