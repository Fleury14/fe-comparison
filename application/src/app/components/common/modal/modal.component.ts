import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'fe-comp-modal',
    templateUrl: './modal.component.html',
    styleUrls: [ './modal.component.scss' ]
})

export class ModalComponent {
    public isModalActive: boolean = false;
    @Output() confirmed = new EventEmitter<boolean>();
    @Output() cancel = new EventEmitter<boolean>();
    @Input() content: string;
    @Input() size: string;
    @Input() title: string;

    public confirm() {
    this.confirmed.emit(true);
    this.isModalActive = false;
    }

    public showModal() {
    this.isModalActive = true;
    }

    public hideModal() {
    this.isModalActive = false;
    this.cancel.emit(true);
    }
}
