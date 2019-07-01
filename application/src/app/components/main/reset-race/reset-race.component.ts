import { Component } from '@angular/core';
import { IRunner } from 'src/app/interfaces/runner.interface';
import { RunnerService } from 'src/app/services/runners/runners.service';

@Component({
    selector: 'fe-comp-reset-race',
    templateUrl: './reset-race.component.html',
    styleUrls: [ './reset-race.component.scss' ],
})

export class ResetRaceComponent {
    public showRacerNum: boolean = false;
    public showRacerEntry: boolean = false;
    public numberOfRacers: number = 2;
    public placeholderArray: string[] = [];

    constructor(private runnerServ: RunnerService) {}

    toggleReset() {
        if (!this.showRacerNum) {
            this.showRacerEntry = false;
            this.showRacerNum = true;
        } else {
            this.showRacerEntry = false;
            this.showRacerNum = false;
        }
    }

    trackByFn(index: any, item: any) {
        return index;
    }

    inputNames(numRacers: number) {
        this.placeholderArray = [];
        for (let i = 0; i < numRacers; i++) {
            this.placeholderArray.push('');
        }
        this.showRacerEntry = true;
    }

    resetRace(formResults: object) {
        const newRunners: IRunner[] = [];
        const runnerNames: string[] = Object.values(formResults);
        console.log(runnerNames);
        runnerNames.forEach((name, index) => {
            newRunners.push({
                name,
                id: index,
                segments: [],
                totalTime: 0
            });
        });
        this.runnerServ.setNewRace(newRunners);
        this.showRacerEntry = false;
        this.showRacerNum = false;
    }
}
