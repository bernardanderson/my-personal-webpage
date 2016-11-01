import { Injectable } from '@angular/core';

@Injectable() 
export class NavService {

    navMessage: string = "This is Nav!";

    updateNavMessage(newNavSelection: string): void {
        this.navMessage = newNavSelection;
    }

    getNavMessage(): string {
        return this.navMessage;
    }

}