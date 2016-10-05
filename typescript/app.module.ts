import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// My Component Imports
import { AppComponent }   from './app.component';
import { NavBarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';  

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavBarComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }