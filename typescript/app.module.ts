import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

// My Component Imports
import { AppComponent }     from './app.component';
import { HomeViewComponent }  from './homeview.component';
import { ProjectViewComponent }  from './projectview.component';
import { ContactViewComponent }  from './contactview.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeViewComponent, pathMatch: 'full' },
      { path: 'projects', component: ProjectViewComponent },
      { path: '**', redirectTo: '' },
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HomeViewComponent,
    ProjectViewComponent,
    ContactViewComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }