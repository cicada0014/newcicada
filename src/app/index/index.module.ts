

import { NgModule } from '@angular/core';
import { AppIndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';

const routes: Routes = [
    {
        path: '',
        component: AppIndexComponent
    },
    // {

    // }
];
const getWindow = () => window;
const providers = [
    { provide: WindowRef, useFactory: (getWindow) },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FontAwesomeModule,
        InViewportModule.forRoot(providers),
        ScrollSpyModule.forRoot()


    ],
    exports: [RouterModule],
    declarations: [AppIndexComponent],
    providers: [],
})
export class AppIndexModule { }
