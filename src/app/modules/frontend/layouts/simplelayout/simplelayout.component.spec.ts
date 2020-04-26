import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplelayoutComponent } from './simplelayout.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';

describe('SimplelayoutComponent', () => {
    let component: SimplelayoutComponent;
    let fixture: ComponentFixture<SimplelayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ApolloTestingModule,
                RouterTestingModule,
                MaterialModule,
                BrowserAnimationsModule,
            ],
            declarations: [
                SimplelayoutComponent,
                LoginComponent,
                SignupComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimplelayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
