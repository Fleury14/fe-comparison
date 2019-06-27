import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentListComponent } from './segment-list/segment-list.component';

@NgModule({
    declarations: [
        SegmentListComponent
    ],
    imports: [ CommonModule ],
    exports: [
        SegmentListComponent
    ]
})

export class MainModule {};
