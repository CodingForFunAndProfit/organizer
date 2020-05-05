import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FrontendRoutingModule } from './frontend-routing.module';

import { SimplelayoutComponent } from './layouts/simplelayout/simplelayout.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ConfirmuserComponent } from './components/confirmuser/confirmuser.component';
import { HomeComponent } from './components/home/home.component';
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
    imports: [SharedModule, FrontendRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FrontendModule {}
