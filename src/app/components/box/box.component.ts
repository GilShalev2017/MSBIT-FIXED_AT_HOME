import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Box, UiBox} from '../../models/app.models';
import {BoxesService} from '../../services/boxes.service';

@Component({
    selector: 'box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

    @Input() uiBox: UiBox;

    constructor() {
    }

    ngOnInit() {

    }

    // filter() {
    //     alert("jjjj");
    // }
}
