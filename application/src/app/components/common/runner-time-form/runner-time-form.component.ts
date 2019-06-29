import { Component, Input, OnInit } from '@angular/core';
import { SegmentListService } from '../../../services/segment-list/segment-list.service';
import { IRunner } from 'src/app/interfaces/runner.interface';

@Component({
    selector: 'fe-comp-runner-time-form',
    templateUrl: './runner-time-form.component.html',
    styleUrls: [ './runner-time-form.component.scss' ]
})

export class RunnerTimeFormComponent implements OnInit {
    public segmentName: string;

    @Input() runner: IRunner;

    constructor(private segListServ: SegmentListService) {}

    ngOnInit() {
        console.log('revd', this.runner);
    }

    onSubmit(formResults) {
        this.segListServ.addSegment(formResults.segmentName);
        this.segmentName = '';
    }
}