import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import * as moment from 'moment';
import { ReviewerDashboardLinkComponent } from './reviewer-dashboard-link/reviewer-dashboard-link.component';

@Component({
  selector: 'app-reviewer-dashboard',
  templateUrl: './reviewer-dashboard.component.html',
  styleUrls: ['./reviewer-dashboard.component.css']
})
export class ReviewerDashboardComponent implements OnChanges {
  @Input() reviewerDataAPI:any=[];
  reviewerDataRaw:any=[];

  frameworkComponents: any;
  public paginationPageSize:number=10;
  public pagination:boolean=true;

  constructor() {
    this.frameworkComponents = {
      buttonRenderer: ReviewerDashboardLinkComponent,
    }
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // reviewerData is for manipulated data
    this.reviewerData=[];
    this.reviewerDataRaw=changes['reviewerDataAPI'].currentValue;
    if(changes['reviewerDataAPI'].firstChange){
      return;
    }

    this.ParseData();
  }

  public columnDefs: ColDef[] = [
    {
      field: 'Policy Number',
      cellRenderer: ReviewerDashboardLinkComponent,
      maxWidth: 170
    },
    {
      field: 'Insured Name',
    },
    {
      field: 'Policy Type',
    },
    {
      field: 'Sequence/ Audit #',
      minWidth: 100
    },
    {
      field: 'Audit Kind',
    },
    {
      field: 'Rush Indicator',
    },
    {
      field: 'CPN #'
    },
    {
      field: 'Non-pro Indicator'
    },
    {
      field: 'Effective Date'
    },
    {
      field: 'Expiration Date'
    },
    {
      field: 'Audit Status'
    },
    {
      field: 'Estimated Premium'
    },
    {
      field: 'Division Code'
    },
    {
      field: 'Mgmt Code.'
    },
    {
      field: 'Producer Name & Number'
    },
    {
      field: 'Audit Location State'
    },
    {
      field: 'Return Date'
    },
    {
      field: 'Reviewer Name'
    },
    {
      field: 'Reviewer Assign Date'
    },
    {
      field: 'Reviewer Status'
    },
    {
      field: 'Complete Date'
    }

  ];



  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    sortingOrder: ['asc','desc']
  };




  reviewerData:any=[];

  ngOnInit() {

    this.ParseData();
  }

  ParseData(){


    for(let x of this.reviewerDataRaw){
      //empty object initialized
      let obj:any={};

      // set object values
      obj['_id']=x._id;
      obj['Policy Number']=x.policyNumber;
      obj['policyNumber']=x.policyNumber;
      obj['Insured Name']=x.policyInsuredName;
      obj['Sequence/ Audit #']=x.auditSequence;
      obj['Effective Date']=x.policyEffectiveDate;
      obj['Expiration Date']=x.policyExpirationDate;
      obj['Rush Indicator']=x.RushFlagIndicator;
      obj['CPN #']=x.corporatePolicy;
      obj['Non-pro Indicator']=x.policyNonProInd;
      obj['Audit Status']=x.policyAuditStatus;
      obj['Reviewer Status']=x.policyAuditStatus;
      obj['Estimated Premium']="$"+x.policyAnnualPremium;
      obj['Division Code']=x.division;
      obj['Mgmt Code.']=x.managementCode;
      obj['Return Date']=moment(x.created).format('MM/DD/YYYY');
      obj['Reviewer Name']=x.policyAuditReviewedBy;
      obj['Reviewer Assign Date']=moment(x.policyAuditReviewedAt).format('MM/DD/YYYY');
      obj['Complete Date']=x.reviewCompletedDate;
      obj['Producer Name & Number']=x.agencyInfo.AgentName+" "+x.agencyCode;
      obj['Audit Location State']=x.agencyInfo.State;


      if(x.AuditKind=='E'){
        obj['Audit Kind']="Expiration";
      }
      else if(x.AuditKind=='C'){
        obj['Audit Kind']="Cancellation";
       }
      else if(x.AuditKind=='Z'){
        obj['Audit Kind']="Reinstatement";
      }
      else if(x.AuditKind=='R'){
        obj['Audit Kind']="ReAudit";
       }
      else{
        obj['Audit Kind']="Not Valid AuditKind";
      }



      if(x.policyType==1){
        obj['Policy Type']="Workers Compensation";
      }
      else if(x.policyType==2){
        obj['Policy Type']="General Liability";
      }
      else{
        obj['Policy Type']="PLD";
      }


      this.reviewerData.push(obj);
    }
  }
}
