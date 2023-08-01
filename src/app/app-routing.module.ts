import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuredDashboardComponent } from './insured-dashboard/insured-dashboard.component'
import { ReviewerDashboardComponent } from './reviewer-dashboard/reviewer-dashboard.component'

const routes: Routes = [
  { path: 'insured-dashboard',  component: InsuredDashboardComponent },
  { path: 'insured-dashboard/:id', component:  InsuredDashboardComponent},
  { path: 'reviewer-dashboard', component:  ReviewerDashboardComponent},
  { path: 'reviewer-dashboard/:id', component:  ReviewerDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
