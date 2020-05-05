import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { BackendRoutingModule } from './backend-routing.module';

import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavigationComponent } from '../../shared/common/sidenavigation/sidenavigation.component';
import { ProgressComponent } from '../shared/components/progress/progress.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ActionsComponent } from './components/actions/actions.component';
import { UsersComponent } from './components/users/users.component';
import { GooeynavComponent } from './components/gooeynav/gooeynav.component';
import { QuickRefComponent } from './components/quickref/quickref.component';

@NgModule({
    declarations: [
        MainlayoutComponent,
        SidenavigationComponent,
        DashboardComponent,
        ProgressComponent,
        SettingsComponent,
        ActionsComponent,
        UsersComponent,
        GooeynavComponent,
        QuickRefComponent,
    ],
    imports: [SharedModule, BackendRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BackendModule {}
