import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DominoloaderComponent } from './dominoloader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DominoloaderComponent', () => {
    let component: DominoloaderComponent;
    let fixture: ComponentFixture<DominoloaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [DominoloaderComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DominoloaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
