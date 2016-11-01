import {Component}      from '@angular/core';

@Component({
    selector: 'body',
    templateUrl: 'partials/app.html',
    styleUrls: ['css/style.css'],
})

export class AppComponent {

    message: string;

    selectedNavItem(navSelection: string):void {
        this.message = navSelection;
    }
}