import { Component, Input, OnInit } from '@angular/core';
import { SegmentListService } from '../../../services/segment-list/segment-list.service';
import { IRunner } from 'src/app/interfaces/runner.interface';
import { ISegmentListItem } from 'src/app/interfaces/segment-list-item.interface';

@Component({
    selector: 'fe-comp-runner-time-form',
    templateUrl: './runner-time-form.component.html',
    styleUrls: [ './runner-time-form.component.scss' ]
})

export class RunnerTimeFormComponent implements OnInit {
    segmentList: ISegmentListItem[] = [];

    @Input() runner: IRunner;

    constructor(private segListServ: SegmentListService) {}

    ngOnInit() {
        console.log('revd', this.runner);
        this.segListServ.subscribeToList().subscribe(segmentList => this.segmentList = segmentList);
        this.segListServ.getList();
    }

    onSubmit(formResults) {
    }
}