import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppIndexComponent } from './index/index.component'
import { AppIndexModule } from './index/index.module';
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/index'
    },
    {
        path: 'index',
        component: AppIndexComponent
        
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        AppIndexModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }