import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {
    ApolloTestingModule,
    // ApolloTestingController,
} from 'apollo-angular/testing';

describe('UserService', () => {
    let service: UserService;
    // let controller: ApolloTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ApolloTestingModule],
            providers: [UserService],
        });

        service = TestBed.inject(UserService);
        // controller = TestBed.inject(ApolloTestingController);
    });

    afterEach(() => {
        // controller.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
