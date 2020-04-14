import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ActionsComponent } from './actions.component';

import { ActionsService } from 'src/app/services/actions.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';

describe('ActionsComponent', () => {
    let component: ActionsComponent;
    let fixture: ComponentFixture<ActionsComponent>;
    let service: ActionsService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ApolloTestingModule,
                BrowserAnimationsModule,
                MaterialModule,
                FormsModule,
            ],
            declarations: [ActionsComponent],
            providers: [ActionsService],
        }).compileComponents();
        service = TestBed.inject(ActionsService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
