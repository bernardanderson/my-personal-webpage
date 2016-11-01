import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable() 
export class NavService {

    navMessage: string;

    private navChangeSource: Subject<string> = new Subject<string>();

    navChange$ = this.navChangeSource.asObservable();

    announceNavChange(sentNavString: string) {
        this.navChangeSource.next(sentNavString);
    }

}