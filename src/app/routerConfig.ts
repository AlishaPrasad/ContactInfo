import { Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
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