import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import {BoxesComponent} from './components/boxes/boxes.component';
import {BoxComponent} from './components/box/box.component';

import {BoxesService} from './services/boxes.service';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
    declarations: [
        BoxesComponent, BoxComponent
    ],
    imports: [
        BrowserModule, HttpModule, FormsModule, ModalModule.forRoot(), AngularFontAwesomeModule
    ],
    providers: [BoxesService, CookieService],
    bootstrap: [BoxesComponent]
})
export class AppModule {
}
