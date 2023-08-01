// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  template: `
    <div *ngIf="this.params.data.FileType==='Initial'; else elseBlock">
      <button type="button" class="btn__insuredDashboard" (click)="openModal()">{{label}}</button>
    </div>
    <ng-template #elseBlock>
      <a routerLink='/reviewer-dashboard/{{this.params.data._id}}' class="btn__insuredDashboard" style="text-decoration:none" >{{label}}</a>
    </ng-template>

    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {
  params:any;
  label: any;
  fileType:any;

  agInit(params:any): void {
    this.params = params;
    this.fileType = this.params.data.FileType;
    if(this.fileType==='Initial'){
      this.label="View Contact Details";
    }
    else{
      this.label="Proceed to Audit";
    }
  }

  refresh(params?: any): boolean {
    return true;
  }

  callFunctionBasedOnFileType() {
    console.log("Test  >>>>>> "+this.fileType);
    if(this.fileType==='Initial'){
      this.initialButtonClick();
    }else{
      this.detailButtonClick();
    }
  }

  initialButtonClick(){
    alert("Initial button clicked..."+this.params.data.PolicyNo)
  }

  detailButtonClick(){
    alert("Detail button clicked....."+this.params.data.PolicyNo)
  }

  // modal
  openModal() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    }
  }

}
