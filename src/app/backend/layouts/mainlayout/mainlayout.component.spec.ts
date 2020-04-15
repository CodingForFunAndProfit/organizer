import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlayoutComponent } from './mainlayout.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProgressComponent } from 'src/app/components/progress/progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavigationComponent } from 'src/app/shared/common/sidenavigation/sidenavigation.component';

describe('MainlayoutComponent', () => {
    let component: MainlayoutComponent;
    let fixture: ComponentFixture<MainlayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ApolloTestingModule,
                RouterTestingModule,
                MaterialModule,
                BrowserAnimationsModule,
            ],
            declarations: [
                MainlayoutComponent,
                ProgressComponent,
                SidenavigationComponent,
            ],
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
