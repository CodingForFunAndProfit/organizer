import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './shared/material/material.module';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RequestLoaderService } from './services/request-loader.service';
import { RequestInterceptor } from './interceptors/request.interceptor';

import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
    declarations: [AppComponent, LoadingComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FlexLayoutModule,
        GraphqlModule,
    ],
    providers: [
        RequestLoaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
