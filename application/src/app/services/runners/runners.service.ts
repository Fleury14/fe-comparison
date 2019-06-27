import { Injectable } from '@angular/core';
import { IRunner } from '../../interfaces/runner.interface';
import { ISegment } from '../../interfaces/segment.interface';

@Injectable({
    providedIn: 'root'
})

export class RunnerService {
    constructor() {
    }

    private runners: IRunner[] = null;

    clearRunners() {
        localStorage.removeItem('runners');
    }

    getRunners() {
        localStorage.getItem('runners');
    }

    initializeRunners() {
        const newRunners: IRunner[] = [{
            id: 0,
            name: 'Fleury14',
            segments: [],
            totalTime: 0
        },
        {
            id: 1,
            name: 'Penguin8r',
            segments: [],
            totalTime: 0
        }];
    }

    addSegment(id: number, segment: ISegment) {
        const currentRunners: IRunner[] = JSON.parse(localStorage.getItem('runners'));
        if (!currentRunners) {
            console.log('No runners found');
            return;
        }
        // find the runner with specified id and add segment. if that id doesnt exits, error
        const target = currentRunners.find(runner => runner.id === id);
        if (!target) {
            console.log('No runner found with that id');
            return;
        }
        target.segments.push(segment);

        // recalculate total time
        let totalTime = 0;
        target.segments.forEach(segment => totalTime += segment.time);
        target.totalTime = totalTime;

        // save runners to LS
        localStorage.setItem('runners', JSON.stringify(currentRunners));
    }

    removeSegment(runnerId: number, segmentId: number) {
        const currentRunners: IRunner[] = JSON.parse(localStorage.getItem('runners'));
        if (!currentRunners) {
            console.log('No runners found');
            return;
        }
        // find the runner with specified id and add segment. if that id doesnt exits, error
        const target = currentRunners.find(runner => runner.id === runnerId);
        if (!target) {
            console.log('No runner found with that id');
            return;
        }

        // filter out segment, reassign segment list
        const newSegmentList: ISegment[] = target.segments.filter(segment => segment.id !== segmentId);
        target.segments = newSegmentList;

        // recalculate total time
        let totalTime = 0;
        target.segments.forEach(segment => totalTime += segment.time);
        target.totalTime = totalTime;

        // save runners to LS
        localStorage.setItem('runners', JSON.stringify(currentRunners));
    }
}
