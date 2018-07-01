import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppIndexComponent } from './index/index.component'
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/index'
    },
    {
        path: 'index',
        // component: AppIndexComponent
        loadChildren: './index/index.module#AppIndexModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }