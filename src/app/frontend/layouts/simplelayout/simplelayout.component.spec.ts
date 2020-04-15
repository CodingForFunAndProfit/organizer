import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplelayoutComponent } from './simplelayout.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material/material.module';

describe('SimplelayoutComponent', () => {
    let component: SimplelayoutComponent;
    let fixture: ComponentFixture<SimplelayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ApolloTestingModule, RouterTestingModule, MaterialModule],
            declarations: [SimplelayoutComponent],
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
