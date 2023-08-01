import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-reviewer-dashboard-link',
  template: `
    <a routerLink='/insured-dashboard/{{this.params.data._id}}'>
      {{params.data.policyNumber}}
    </a>
  `,
  styles: ['a { color:"#6E27C5";text-decoration: none; }','a:hover { color:"#6E27C5";text-decoration: underline; }' ]
})
export class ReviewerDashboardLinkComponent implements ICellRendererAngularComp {

  params:any;
  label: any;
  fileType:any;

  agInit(params:any): void {
    this.params = params;
  }

  refresh(params?: any): boolean {
    return true;
  }
}
