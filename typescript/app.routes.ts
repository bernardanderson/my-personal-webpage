// My Component Imports
import { HomeDisplayComponent }  from './homedisplay.component';
import { ContactDisplayComponent } from './contactdisplay.component';

export const AppRoutes = [
  { path: '', component: HomeDisplayComponent },
  { path: 'contact', component: ContactDisplayComponent },
]