import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharttwoComponent } from './comps/charttwo/charttwo.component';

// export const routes: Routes = [];
export const routes: Routes = [
  { path: '', redirectTo: '/charttwo', pathMatch: 'full' },
  { path: 'charttwo', component: CharttwoComponent },
  { path: 'charttwo/:id', component: CharttwoComponent },
  { path: '**', redirectTo: '/charttwo', pathMatch: 'full' } // Catch-all route
];
