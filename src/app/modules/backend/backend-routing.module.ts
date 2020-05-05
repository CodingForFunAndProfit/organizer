import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActionsComponent } from './components/actions/actions.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersComponent } from './components/users/users.component';
import { QuickRefComponent } from './components/quickref/quickref.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'actions', component: ActionsComponent },
    { path: 'quickref', component: QuickRefComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'users', component: UsersComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BackendRoutingModule {}
