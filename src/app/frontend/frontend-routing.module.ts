import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './components/userauth/userauth.component';
import { ConfirmuserComponent } from './components/confirmuser/confirmuser.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        component: UserAuthComponent,
    },
    {
        path: 'confirmuser',
        component: ConfirmuserComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FrontendRoutingModule {}
