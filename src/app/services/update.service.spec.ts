import { TestBed } from '@angular/core/testing';

import { SwUpdate, ServiceWorkerModule } from '@angular/service-worker';
import { UpdateService } from './update.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../modules/material/material.module';

describe('UpdateService', () => {
    let service: UpdateService;
    let update: SwUpdate;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }), HttpClientTestingModule, MaterialModule],
            providers: [SwUpdate],
        });
        update = TestBed.inject(SwUpdate);
        service = TestBed.inject(UpdateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
