import { Injectable } from '@angular/core';
import * as Phaser from 'phaser'


@Injectable()
export class MenuScene extends Phaser.Scene {



    enterKey: Phaser.Input.Keyboard.Key;
    text
    constructor() {
        super({
            key: 'menu'
        })
    }
    preload() {

    }

    create() {
        this.text = this.add.text(300, 300, '엔터를 눌러 게임을 시작하세요!');
        // console.log(welcomeText)
        this.input.on('pointerdown', (event) => {
            this.scene.start('stage')
        })
        // this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        // this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        this.cameras.main.startFollow(this.text)
    }

    // update는 루프 문이다.
    update() {
        // if (this.enterKey.isDown) {
        //     this.scene.start('stage')
        // }


        // if (this.enterKey.isDown) {
        //     this.scene.start('stage')
        //     this.enterKey.isDown = false
        // }


    }
}




