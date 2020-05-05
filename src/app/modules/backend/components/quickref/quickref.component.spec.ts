import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickRefComponent } from './quickref.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('QuickrefComponent', () => {
    let component: QuickRefComponent;
    let fixture: ComponentFixture<QuickRefComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialModule, ReactiveFormsModule, HttpClientTestingModule, BrowserAnimationsModule],
            declarations: [QuickRefComponent],
            providers: [FormBuilder],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuickRefComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
