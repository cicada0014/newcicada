

import { Component, OnInit } from '@angular/core';
import { faSmile, faAddressBook, faHandRock, faFileAlt, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationStart, NavigationEnd } from '../../../node_modules/@angular/router';
@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.scss']
})

export class NavComponent implements OnInit {


    public item: NavItem;
    public gameNav: NavItem = {
        name: 'game',
        icon: faHandRock
    };
    public indexNav: NavItem = {
        name: 'index',
        icon: faFileAlt
    };

    public faAddressBook = faAddressBook;
    constructor(
        private router: Router


    ) {

    }


    // 단순히정보만 표시할 거니까 http 는 필요 없겠군...?
    ngOnInit() {
        this.item = this.gameNav;
        this.router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {


            }
            if (route instanceof NavigationEnd) {
                console.log(route)
                if (route.url == '/game') {
                    this.item = this.indexNav
                } else {
                    this.item = this.gameNav
                }
            }
        });


    }

    goNav() {
        this.router.navigate([this.item.name])
    }
}

export interface NavItem {
    name: string,
    icon: any;
}