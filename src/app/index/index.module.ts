

import { NgModule } from '@angular/core';
import { AppIndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
    {
        path: '',
        component: AppIndexComponent
    },
    // {

    // }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FontAwesomeModule,


    ],
    exports: [RouterModule],
    declarations: [AppIndexComponent],
    providers: [],
})
export class AppIndexModule { }
