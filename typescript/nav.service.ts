import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


export interface NavBar {
  navItem: string;
}

@Injectable() 
class NavService {

    navMessage: NavBar = { navItem: "Hello Nav Bar" };

    change(sentNewString: string) {
        this.navMessage.navItem = sentNewString;
    }
}