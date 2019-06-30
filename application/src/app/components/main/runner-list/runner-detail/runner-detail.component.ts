import { Component, Input } from '@angular/core';
import { IRunner } from 'src/app/interfaces/runner.interface';
import { ParseTime } from 'src/app/helpers/parse-time';
import { ISegment } from 'src/app/interfaces/segment.interface';

@Component({
    selector: 'fe-comp-runner-detail',
    templateUrl: './runner-detail.component.html',
    styleUrls: [ './runner-detail.component.scss' ]
})

export class RunnerDetailComponent {
    public showEditForm:boolean = false;
    public selectedSegment:ISegment = null;
    @Input() runner: IRunner;

    parseTime(secs:number) {
        return ParseTime(secs);
    }

    toggleEdit(id:number) {
        this.showEditForm = !this.showEditForm;
        this.selectedSegment = this.runner.segments.find(segment => segment.id = id);
    }
}