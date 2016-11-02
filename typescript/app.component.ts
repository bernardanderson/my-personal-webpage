import {Component} from '@angular/core';

@Component({
    selector: 'body',
    templateUrl: 'partials/app.html',
    styleUrls: ['css/style.css'],
})

export class AppComponent {

  navItems: Array<Object> = [
    { text: "Home", route: "" },
    { text: "Key Projects", route: "projects" },
    { text: "Blog", route: "blog" },
    { text: "Contact Info", route: "contact" }]

  copyrightInfo: string = "©2016 Bernard Anderson";

}