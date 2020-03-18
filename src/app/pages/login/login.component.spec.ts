import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
    ApolloTestingModule,
    ApolloTestingController,
} from 'apollo-angular/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { LoginComponent } from './login.component';
import { UserService } from 'src/app/services/user.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let service: UserService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                BrowserAnimationsModule,
                MaterialModule,
                ApolloTestingModule,
                ReactiveFormsModule,
            ],
            providers: [UserService, FormBuilder],
        }).compileComponents();
        service = TestBed.inject(UserService);
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
