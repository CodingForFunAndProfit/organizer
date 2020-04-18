import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let service: AuthService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                ApolloTestingModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                MaterialModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
            ],
            providers: [AuthService, FormBuilder],
        }).compileComponents();
        service = TestBed.inject(AuthService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
