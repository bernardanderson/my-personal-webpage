import {Component} from '@angular/core';

@Component({
    selector: 'nav-bar', 
    templateUrl: 'partials/nav-bar.html',
    styleUrls: ['css/nav-bar.css']
})

export class NavBarComponent {
  
  navItems: string[] = ["Home", "Key Projects", "Blog", "Contact Info"];

}