import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var $:any;

@Component({
    selector: 'project-view', 
    templateUrl: 'partials/project-view.html',
    styleUrls: ['css/project-view.css'],
})

export class ProjectViewComponent {
  
  // currentImageElement = 0;
  
  // checkyourselfImages = [
  //   "AccountLedger.png",
  //   "SingleItem.png",
  //   "CheckBuilder.png",
  //   "AccountExpend.png"
  // ]

  ngOnInit(){
    $('.shape').shape();
    // let pictureTimer = Observable.timer(3000, 6000);
    // pictureTimer.subscribe(t => this.pictureChange());
  }

  flipper() {
    $('.shape').shape('flip left');
  }

  // pictureChange() {
  //   if (this.currentImageElement === 3) {
  //     this.currentImageElement = 0;
  //   } else {
  //     this.currentImageElement++;
  //   }
  // }

  hover():void {
      $('.dimmer').dimmer('toggle');
  }

  blur():void {
      $('.dimmer').dimmer('toggle');
  }
}