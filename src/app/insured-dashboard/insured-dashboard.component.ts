import { Component, NgModule, OnInit, ViewChild,Input, OnChanges, SimpleChanges  } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from '../button-renderer/button-renderer.component';



@Component({
  selector: 'app-insured-dashboard',
  templateUrl: './insured-dashboard.component.html',
  styleUrls: ['./insured-dashboard.component.css'],
})
export class InsuredDashboardComponent implements OnChanges{
  @Input() insuredDataAPI:any=[];

  frameworkComponents: any;
  public paginationPageSize:number=10;
  public pagination:boolean=true;


  constructor() {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // reviewerData is for manipulated data
    this.insuredData=[];
    this.insuredDataAPI=changes['insuredDataAPI'].currentValue;
    if(changes['insuredDataAPI'].firstChange){
      return;
    }

    this.ParseData();
  }

  public columnDefs: ColDef[] = [
    {
      field: 'Insured Name',
    },
    {
      field: 'Policy Type'
    },
    {
      field: 'Policy Number',
    },
    {
      field: 'Policy Effective Date'
    },
    {
      field: 'Policy Expiration Date'
    },
    {
      field: 'Companion Policy'
    },
    {
      field: 'Policy Status'
    },
    {
      field: 'CPN Number'
    },
    {
      field: '',
      cellRenderer: ButtonRendererComponent,
      sortable:false,
      filter:false
    },
  ];



  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    sortingOrder: ['asc','desc']
  };

  openContactUsModal(){
    const modelDiv = document.getElementById('ContactUsModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    }
  }

  CloseContactUsModal() {
    const modelDiv = document.getElementById('ContactUsModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    }
  }




  CloseModal() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    }
  }





  insuredData:any=[];

  ngOnInit() {
    this.ParseData();
  }

  ParseData(){
    for(let x of this.insuredDataAPI){

      //empty object initialized
      let obj:any={};

      // set object values
      obj['_id']=x._id;
      obj['Insured Name']=x.policy.AccountIndicator;
      obj['Policy Number']=x.PolicyNo;
      obj['Policy Effective Date']=x.policy.EffectiveDate;
      obj['Policy Expiration Date']=x.policy.ExpirationDate;
      obj['Companion Policy']=x.policy.CompanionPolicy;
      obj['CPN Number']=x.CorporatePolicy;
      obj['FileType']=x.FileType;
      obj['policy']=x.policy;

      if(x.policy.PolicyType==1){
        obj['Policy Type']="Workers Compensation";
      }
      else if(x.policy.PolicyType==2){
        obj['Policy Type']="General Liability";
      }
      else{
        obj['Policy Type']="PLD";
      }



      if(x.policy.AuditKind=='E'){
        obj['Policy Status']="Expiration";
      }
      else if(x.policy.AuditKind=='C'){
        obj['Policy Status']="Cancellation";
       }
      else if(x.policy.AuditKind=='Z'){
        obj['Policy Status']="Reinstatement";
      }
      else if(x.policy.AuditKind=='R'){
        obj['Policy Status']="ReAudit";
       }
      else{
        obj['Policy Status']="Not Valid AuditKind";
      }

      // push obj to insuredData which is input of AgGrid
      this.insuredData.push(obj);
    }
  }
}
