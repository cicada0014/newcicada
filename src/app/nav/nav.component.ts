

import { Component, OnInit } from '@angular/core';
import { faSmile, faAddressBook, faHandRock, faFileAlt, faInfo } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.scss']
})

export class NavComponent implements OnInit {


    public navItems: NavItem[] = [];

    public faAddressBook = faAddressBook;
    constructor() {

        this.navItems = [
            {
                name: 'welcome',
                icon: faSmile
            },
            {
                name: 'about',
                icon: faAddressBook
            },
            {
                name: 'skills',
                icon: faHandRock
            },
            {
                name: 'portfolio',
                icon: faFileAlt
            }
            ,
            {
                name: 'more',
                icon: faInfo
            },

        ]
    }


    // 단순히정보만 표시할 거니까 http 는 필요 없겠군...?
    ngOnInit() {



    }

    actingScrolspy(elementId) {
        console.log(elementId)
        if (document.getElementById(elementId)) {
            window.scrollTo(0, document.getElementById(elementId).offsetTop)
        }
    }
}

export interface NavItem {
    name: string,
    icon: any;
}