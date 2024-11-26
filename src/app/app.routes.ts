import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full', // Redirect to dashboard for root
  },
  {
    path: 'dashboard',
    component: DashboardComponent, // Dashboard route
  },
  {
    path: '**',
    component: NotFoundComponent, // Wildcard route for 404
  },
];
