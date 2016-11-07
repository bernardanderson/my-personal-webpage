import {Component} from '@angular/core';

declare var $:any;

@Component({
    selector: 'body',
    templateUrl: 'partials/app.html',
    styleUrls: ['css/style.css'],
})

export class AppComponent {
  
  ngOnInit():void {

    $(window).on("scroll", function() {
        $(".nav").toggleClass("shrink", $(this).scrollTop() > 20)
    });
  
  }


  navItems: Array<Object> = [
    { text: "Home", route: "" },
    { text: "Key Projects", route: "projects" },
    { text: "Blog", route: "blog" },
    { text: "Contact Info", route: "contact" }]

  copyrightInfo: string = "©2016 Bernard Anderson";

}