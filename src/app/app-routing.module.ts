import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuredDashboardHeaderComponent } from './insured-dashboard/insured-dashboard-header/insured-dashboard-header.component'
import {ReviewerDashboardHeaderComponent  } from './reviewer-dashboard/reviewer-dashboard-header/reviewer-dashboard-header.component'

const routes: Routes = [
  { path: 'insured-dashboard',  component: InsuredDashboardHeaderComponent },
  { path: 'insured-dashboard/:id', component:  InsuredDashboardHeaderComponent},
  { path: 'reviewer-dashboard', component:  ReviewerDashboardHeaderComponent},
  { path: 'reviewer-dashboard/:id', component:  ReviewerDashboardHeaderComponent},
  { path: 'qc-csr-dashboard', component:  ReviewerDashboardHeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
