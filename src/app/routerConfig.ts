import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';

export const appRoutes: Routes = [
  {
    path: '',    
    component: IndexComponent
  },
  {
    path: 'create',
    component: EditComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'contacts',
    component: IndexComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: IndexComponent
  }
];