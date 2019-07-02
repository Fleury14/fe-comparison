import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RunnerService } from 'src/app/services/runners/runners.service';
import { IRunner } from 'src/app/interfaces/runner.interface';
import { IRunnerAnalysis } from 'src/app/interfaces/runner-analysis.interface';
import { ParseSegmentType } from 'src/app/helpers/parse-segment-type';
import { ISegmentTypes } from 'src/app/interfaces/segment-type.interface';
import { SegmentListService } from 'src/app/services/segment-list/segment-list.service';
import { ISegmentListItem } from 'src/app/interfaces/segment-list-item.interface';
import { ParseTime } from 'src/app/helpers/parse-time';

@Component({
    selector: 'fe-comp-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: [ './analysis.component.scss']
})

export class AnalysisComponent implements OnInit, OnDestroy {
    public subs: Subscription[] = [];
    public runners: IRunner[];
    public runnerData: IRunnerAnalysis[] = [];
    public segmentList: ISegmentListItem[];
    public segmentTypes: ISegmentTypes;
    public bestTimes: number[] = [];

    constructor(private runnerServ: RunnerService, private segServ: SegmentListService) {}

    ngOnInit() {
        this.subs.push(this.runnerServ.subscribeToRunners().subscribe(runners => this.runners = runners));
        this.subs.push(this.segServ.subscribeToList().subscribe(seglist => this.segmentList = seglist));
        this.runnerServ.getRunners();
        this.segServ.getList();
        this.getBestTimes();
        console.log(this.runners);
        // parse runners to get common/uncommonn segments
        this.segmentTypes = ParseSegmentType(this.runners);
        
    }

    findSegTitle(segId: number):string {
        return this.segmentList.find(segment => segment.id === segId).name;
    }

    findRunnerTimeForSegment(runnerId: number, segId:number) {
        if (this.runners.find(runner => runner.id === runnerId).segments.find(segment => segment.locId === segId)) {
            return this.runners.find(runner => runner.id === runnerId).segments.find(segment => segment.locId === segId).time;
        }
        return '';
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    parseTime(sec: number) {
        return sec === 0 ? 'BEST' : ParseTime(sec);
    }
    
    getBestTimes() {
        // iterate through each runner
        this.runners.forEach((runner) => {
            // loop through each segment 
            runner.segments.forEach(segment => {
                // has another runner done this segment and beat it?
                if (this.bestTimes[segment.locId] && segment.time < this.bestTimes[segment.locId]) {
                    // if so, it's the new best time
                    this.bestTimes[segment.locId] = segment.time;
                } else if (!this.bestTimes[segment.locId]) {
                    //also add the time if a previous one doesnt exist
                    this.bestTimes[segment.locId] = segment.time;
                }
            });
        });
        console.log('best times', this.bestTimes)
    }
}