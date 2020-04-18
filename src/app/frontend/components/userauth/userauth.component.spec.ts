import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthComponent } from './userauth.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

describe('UserauthComponent', () => {
    let component: UserAuthComponent;
    let fixture: ComponentFixture<UserAuthComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ApolloTestingModule,
                RouterTestingModule,
                HttpClientTestingModule,
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
