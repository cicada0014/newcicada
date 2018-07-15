import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { MenuScene } from './scene/menu/menu.scene';
import { StageScene } from './scene/stage/stage.scene';

const routes: Routes = [
    {
        path: '',
        component: GameComponent
    },
    // {

    // }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),


    ],
    exports: [
        RouterModule
    ],
    declarations: [
        GameComponent,

    ],
    providers: [
        // MenuScene,
        // StageScene
    ],
})
export class GameModule { }
