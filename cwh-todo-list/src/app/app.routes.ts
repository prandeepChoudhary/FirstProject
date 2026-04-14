import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { AboutComponent } from './MyComponent/about/about.component';

export const routes: Routes = [
    {path: '', component: TodosComponent},
//   { path: '', redirectTo: 'todos', pathMatch: 'full' },
//   { path: 'todos', component: TodosComponent },
  // {path: 'about', loadComponent: () => import('./MyComponent/about/about.component').then(m => m.AboutComponent)},
  { path: 'about', component: AboutComponent },
];
