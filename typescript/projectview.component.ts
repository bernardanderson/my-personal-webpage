import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var $:any;

@Component({
    selector: 'project-view', 
    templateUrl: 'partials/project-view.html',
    styleUrls: ['css/project-view.css'],
})

export class ProjectViewComponent {
  
  constructor() {}

  chequeYourselfImgArray: string[] = [
      "media/chequey/CheckBuilder.png",
      "media/chequey/SingleItem.png",
      "media/chequey/AccountExpend.png",
      "media/chequey/AccountLedger.png"
  ];

  gauntletImgArray: string[] = [
      "media/gauntlet/gauntbattle.png",
      "media/gauntlet/gauntwin.png",
      "media/gauntlet/gauntchoose.png"
  ];

  eyeNetImgArray: string[] = [
      "media/eyes/eyes1.png",
      "media/eyes/eyes2.png",
      "media/eyes/eyes3.png",
      "media/eyes/eyes4.png"
  ];

  chequeYourselfDisplayImg = this.chequeYourselfImgArray[0];
  gauntletDisplayImg = this.gauntletImgArray[0];
  eyeNetDisplayImg = this.eyeNetImgArray[0];

  hover(sentClass):void {
      $(`.dimmer.${sentClass}`).dimmer('toggle');
  }

  blur(sentClass):void {
      $(`.dimmer.${sentClass}`).dimmer('toggle');
  }

  changeImage(sentProject, sentDirection): void {
    switch (sentProject) {
        case "chequeYourself":
            if (sentDirection === "next") {
                this.chequeYourselfImgArray.push(this.chequeYourselfImgArray.shift());
            } else {
                this.chequeYourselfImgArray.unshift(this.chequeYourselfImgArray.pop());
            }
            this.chequeYourselfDisplayImg = this.chequeYourselfImgArray[0];
            break;

        case "gauntlet":
            if (sentDirection === "next") {
                this.gauntletImgArray.push(this.gauntletImgArray.shift());
            } else {
                this.gauntletImgArray.unshift(this.gauntletImgArray.pop());
            }
            this.gauntletDisplayImg = this.gauntletImgArray[0];
            break;

        case "eyeNet":
            if (sentDirection === "next") {
                this.eyeNetImgArray.push(this.eyeNetImgArray.shift());
            } else {
                this.eyeNetImgArray.unshift(this.eyeNetImgArray.pop());
            }
            this.eyeNetDisplayImg = this.eyeNetImgArray[0];
            break;     
        default: 
            console.log("Error");
            break;   
    }
  }
}