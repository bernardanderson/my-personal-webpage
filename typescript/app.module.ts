import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// My Component Imports
import { AppComponent }     from './app.component';
import { MainDisplayComponent }  from './maindisplay.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MainDisplayComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }