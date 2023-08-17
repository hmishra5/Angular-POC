import { Component } from '@angular/core';
import {ReviewerDashboardDataService} from '../../services/reviewer-dashboard-data.service'

@Component({
  selector: 'app-reviewer-dashboard-header',
  templateUrl: './reviewer-dashboard-header.component.html',
  styleUrls: ['./reviewer-dashboard-header.component.css']
})
export class ReviewerDashboardHeaderComponent {

  reviewerDataApi:any = [];
  reviewerData:any=[];
  constructor(private reviewerDashboardData:ReviewerDashboardDataService){
    this.reviewerDashboardData.getReviewerDahboardData().subscribe((res)=>{
        this.reviewerDataApi=res;
        this.reviewerData=res;
    })
  }


  FilterByPolicyNum:any=[];
  FilterByInsuredName:any=[];
  FilterByCPN:any=[];
  FilterByAuditSeq:any=[];
  FilterByAuditStatus:any=[];

  universalSearch(SearchText:string){
    if(SearchText.length===0){
      this.reviewerData=this.reviewerDataApi;
    }else{
      this.FilterByPolicyNum=this.reviewerDataApi.filter((item: { policyNumber: string | string[]; })=> item.policyNumber.includes(SearchText));
      if(this.FilterByPolicyNum.length>0){
        this.reviewerData=this.FilterByPolicyNum;
      }
      else{
        this.FilterByInsuredName=this.reviewerDataApi.filter((item: { policyInsuredName: string; })=> item.policyInsuredName.toLowerCase().includes(SearchText.toLowerCase()));
        if(this.FilterByInsuredName.length>0){
          this.reviewerData=this.FilterByInsuredName;
        }
        else{
          this.FilterByAuditSeq=this.reviewerDataApi.filter((item: { auditSequence: string | string[]; })=> item.auditSequence.includes(SearchText));
            if(this.FilterByAuditSeq.length>0){
              this.reviewerData=this.FilterByAuditSeq;
            }
          else{
            this.FilterByCPN=this.reviewerDataApi.filter((item: { corporatePolicy: string; })=> item.corporatePolicy.toLowerCase().includes(SearchText.toLowerCase()));
            if(this.FilterByCPN.length>0){
              this.reviewerData=this.FilterByCPN;
            }
            else{
              this.FilterByAuditStatus=this.reviewerDataApi.filter((item: { policyAuditStatus: string; })=> item.policyAuditStatus.toLowerCase().includes(SearchText.toLowerCase()));
              if(this.FilterByAuditStatus.length>0){
                this.reviewerData=this.FilterByAuditStatus;
              }
              else{
                this.reviewerData=[];
              }
            }

          }

        }
      }
    }

    console.log('filter>>>',this.reviewerDataApi);
  }

}
