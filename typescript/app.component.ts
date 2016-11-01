import {Component}      from '@angular/core';
import { NavService }   from './nav.service';

@Component({
    selector: 'body',
    templateUrl: 'partials/app.html',
    styleUrls: ['css/style.css'],
    providers: [ NavService ]
})

export class AppComponent { 

    message: string;

    constructor(private navService: NavService) { 
        this.message = navService.navMessage;
    }

    clicked():void {
    }
}