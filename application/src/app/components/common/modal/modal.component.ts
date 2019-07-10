import { Component } from '@angular/core';

@Component({
    selector: 'fe-comp-modal',
    templateUrl: './modal.component.html',
    styleUrls: [ './modal.component.scss' ]
})

export class ModalComponent {
    public isModalActive: boolean = false;

    toggleModal() {
        this.isModalActive = !this.isModalActive;
    }
}
