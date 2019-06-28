import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SegmentFormComponent } from './segment-form/segment-form.component';

@NgModule({
    declarations: [
        SegmentFormComponent
    ],
    imports: [ CommonModule, FormsModule ],
    exports: [
        SegmentFormComponent
    ]
})

export class CommonComponentModule {}
