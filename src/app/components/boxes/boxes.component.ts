import {Component, OnInit, TemplateRef} from '@angular/core';
import {Box, UiBox} from '../../models/app.models';
import {BoxesService} from '../../services/boxes.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'boxes',
    templateUrl: './boxes.component.html',
    styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

    boxes: Box[];
    uiBoxes: UiBox[];
    filteredUiBoxes: UiBox[];
    selectedFilter: string;

    constructor(private boxesService: BoxesService, private cookieService: CookieService) {
    }

    ngOnInit() {
        this.boxesService.getBoxes().subscribe(boxes => {
            this.boxes = boxes;
            this.createUiBoxes();
            this.cookieService.set('Test', 'Hello World');
            const cookieValue = this.cookieService.get('Test');
            alert(cookieValue);
        });
    }

    createUiBoxes() {
        this.uiBoxes = [];

        for (const box of this.boxes) {
            const features = box.title.split(';');
            const imgId = features[1].replace('Box -', '').trim();

            const newUiBox: UiBox = {
                id: '111',
                name: features[1],
                category: features[0],
                img: `../../assets/images/portfolio-${imgId}-sm.jpg`,
                description: box.description
            };

            this.uiBoxes.push(newUiBox);
        }

        this.filteredUiBoxes = this.uiBoxes.splice(0, 9);
    }

    loadMore() {
        this.filteredUiBoxes = this.uiBoxes;
    }

    filter(category: string) {
        this.selectedFilter = category;
        this.filteredUiBoxes = this.uiBoxes.filter(x => x.category.toLowerCase() === category.toLowerCase());
    }

    isSelected(category: string): boolean {
        if (this.selectedFilter === category) {
            return true;
        }

        return false;
    }

    showAll() {
        this.selectedFilter = '';
        this.filteredUiBoxes = this.uiBoxes;
    }
}
