import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgotpassword.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { AuthService } from 'src/app/services/auth.service';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ForgotpasswordComponent', () => {
    let component: ForgotPasswordComponent;
    let fixture: ComponentFixture<ForgotPasswordComponent>;

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
            declarations: [ForgotPasswordComponent],
            providers: [AuthService, FormBuilder],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ForgotPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
