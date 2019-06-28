import { Component, OnInit } from '@angular/core';
import { SegmentListService } from '../../../services/segment-list/segment-list.service';
import { ISegmentListItem } from 'src/app/interfaces/segment-list-item.interface';

@Component({
    selector: 'fe-comp-main-segment-list',
    templateUrl: './segment-list.component.html',
    styleUrls: [ './segment-list.component.scss' ]
})

export class SegmentListComponent implements OnInit {
    public segmentList: ISegmentListItem[] = null;
    public showForm: boolean = false;

    constructor( private segList: SegmentListService) {}

    ngOnInit() {
        this.segList.subscribeToList().subscribe((segList: ISegmentListItem[]) => {
            this.segmentList = segList;
        });
        this.segList.getList();
        console.log(this.segmentList);
    }

    toggleForm() {
        this.showForm = !this.showForm;
    }
}