import { Component, Input, OnInit } from '@angular/core';
import { SegmentListService } from '../../../services/segment-list/segment-list.service';
import { ISegmentListItem } from 'src/app/interfaces/segment-list-item.interface';

@Component({
    selector: 'fe-comp-segment-form',
    templateUrl: './segment-form.component.html',
    styleUrls: [ './segment-form.component.scss' ]
})

export class SegmentFormComponent implements OnInit {
    public segmentName: string;
    @Input() editMode: boolean;
    @Input() editData: ISegmentListItem;

    constructor(private segListServ: SegmentListService) {}

    ngOnInit() {
        if (this.editMode) {
            this.segmentName = this.editData.name;
        }
    }

    onSubmit(formResults) {
        if (this.editMode) {
            this.segListServ.editSegment({ id: this.editData.id, name: this.segmentName });
        } else {
            this.segListServ.addSegment(formResults.segmentName);
            this.segmentName = '';
        }
    }
}