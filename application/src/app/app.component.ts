import { Component, OnInit } from '@angular/core';

import { SegmentListService } from './services/segment-list/segment-list.service'


@Component({
  selector: 'fe-comp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'application';

  constructor(private segList: SegmentListService) {}

  ngOnInit() {
    this.segList.clearList();
    // check for segement list, if it doesn't exist, add default
    const currentList = localStorage.getItem('segment-list');
    if (!currentList) {
      this.segList.initializeList();
    }
  }
}
