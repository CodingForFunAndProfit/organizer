import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { ProgressComponent } from './modules/shared/components/progress/progress.component';
import { SidenavigationComponent } from './shared/common/sidenavigation/sidenavigation.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SwUpdate, ServiceWorkerModule } from '@angular/service-worker';

describe('AppComponent', () => {
    let service: SwUpdate;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ApolloTestingModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                MaterialModule,
                HttpClientTestingModule,
                ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
            ],
            declarations: [AppComponent, ProgressComponent, SidenavigationComponent],
            providers: [SwUpdate],
        }).compileComponents();
        service = TestBed.inject(SwUpdate);
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Organizer'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Organizer');
    });
    /*
    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(
            compiled.querySelector('mat-toolbar span.title').textContent
        ).toContain('Organizer');
    });
    */
});
