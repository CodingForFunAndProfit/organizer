import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplelayoutComponent } from './layouts/simplelayout/simplelayout.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ConfirmuserComponent } from './components/confirmuser/confirmuser.component';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ChangePasswordComponent } from './components/changepassword/changepassword.component';

@NgModule({
    declarations: [
        SimplelayoutComponent,
        SignupComponent,
        LoginComponent,
        ConfirmuserComponent,
        HomeComponent,
        ForgotPasswordComponent,
        ChangePasswordComponent,
    ],
    imports: [CommonModule, FrontendRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, SharedModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FrontendModule {}
