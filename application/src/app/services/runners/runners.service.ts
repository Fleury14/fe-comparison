import { Injectable } from '@angular/core';
import { IRunner } from '../../interfaces/runner.interface';
import { ISegment } from '../../interfaces/segment.interface';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RunnerService {
    constructor() {
    }

    private runners: IRunner[] = null;
    private runnersSource = new Subject<IRunner[]>();

    clearRunners() {
        localStorage.removeItem('runners');
    }

    getRunners() {
        this.runnersSource.next(JSON.parse(localStorage.getItem('runners')));
        // return localStorage.getItem('runners');
    }

    subscribeToRunners() {
        return this.runnersSource.asObservable();
    }

    initializeRunners() {
        const newRunners: IRunner[] = [{
            id: 0,
            name: 'Fleury14',
            segments: [
                {
                    name: 'Shopping',
                    locId: 1,
                    id: 1,
                    time: 230
                }
            ],
            totalTime: 230
        },
        {
            id: 1,
            name: 'Penguin8r',
            segments: [],
            totalTime: 0
        }];
        localStorage.setItem('runners', JSON.stringify(newRunners));
    }

    setNewRace(runners: IRunner[]) {
        localStorage.setItem('runners', JSON.stringify(runners));
        this.runnersSource.next(runners);
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
        // find first open ID
        let newId:number = 0
        let foundId:boolean = false;
        while (!foundId) {
            newId++;
            if (!target.segments.find(segment => segment.id === newId)) {
                foundId = true;
            }
        }
        segment.id = newId;
        target.segments.push(segment);

        // recalculate total time
        let totalTime = 0;
        target.segments.forEach(segment => totalTime += segment.time);
        target.totalTime = totalTime;

        // save runners to LS
        localStorage.setItem('runners', JSON.stringify(currentRunners));

        // resend data to subscribers
        this.runnersSource.next(currentRunners);
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
        this.runnersSource.next(currentRunners);
    }

    editSegment(runnerId: number, updatedSegment: ISegment) {
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

        // find target segment to replace adjust time
        const targetSegment:ISegment = target.segments.find(segment => segment.id === updatedSegment.id);
        targetSegment.time = updatedSegment.time

        // recalculate total time
        let totalTime = 0;
        target.segments.forEach(segment => totalTime += segment.time);
        target.totalTime = totalTime;

        // save to LS and send data out
        localStorage.setItem('runners', JSON.stringify(currentRunners));
        this.runnersSource.next(currentRunners);

    }
}
