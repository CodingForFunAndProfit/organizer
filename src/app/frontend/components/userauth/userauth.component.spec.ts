import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthComponent } from './userauth.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserauthComponent', () => {
    let component: UserAuthComponent;
    let fixture: ComponentFixture<UserAuthComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ApolloTestingModule,
                RouterTestingModule,
                HttpClientTestingModule,
                MaterialModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
            ],
            declarations: [UserAuthComponent, LoginComponent, SignupComponent],
            providers: [AuthService, FormBuilder, HttpClient],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
