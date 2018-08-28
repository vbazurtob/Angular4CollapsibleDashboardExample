import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'index.html',
    component: DashboardComponent,
    
  },
  
  {
    path: '',
    redirectTo: '/index.html',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
