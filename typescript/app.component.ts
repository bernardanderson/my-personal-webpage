import {Component} from '@angular/core';

@Component({
    selector: 'body',
    templateUrl: 'partials/app.html',
    styleUrls: ['css/style.css']
})

export class AppComponent { 

    message: string = "Hello There!";

    clicked(sentMessage:string):void {
        console.log(this.message + sentMessage);
    }
}