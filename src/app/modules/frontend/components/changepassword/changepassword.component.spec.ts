import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './changepassword.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';

describe('ChangepasswordComponent', () => {
    let component: ChangePasswordComponent;
    let fixture: ComponentFixture<ChangePasswordComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ApolloTestingModule,
                RouterTestingModule,
                HttpClientTestingModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                MaterialModule,
            ],
            declarations: [ChangePasswordComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangePasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
