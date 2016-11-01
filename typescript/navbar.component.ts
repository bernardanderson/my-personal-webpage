import {Component} from '@angular/core';
import { NavService }       from './nav.service';

@Component({
    selector: 'nav-bar', 
    templateUrl: 'partials/nav-bar.html',
    styleUrls: ['css/nav-bar.css'],
    providers: [ NavService ]
})

export class NavBarComponent {
  
  constructor(private navService: NavService) { }

  navItems: string[] = ["Home", "Key Projects", "Blog", "Contact Info"];
  currentNavItem: string = "Home";

  navBarSelects(sentNavSelection: string):void {
    this.navService.updateNavMessage(sentNavSelection);
    console.log(this.navService.getNavMessage());
  }

}