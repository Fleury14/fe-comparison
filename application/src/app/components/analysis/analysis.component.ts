import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RunnerService } from 'src/app/services/runners/runners.service';
import { IRunner } from 'src/app/interfaces/runner.interface';
import { IRunnerAnalysis } from 'src/app/interfaces/runner-analysis.interface';

@Component({
    selector: 'fe-comp-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: [ './analysis.component.scss']
})

export class AnalysisComponent implements OnInit, OnDestroy {
    public subs: Subscription[] = [];
    public runners: IRunner[];
    public runnerData: IRunnerAnalysis[] = [];

    constructor(private runnerServ: RunnerService) {}

    ngOnInit() {
        this.subs.push(this.runnerServ.subscribeToRunners().subscribe(runners => this.runners = runners));
        this.runnerServ.getRunners();
        console.log(this.runners);
        // iterate through each runner
        this.runners.forEach((runner) => {
            const newAnalysis:IRunnerAnalysis = {
                id: runner.id,
                common: [],
                uncommon: []
            };
            // loop through each segment to categorize
            runner.segments.forEach(segment => {
                // has another runner done this segment
                let isCommon: boolean = false;
                // go through each runner again
                this.runners.forEach(opponent => {
                    // ignore if comparing against self
                    if (opponent.id !== runner.id) {
                        // if any opposing runner has done the same segment then its common
                        // TODO: Require ALL opponents to do it?
                        if (opponent.segments.find(oppSeg => oppSeg.locId === segment.locId)) {
                            isCommon = true;
                        }
                    }
                });
                // assign segment to correct category
                if (isCommon) {
                    newAnalysis.common.push(segment);
                } else {
                    newAnalysis.uncommon.push(segment);
                }
            });
            this.runnerData.push(newAnalysis);
        })
        console.log('runner data', this.runnerData);

    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
}