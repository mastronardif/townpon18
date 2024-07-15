import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TowndetailComponent }  from '../towndetail/towndetail.component';
// import { StoredetailComponent}  from '../storedetail/storedetail.component';
// import { StoregridComponent } from '../storegrid/storegrid.component';
// import { StoredashboardComponent } from '../storedashboard/storedashboard.component';
import { CharttwoComponent }    from '../comps/charttwo/charttwo.component';
import { AppComponent } from '../app.component';

const townRoutes: Routes = [
  //{ path: '', redirectTo: '/detail', pathMatch: 'full' },
  //{ path: '', redirectTo: '/', pathMatch: 'full' },

  { path: '', redirectTo: '/charttwo', pathMatch: 'full' },
  { path: 'fuck', component: AppComponent },

  { path: 'charttwo', component: CharttwoComponent },
  { path: 'charttwo/:id', component: CharttwoComponent },

  // { path: 'detail', component: TowndetailComponent },
  // { path: 'detail/:id', component: TowndetailComponent },
  // { path: 'store/:id', component: StoredetailComponent },
  // { path: 'storeAsaGrid/:id', component: StoregridComponent },
  // { path: 'storeAsaDashboard/:id', component: StoredashboardComponent },
        //{ path: '**', component: CharttwoComponent }
  { path: '**', redirectTo: '/charttwo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(townRoutes) ],
  exports: [RouterModule]
})
export class TownroutesRoutingModule { }
