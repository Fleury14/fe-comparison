import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SegmentFormComponent } from './segment-form/segment-form.component';
import { RunnerTimeFormComponent } from './runner-time-form/runner-time-form.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
    declarations: [
        SegmentFormComponent, RunnerTimeFormComponent, ModalComponent
    ],
    imports: [ CommonModule, FormsModule ],
    exports: [
        SegmentFormComponent, RunnerTimeFormComponent, ModalComponent
    ]
})

export class CommonComponentModule {}
