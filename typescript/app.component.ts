import {Component} from '@angular/core';

declare var $:any;

@Component({
    selector: 'body',
    templateUrl: 'partials/app.html',
    styleUrls: ['css/style.css'],
})

export class AppComponent {
  
  navItems: Array<Object> = [
    { text: "Home", route: "", UIIcon: "Home icon" },
    { text: "Key Projects", route: "projects", UIIcon: "Folder Ouline icon" },
    { text: "Contact Info", route: "", clickFunction: "contactModal()", UIIcon: "Info icon" }]

  copyrightInfo: string = "©2016 Bernard Anderson";

  // This inits the jQuery class addition when the main page is scrolled greater than 10px
  ngOnInit():void {
    $('.ui.modal').modal();
  }

  contactModal(): void {
    $('.ui.modal').modal('show');
  }
}