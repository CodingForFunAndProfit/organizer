import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/common/guards/auth.guard';
import { SimplelayoutComponent } from './frontend/layouts/simplelayout/simplelayout.component';
import { MainlayoutComponent } from './backend/layouts/mainlayout/mainlayout.component';

const routes: Routes = [
    {
        path: '',
        component: SimplelayoutComponent,
        loadChildren: () =>
            import('./frontend/frontend.module').then((m) => m.FrontendModule),
    },
    {
        path: '',
        component: MainlayoutComponent,
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./backend/backend.module').then((m) => m.BackendModule),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
