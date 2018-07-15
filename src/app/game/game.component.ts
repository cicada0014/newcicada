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
        // window.set
        // if(window.orientation){
        //     window.orientation = -90
        // }


        this.memoVw = window.innerWidth;
        this.gameConfig = {
            type: Phaser.CANVAS,
            width: 2000,
            height: 1200,
            zoom: 0.6,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: {
                        y: 200
                    }
                }

            },

            parent: 'game-canvas',
            scene: [
                this.menuScene,
                this.stageScene
            ]
        }



        this.phaserGame = new Phaser.Game(this.gameConfig)

    }

    ngAfterViewInit() {
        // let gameCanvas = document.getElementsByTagName('canvas')
        // if (gameCanvas.length > 0) {
        //     gameCanvas.item(0).width = innerHeight;
        //     gameCanvas.item(0).height = innerWidth;
        // }

    }

    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
    }

    ngOnDestroy(): void {
        this.phaserGame.destroy(false);
        let gameCanvas = document.getElementsByTagName('canvas')
        if (gameCanvas.length > 0) {
            gameCanvas.item(0).remove()
        }
    }
}