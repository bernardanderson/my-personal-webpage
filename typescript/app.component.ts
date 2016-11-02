import {Component} from '@angular/core';

@Component({
    selector: 'body',
    templateUrl: 'partials/app.html',
    styleUrls: ['css/style.css'],
})

export class AppComponent {

  navItems: string[] = ["Home", "Key Projects", "Blog", "Contact Info"];
  copyrightInfo: string = "©2016 Bernard Anderson";

}