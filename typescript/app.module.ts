import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
// My Component Imports
import { AppComponent }     from './app.component';
import { AppRoutes }     from './app.routes';
import { HomeDisplayComponent }  from './homedisplay.component';
import { ContactDisplayComponent }  from './contactdisplay.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(AppRoutes) 
  ],
  declarations: [ 
    AppComponent, 
    HomeDisplayComponent,
    ContactDisplayComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }