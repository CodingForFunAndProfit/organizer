import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { RequestLoaderService } from 'src/app/services/request-loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private requestLoaderService: RequestLoaderService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        // console.log('Authorization:', request.headers.get('Authorization'));
        this.requestLoaderService.show();
        return next
            .handle(request)
            .pipe(finalize(() => this.requestLoaderService.hide()));
    }
}
