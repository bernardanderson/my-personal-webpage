import {Component} from '@angular/core';

@Component({
    selector: 'footer-bar', 
    templateUrl: 'partials/footer.html',
    styleUrls: ['css/footer.css']
})

export class FooterComponent {

    copyrightInfo: string = "©2016 Bernard Anderson";

}