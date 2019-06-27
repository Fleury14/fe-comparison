import { Component, OnInit } from '@angular/core';
import { SegmentListService } from '../../services/segment-list/segment-list.service';
import { ISegmentListItem } from 'src/app/interfaces/segment-list-item.interface';

@Component({
    selector: 'fes-comp-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss' ],
})

export class MainComponent implements OnInit {

    public segmentList: ISegmentListItem[] = null;

    constructor( private segList: SegmentListService) {}

    ngOnInit() {
        this.segmentList = this.segList.getList();
        console.log(this.segmentList);
    }
}