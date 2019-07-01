import { Component, OnInit, OnDestroy } from '@angular/core';
import { RunnerService } from '../../../services/runners/runners.service';
import { IRunner } from 'src/app/interfaces/runner.interface';
import { ParseTime } from 'src/app/helpers/parse-time';
import { ISegmentListItem } from 'src/app/interfaces/segment-list-item.interface';
import { SegmentListService } from 'src/app/services/segment-list/segment-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'fe-comp-main-runner-list',
    templateUrl: './runner-list.component.html',
    styleUrls: [ './runner-list.component.scss' ]
})

export class RunnerListComponent implements OnInit, OnDestroy {

    public currentRunners: IRunner[] = null;
    public showTimeForm: boolean = false;
    public showEditForm: boolean = false;
    public selectedRunner:IRunner = null;
    public segmentsList:ISegmentListItem[] = null;
    private sub: Subscription;

    constructor(private runnerServ: RunnerService) {}

    ngOnInit() {
        // this.runnerServ.initializeRunners();
        this.sub = this.runnerServ.subscribeToRunners().subscribe(runners => {
            this.currentRunners = runners;
            this.showTimeForm = false;
            this.showEditForm = false;
        });
        this.runnerServ.getRunners();

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    parseTime(totalTime:number):string {
        return ParseTime(totalTime);
    }

    toggleForm(runnerId:number) {
        console.log('rid', runnerId);
        if (runnerId || runnerId === 0) {
            this.selectedRunner = this.currentRunners.find(runner => runner.id === runnerId);
        }
        this.showTimeForm = !this.showTimeForm;

    }

    toggleEdit(runnerId: number) {
        if (runnerId || runnerId === 0) {
            this.selectedRunner = this.currentRunners.find(runner => runner.id === runnerId);
        }
        this.showEditForm = !this.showEditForm;
    }
}
