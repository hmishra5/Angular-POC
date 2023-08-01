import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InsuredDashboardComponent } from './insured-dashboard/insured-dashboard.component';
import { ReviewerDashboardComponent } from './reviewer-dashboard/reviewer-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewerDashboardLinkComponent } from './reviewer-dashboard/reviewer-dashboard-link/reviewer-dashboard-link.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //InsuredDashboardComponent,
    ReviewerDashboardComponent,
    ButtonRendererComponent,
    ReviewerDashboardLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
