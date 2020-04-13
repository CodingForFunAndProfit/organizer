import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplelayoutComponent } from './layouts/simplelayout/simplelayout.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [SimplelayoutComponent, LoginpageComponent],
    imports: [
        CommonModule,
        FrontendRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FrontendModule {}
