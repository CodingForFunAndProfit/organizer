import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SidenavigationComponent } from './shared/common/sidenavigation/sidenavigation.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';

import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ActionsComponent } from './pages/actions/actions.component';
import { LoginComponent } from './pages/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RequestLoaderService } from './services/request-loader.service';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
    declarations: [
        AppComponent,
        SidenavigationComponent,
        HomeComponent,
        SettingsComponent,
        ActionsComponent,
        LoginComponent,
        LoadingComponent,
        ProgressComponent,
        UsersComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        FlexLayoutModule,
        ApolloModule,
        HttpLinkModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: 'http://localhost:8080/api',
                    }),
                };
            },
            deps: [HttpLink],
        },
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
export class AppModule {
    /*
    constructor(apollo: Apollo, httpLink: HttpLink) {
        apollo.create({
            link: httpLink.create({ uri: 'http://localhost:8080/api' }),
            cache: new InMemoryCache(),
        });
    }
    */
}
