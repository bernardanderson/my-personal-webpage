import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
// My Component Imports
import { AppComponent }     from './app.component';
import { HomeViewComponent }  from './homeview.component';
import { ProjectViewComponent }  from './projectview.component';
import { BlogViewComponent }  from './blogview.component';
import { ContactViewComponent }  from './contactview.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeViewComponent },
      { path: 'projects', component: ProjectViewComponent },
      { path: 'blog', component: BlogViewComponent },
      { path: 'contact', component: ContactViewComponent },
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HomeViewComponent,
    ProjectViewComponent,
    BlogViewComponent,
    ContactViewComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }