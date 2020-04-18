import { TestBed } from '@angular/core/testing';

import { LogService } from './log.service';
import { HttpClientModule } from '@angular/common/http';
import { LogPublisherService } from './logpublisher.service';

describe('LogService', () => {
    let service: LogService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [LogPublisherService],
        });
        service = TestBed.inject(LogService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
