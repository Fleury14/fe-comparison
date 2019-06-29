import { Component } from '@angular/core';
import { SegmentListService } from '../../../services/segment-list/segment-list.service';

@Component({
    selector: 'fe-comp-segment-form',
    templateUrl: './runner-time-form.component.html',
    styleUrls: [ './runner-time-formcomponent.scss' ]
})

export class RunnerTimeFormComponent {
    public segmentName: string;

    constructor(private segListServ: SegmentListService) {}

    onSubmit(formResults) {
        this.segListServ.addSegment(formResults.segmentName);
        this.segmentName = '';
    }
}