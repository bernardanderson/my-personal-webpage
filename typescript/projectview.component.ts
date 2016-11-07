import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var $:any;

@Component({
    selector: 'project-view', 
    templateUrl: 'partials/project-view.html',
    styleUrls: ['css/project-view.css'],
})

export class ProjectViewComponent {
  
  ngOnInit():void {
    $('.shape').shape();
  }

  flipper(sentClass):void {
      $(`.shape.${sentClass}`).shape('flip left');
    }

  hover(sentClass):void {
      $(`.dimmer.${sentClass}`).dimmer('toggle');
  }

  blur(sentClass):void {
      $(`.dimmer.${sentClass}`).dimmer('toggle');
  }
}