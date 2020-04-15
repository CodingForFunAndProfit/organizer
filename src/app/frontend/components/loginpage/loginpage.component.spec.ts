import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageComponent } from './loginpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginpageComponent', () => {
    let component: LoginpageComponent;
    let fixture: ComponentFixture<LoginpageComponent>;
    let service: UserService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginpageComponent],
            imports: [
                BrowserAnimationsModule,
                MaterialModule,
                ApolloTestingModule,
                ReactiveFormsModule,
                RouterTestingModule,
            ],
            providers: [UserService, FormBuilder],
        }).compileComponents();
        service = TestBed.inject(UserService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginpageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
