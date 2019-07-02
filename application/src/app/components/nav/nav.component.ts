import { Component } from '@angular/core';

@Component({
    selector: 'fe-comp-nav',
    templateUrl: './nav.component.html',
    styleUrls: [ './nav.component.scss' ]
})

export class NavComponent {
    burgerToggle() {
        const burger = document.getElementById('burgerYum');
        const menu = document.getElementById('navbarBasicExample');
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    }
}
