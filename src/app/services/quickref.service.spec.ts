import { TestBed } from '@angular/core/testing';

import { QuickRefService } from './quickref.service';

describe('QuickrefService', () => {
    let service: QuickRefService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(QuickRefService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
