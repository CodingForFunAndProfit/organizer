import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplelayoutComponent } from './layouts/simplelayout/simplelayout.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserAuthComponent } from './components/userauth/userauth.component';

@NgModule({
    declarations: [
        SimplelayoutComponent,
        LoginpageComponent,
        SignupComponent,
        LoginComponent,
        UserAuthComponent,
    ],
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
