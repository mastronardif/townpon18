import { Routes, RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// Import your standalone components
import { AppComponent } from './app.component';
import { CharttwoComponent } from './comps/charttwo/charttwo.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'charttwo', component: CharttwoComponent }
];

const routerProviders = provideRouter(routes);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule),
    routerProviders
  ]
});
