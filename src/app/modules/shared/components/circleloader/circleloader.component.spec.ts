import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleloaderComponent } from './circleloader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CircleloaderComponent', () => {
    let component: CircleloaderComponent;
    let fixture: ComponentFixture<CircleloaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [CircleloaderComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CircleloaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
