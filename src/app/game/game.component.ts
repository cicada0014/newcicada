import { Component } from '@angular/core';
// import { MenuScene } from './scene/menu/menu.scene';
import * as Phaser from 'phaser';
// import { StageScene } from './scene/stage/stage.scene';


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent {

    gameConfig




    phaserGame: Phaser.Game

    constructor(
        // private menuScene: MenuScene,
        // private stageScene: StageScene,
    ) {




        this.gameConfig = {
            type: Phaser.CANVAS,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: {
                        y: 200
                    }
                }

            },

            parent: 'app-game',
            scene: [
                // menuScene,
                // stageScene
            ]
        }


        this.phaserGame = new Phaser.Game(this.gameConfig)


    }



}