import { Component } from '@angular/core';
import { MenuScene } from './scene/menu/menu.scene';
import * as Phaser from 'phaser';
import { StageScene } from './scene/stage/stage.scene';


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent {

    gameConfig




    phaserGame: Phaser.Game


    memoVw: number;

    private menuScene: MenuScene = new MenuScene()
    private stageScene: StageScene = new StageScene()

    constructor(

    ) {
    }
    ngOnInit(): void {
        this.memoVw = window.innerWidth;
        this.gameConfig = {
            type: Phaser.CANVAS,
            width: window.innerWidth,
            height: window.innerHeight,
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
                this.menuScene,
                this.stageScene
            ]
        }



        this.phaserGame = new Phaser.Game(this.gameConfig)

    }



    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        // if (window.innerWidth !== this.memoVw) {
        //     setTimeout(() => {
        //         this.phaserGame.resize(window.innerWidth, window.innerHeight)
        //     }, 2000);
        // }
    }

    ngOnDestroy(): void {
        this.phaserGame.destroy(false);
        let gameCanvas = document.getElementsByTagName('canvas')
        if (gameCanvas.length > 0) {
            gameCanvas.item(0).remove()
        }
    }
}