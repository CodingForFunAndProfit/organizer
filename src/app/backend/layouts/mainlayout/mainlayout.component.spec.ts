import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlayoutComponent } from './mainlayout.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainlayoutComponent', () => {
    let component: MainlayoutComponent;
    let fixture: ComponentFixture<MainlayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ApolloTestingModule, RouterTestingModule],
            declarations: [MainlayoutComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainlayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
