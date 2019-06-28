import { Component } from '@angular/core';
import { SegmentListService } from '../../../services/segment-list/segment-list.service';

@Component({
    selector: 'fe-comp-segment-form',
    templateUrl: './segment-form.component.html',
    styleUrls: [ './segment-form.component.scss' ]
})

export class SegmentFormComponent {
    public segmentName: string;

    constructor(private segListServ: SegmentListService) {}

    onSubmit(formResults) {
        this.segListServ.addSegment(formResults.segmentName);
        this.segmentName = '';
    }
}