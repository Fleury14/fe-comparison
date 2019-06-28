import { Injectable } from '@angular/core';
import { initialSegmentList } from '../../initial-data/initial-segment';
import { ISegmentListItem } from '../../interfaces/segment-list-item.interface';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SegmentListService {
    constructor() {}

    private segmentListSource = new Subject<ISegmentListItem[]>();

    addSegment(listItemName: string) {
        const currentList:ISegmentListItem[] = JSON.parse(localStorage.getItem('segment-list'));
        // find first open ID
        let newId:number = 0
        let foundId:boolean = false;
        while (!foundId) {
            newId++;
            if (!currentList.find(segment => segment.id === newId)) {
                foundId = true;
            }
        }
        // assign id/name
        const listItem:ISegmentListItem = {
            id: newId,
            name: listItemName
        }
        if (currentList && currentList.length > 0) {
            currentList.push(listItem);
            localStorage.setItem('segment-list', JSON.stringify(currentList));
        } else {
            const newList: ISegmentListItem[] = [listItem];
            localStorage.setItem('segment-list', JSON.stringify(newList));
        }
        this.segmentListSource.next(currentList);
    }

    clearList() {
        localStorage.removeItem('segment-list');
    }

    initializeList() {
        localStorage.setItem('segment-list', JSON.stringify(initialSegmentList));
    }
    
    getList() {
        this.segmentListSource.next(JSON.parse(localStorage.getItem('segment-list')))
    }

    subscribeToList() {
        return this.segmentListSource.asObservable(); 
    }
}