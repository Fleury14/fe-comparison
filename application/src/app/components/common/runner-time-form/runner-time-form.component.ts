import { Component, Input, OnInit } from '@angular/core';
import { SegmentListService } from '../../../services/segment-list/segment-list.service';
import { IRunner } from 'src/app/interfaces/runner.interface';
import { ISegmentListItem } from 'src/app/interfaces/segment-list-item.interface';
import { RunnerService } from 'src/app/services/runners/runners.service';
import { ISegment } from 'src/app/interfaces/segment.interface';

@Component({
    selector: 'fe-comp-runner-time-form',
    templateUrl: './runner-time-form.component.html',
    styleUrls: [ './runner-time-form.component.scss' ]
})

export class RunnerTimeFormComponent implements OnInit {
    segmentList: ISegmentListItem[] = [];
    public minutes: number;
    public seconds: number;
    public segmentName: string;
    @Input() runner: IRunner;
    @Input() editMode: boolean;
    @Input() editData: ISegment;

    constructor(private segListServ: SegmentListService, private runnerServ: RunnerService) {}

    ngOnInit() {
        this.segListServ.subscribeToList().subscribe(segmentList => this.segmentList = segmentList);
        this.segListServ.getList();
        if(this.editMode && this.editData) {
            this.minutes = Math.floor(this.editData.time / 60);
            this.seconds = Math.floor(this.editData.time % 60);
            this.segmentName = this.editData.name;
        }
    }

    onSubmit(formResults) {
        console.log('sub', formResults);
        const time: number = (formResults.minutes * 60) + formResults.seconds;
        const newSegment:ISegment = {
            name: formResults.segmentName,
            locId: this.segmentList.find(segment => segment.name === formResults.segmentName).id,
            time
        }
        if (this.editMode) {
            newSegment.id = this.editData.id;
            this.runnerServ.editSegment(this.runner.id, newSegment);
            
        } else {
            this.runnerServ.addSegment(this.runner.id, newSegment);
        }
        
        this.minutes = 0;
        this.seconds = 0;
        this.segmentName = '';
        
    }
}