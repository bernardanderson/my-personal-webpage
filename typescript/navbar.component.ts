import {Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'nav-bar', 
    templateUrl: 'partials/nav-bar.html',
    styleUrls: ['css/nav-bar.css'],
})

export class NavBarComponent {
  
  navItems: string[] = ["Home", "Key Projects", "Blog", "Contact Info"];

  // The output tracks any changes to the 'selectedNavItem' variable.
  @Output() selectedNavItem = new EventEmitter<string>();

  // This gets called when a NavButton is clicked and announces the change and sends the variable contents.
  changeNavItem(sentSelection: string) {
    this.selectedNavItem.emit(sentSelection);
  }
}