import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentFormComponent } from './segment-form/segment-form.component';

@NgModule({
    declarations: [
        SegmentFormComponent
    ],
    imports: [ CommonModule ],
    exports: [
        SegmentFormComponent
    ]
})

export class CommonComponentModule {}
