import {Component} from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: './navbar.component.html',
    styles: [
        '.nav .nav-nav {font-size: 15px;}',
        '#searchForm {margin-right: 100px}',
        '@media (max-width: 1200px) {#searchForm {display:none}'
    ]
})

export class NavbarComponent { 

}
