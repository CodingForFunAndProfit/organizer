import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RequestLoaderService {
    sendingRequest = new Subject<boolean>();
    constructor() {}
    show() {
        this.sendingRequest.next(true);
    }
    hide() {
        this.sendingRequest.next(false);
    }
}
