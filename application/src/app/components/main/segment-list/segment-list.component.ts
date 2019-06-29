import { Component, OnInit, OnDestroy } from '@angular/core';
import { SegmentListService } from '../../../services/segment-list/segment-list.service';
import { ISegmentListItem } from 'src/app/interfaces/segment-list-item.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'fe-comp-main-segment-list',
    templateUrl: './segment-list.component.html',
    styleUrls: [ './segment-list.component.scss' ]
})

export class SegmentListComponent implements OnInit, OnDestroy {
    public segmentList: ISegmentListItem[] = null;
    public showForm: boolean = false;
    private subs:Subscription[] = [];

    constructor( private segList: SegmentListService) {}

    ngOnInit() {
        this.subs.push(this.segList.subscribeToList().subscribe((segList: ISegmentListItem[]) => {
            this.segmentList = segList;
        }));
        this.segList.getList();
        console.log(this.segmentList);
    }

    deleteSegment(id:number) {
        console.log('recvd', id);
        this.segList.removeSegment(id);
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    toggleForm() {
        this.showForm = !this.showForm;
    }
}