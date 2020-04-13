import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

@NgModule({
    declarations: [],
    exports: [HttpClientModule, ApolloModule, HttpLinkModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                const link = httpLink.create({
                    uri: 'http://localhost:8080/api',
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
                };
            },
            deps: [HttpLink],
        },
    ],
})
export class GraphqlModule {}
