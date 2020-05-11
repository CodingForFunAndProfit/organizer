import { TestBed } from '@angular/core/testing';

import { SubscriptionService } from './subscription.service';
import { SwPush, ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SubscriptionService', () => {
    let service: SubscriptionService;
    let push: SwPush;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
                HttpClientTestingModule,
                ApolloTestingModule,
                RouterTestingModule,
            ],
            providers: [SwPush],
        });
        push = TestBed.inject(SwPush);
        service = TestBed.inject(SubscriptionService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
