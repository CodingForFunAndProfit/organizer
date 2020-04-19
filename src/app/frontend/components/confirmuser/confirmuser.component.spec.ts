import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmuserComponent } from './confirmuser.component';
import { AuthService } from 'src/app/services/auth.service';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConfirmuserComponent', () => {
    let component: ConfirmuserComponent;
    let fixture: ComponentFixture<ConfirmuserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmuserComponent],
            imports: [
                ApolloTestingModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                MaterialModule,
                HttpClientTestingModule,
            ],
            providers: [AuthService],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmuserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
