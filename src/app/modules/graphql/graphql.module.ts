import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [],
    exports: [HttpClientModule, ApolloModule, HttpLinkModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                const link = httpLink.create({
                    uri: environment.apiurl,
                    withCredentials: true,
                });
                const auth = setContext((_, { headers }) => {
                    const token = localStorage.getItem('token');
                    return {
                        headers: {
                            ...headers,
                            authorization: token ? `${token}` : '',
                        },
                    };
                });

                return {
                    cache: new InMemoryCache(),
                    link: auth.concat(link),
                    connectToDevTools: true,
                    credentials: 'include',
                };
            },
            deps: [HttpLink],
        },
    ],
})
export class GraphqlModule {}
