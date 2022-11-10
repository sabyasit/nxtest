import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes: Routes = [
    {
        path: '',
        component: NxWelcomeComponent
    },
    {
        path: 'ui',
        loadChildren: () => import('@di/ui').then((esModule) => esModule.UiModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}