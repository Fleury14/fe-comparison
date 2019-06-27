import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentListComponent } from './segment-list/segment-list.component';
import { RunnerListComponent } from './runner-list/runner-list.component';

@NgModule({
    declarations: [
        SegmentListComponent, RunnerListComponent
    ],
    imports: [ CommonModule ],
    exports: [
        SegmentListComponent, RunnerListComponent
    ]
})

export class MainModule {};
