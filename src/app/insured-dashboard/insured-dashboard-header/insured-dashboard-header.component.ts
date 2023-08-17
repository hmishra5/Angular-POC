import { Component } from '@angular/core';
import {InsuredDashboardDataService} from '../../services/insured-dashboard-data.service'


@Component({
  selector: 'app-insured-dashboard-header',
  templateUrl: './insured-dashboard-header.component.html',
  styleUrls: ['./insured-dashboard-header.component.css']
})
export class InsuredDashboardHeaderComponent {


insuredDataAPI:any =[];
insuredDataRaw:any=[];

constructor(private insuredDashboardData:InsuredDashboardDataService){
  this.insuredDashboardData.getInsuredDahboardData().subscribe((res)=>{
      this.insuredDataAPI=res;
      this.insuredDataRaw=res;
  })
}

FilterByPolicyNum:any=[];
FilterByInsuredName:any=[];
FilterByCPN:any=[];
FilterByAuditSeq:any=[];
FilterByEffectiveDate:any=[];
FilterByExpirationDate:any=[];

universalSearch(SearchText:string){
  if(SearchText.length<=2){
    this.insuredDataRaw=this.insuredDataAPI;
  }else{
    this.FilterByPolicyNum=this.insuredDataAPI.filter((item: { policy: { PolicyNumber: string | string[]; }; })=> item.policy.PolicyNumber.includes(SearchText));
    if(this.FilterByPolicyNum.length>0){
      this.insuredDataRaw=this.FilterByPolicyNum;
      //console.log('>policyNum>',this.insuredDataRaw)
    }
    else{
      this.FilterByInsuredName=this.insuredDataAPI.filter((item: { policy: { AccountIndicator: string; }; })=> item.policy.AccountIndicator.toLowerCase().includes(SearchText.toLowerCase()));
      if(this.FilterByInsuredName.length>0){
        this.insuredDataRaw=this.FilterByInsuredName;
      }
      else{
        this.FilterByAuditSeq=this.insuredDataAPI.filter((item: { AuditSeqNo: string | string[]; })=> item.AuditSeqNo.includes(SearchText));
          if(this.FilterByAuditSeq.length>0){
            this.insuredDataRaw=this.FilterByAuditSeq;
          }
        else{
          this.FilterByCPN=this.insuredDataAPI.filter((item: { policy: { CorporatePolicy: string; }; })=> item.policy.CorporatePolicy.toLowerCase().includes(SearchText.toLowerCase()));
          if(this.FilterByCPN.length>0){
            this.insuredDataRaw=this.FilterByCPN;
          }
          else{
            this.FilterByExpirationDate=this.insuredDataAPI.filter((item: { policy: { ExpirationDate: string | string[]; }; })=> item.policy.ExpirationDate.includes(SearchText));
            if(this.FilterByExpirationDate.length>0){
              this.insuredDataRaw=this.FilterByExpirationDate;
            }
            else{
              this.FilterByEffectiveDate=this.insuredDataAPI.filter((item: { policy: { EffectiveDate: string | string[]; }; })=> item.policy.EffectiveDate.includes(SearchText));
              if(this.FilterByEffectiveDate.length>0){
                 this.insuredDataRaw=this.FilterByEffectiveDate;
              }
              else{
                this.insuredDataRaw=[];
              }

            }
          }
        }

      }
    }
  }

  console.log('filter>>>',this.insuredDataRaw);
}




}
