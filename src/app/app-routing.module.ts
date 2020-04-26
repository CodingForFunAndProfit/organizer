import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/common/guards/auth.guard';
import { SimplelayoutComponent } from './modules/frontend/layouts/simplelayout/simplelayout.component';
import { MainlayoutComponent } from './modules/backend/layouts/mainlayout/mainlayout.component';

const routes: Routes = [
    {
        path: '',
        component: SimplelayoutComponent,
        loadChildren: () =>
            import('./modules/frontend/frontend.module').then(
                (m) => m.FrontendModule
            ),
    },
    {
        path: '',
        component: MainlayoutComponent,
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./modules/backend/backend.module').then(
                (m) => m.BackendModule
            ),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
