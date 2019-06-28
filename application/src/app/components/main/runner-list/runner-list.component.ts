import { Component, OnInit } from '@angular/core';
import { RunnerService } from '../../../services/runners/runners.service';
import { IRunner } from 'src/app/interfaces/runner.interface';
import { ParseTime } from 'src/app/helpers/parse-time';

@Component({
    selector: 'fe-comp-main-runner-list',
    templateUrl: './runner-list.component.html',
    styleUrls: [ './runner-list.component.scss' ]
})

export class RunnerListComponent implements OnInit {

    public currentRunners: IRunner[] = null;

    constructor(private runnerServ: RunnerService) {}

    ngOnInit() {
        this.runnerServ.initializeRunners();
        this.currentRunners = JSON.parse(this.runnerServ.getRunners());
    }

    parseTime(totalTime:number):string {
        return ParseTime(totalTime)
    }
}
