import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GraphqlModule } from './modules/graphql/graphql.module';

import { RequestLoaderService } from './services/request-loader.service';
import { RequestInterceptor } from './interceptors/request.interceptor';

import { LoadingComponent } from './modules/shared/components/loading/loading.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './modules/shared/shared.module';
import { UpdateService } from './services/update.service';
import { SubscriptionService } from './services/subscription.service';

@NgModule({
    declarations: [AppComponent, LoadingComponent],
    imports: [
        SharedModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        GraphqlModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],

    providers: [
        RequestLoaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        },
        CookieService,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
    constructor(private updateService: UpdateService, private subscriptionService: SubscriptionService) {}
}
