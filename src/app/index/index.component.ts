

import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCaretSquareDown } from '@fortawesome/free-regular-svg-icons'
import * as moment from 'moment'

@Component({
    selector: 'app-index',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.scss']
})

export class AppIndexComponent implements OnInit {

    public currTime: string;
    public facebookIcon = faFacebook;
    public faGithubIcon = faGithub;
    public caretIcon = faCaretSquareDown;


    constructor() {


        this.currTime = moment().format('YYYY-MM-DD HH:mm:ss')

        setInterval(() => {
            this.currTime = moment().format('YYYY년 MM월 DD일 HH시mm분ss초')
        }, 1000)


    }

    goLink(type: string) {
        let url: string = ''
        switch (type) {
            case 'facebook':
                url = 'https://www.facebook.com/cicada0014'
                break;
            case 'github':
                url = 'https://github.com/cicada0014'
                break;
            case 'steem':
                url = 'https://steemit.com/@cicada0014'
                break;
        }
        window.open(url, '_blank')

    }
    ngOnInit() {
        // this.currTime

        // setTimeout(() => {
        // }, 1000);



    }
}