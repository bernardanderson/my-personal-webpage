import { Component } from '@angular/core';

@Component({
    selector: 'project-view', 
    templateUrl: 'partials/project-view.html',
    styleUrls: ['css/project-view.css'],
})

export class ProjectViewComponent {
  
    flipper() {
        console.log("You Flipped!");
    }

}