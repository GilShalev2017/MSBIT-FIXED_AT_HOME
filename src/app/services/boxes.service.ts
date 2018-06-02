import {Injectable} from '@angular/core';
import {Box} from '../models/app.models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Http, Response} from '@angular/http';

@Injectable()
export class BoxesService {
    // private boxesJsonFile = 'http://localhost:4200/assets/boxes.json';
    private boxesJsonFile = '/assets/boxes.json';
    constructor(private http: Http) {
    }

    getBoxes(): Observable<Box[]> {
        return this.http.get(this.boxesJsonFile)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
