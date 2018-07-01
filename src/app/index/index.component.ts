

import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
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


    constructor() {


        this.currTime = moment().format('YYYY-MM-DD HH:mm:ss')

        setInterval(() => {
            this.currTime = moment().format('YYYY-MM-DD HH:mm:ss')
        }, 1000)


    }


    ngOnInit() {

    }
}