import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';

import { ActionsService } from './actions.service';

describe('ActionsService', () => {
    let service: ActionsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ApolloTestingModule],
            providers: [ActionsService],
        });
        service = TestBed.inject(ActionsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
