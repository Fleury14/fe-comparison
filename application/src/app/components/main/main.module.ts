import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonComponentModule } from '../common/common-component.module';

import { SegmentListComponent } from './segment-list/segment-list.component';
import { RunnerListComponent } from './runner-list/runner-list.component';
import { RunnerDetailComponent } from './runner-list/runner-detail/runner-detail.component';
import { ResetRaceComponent } from './reset-race/reset-race.component';
@NgModule({
    declarations: [
        SegmentListComponent, RunnerListComponent, RunnerDetailComponent, ResetRaceComponent
    ],
    imports: [ CommonModule, CommonComponentModule, FormsModule ],
    exports: [
        SegmentListComponent, RunnerListComponent, RunnerDetailComponent, ResetRaceComponent
    ]
})

export class MainModule {};
