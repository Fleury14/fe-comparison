import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentModule } from '../common/common-component.module';

import { SegmentListComponent } from './segment-list/segment-list.component';
import { RunnerListComponent } from './runner-list/runner-list.component';
import { RunnerDetailComponent } from './runner-list/runner-detail/runner-detail.component';
@NgModule({
    declarations: [
        SegmentListComponent, RunnerListComponent, RunnerDetailComponent
    ],
    imports: [ CommonModule, CommonComponentModule ],
    exports: [
        SegmentListComponent, RunnerListComponent, RunnerDetailComponent
    ]
})

export class MainModule {};
