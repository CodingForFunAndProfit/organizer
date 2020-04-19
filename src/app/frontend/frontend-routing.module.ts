import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './components/userauth/userauth.component';
import { ConfirmuserComponent } from './components/confirmuser/confirmuser.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'auth',
        component: UserAuthComponent,
    },
    {
        path: 'confirmuser/:confirmationUuid',
        component: ConfirmuserComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FrontendRoutingModule {}
