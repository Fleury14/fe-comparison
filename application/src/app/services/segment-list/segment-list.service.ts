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

    editSegment(listItem: ISegmentListItem) {
        const currentList:ISegmentListItem[] = JSON.parse(localStorage.getItem('segment-list'));
        const targetItem = currentList.find(segment => segment.id === listItem.id);
        targetItem.name = listItem.name;
        localStorage.setItem('segment-list', JSON.stringify(currentList));
        this.segmentListSource.next(currentList);
    }

    removeSegment(id: number) {
        const currentList:ISegmentListItem[] = JSON.parse(localStorage.getItem('segment-list'));
        const target = currentList.find((segment: ISegmentListItem) => segment.id === id);
        if (!target) {
            console.log('No ID found with that number');
            return;
        }
        const newList = currentList.filter(segment => segment.id !== id);
        localStorage.setItem('segment-list', JSON.stringify(newList));
        this.segmentListSource.next(newList);
    }

    clearList() {
        localStorage.removeItem('segment-list');
        this.segmentListSource.next([]);
    }

    initializeList() {
        localStorage.setItem('segment-list', JSON.stringify(initialSegmentList));
        this.segmentListSource.next(initialSegmentList);
    }
    
    getList() {
        this.segmentListSource.next(JSON.parse(localStorage.getItem('segment-list')))
    }

    subscribeToList() {
        return this.segmentListSource.asObservable(); 
    }
}