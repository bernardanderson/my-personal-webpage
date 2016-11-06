import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var $:any;

@Component({
    selector: 'project-view', 
    templateUrl: 'partials/project-view.html',
    styleUrls: ['css/project-view.css'],
})

export class ProjectViewComponent {
  
  checkyourselfImages = [
    "AccountLedger.png",
    "SingleItem.png",
    "CheckBuilder.png",
    "AccountExpend.png"
  ]

  ngOnInit(){
    $('.shape').shape();
  }

  flipper() {
    $('.shape').shape('flip left');
  }

  hover():void {
      $('.dimmer').dimmer('toggle');
  }

  blur():void {
      $('.dimmer').dimmer('toggle');
  }
}