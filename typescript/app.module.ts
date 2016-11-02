import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
// My Component Imports
import { AppComponent }     from './app.component';
import { HomeDisplayComponent }  from './homedisplay.component';
import { ContactDisplayComponent }  from './contactdisplay.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeDisplayComponent },
      { path: 'contact', component: ContactDisplayComponent },
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HomeDisplayComponent,
    ContactDisplayComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }