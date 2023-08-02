import { Component, OnInit, ViewChild } from '@angular/core';
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
  standalone: true,
  imports: [AgGridModule],
})
export class InsuredDashboardComponent {
  frameworkComponents: any;
  public paginationPageSize:number=10;
  public pagination:boolean=true;

  constructor() {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
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


  insuredDataRaw:any[] = [
    {
      "_id": "64257d9e3b06957d431b6587",
      "created": "2023-03-30T12:16:30.370Z",
      "modified": "2023-07-04T07:51:48.103Z",
      "userId": "raj.palireddy+insured@chubb.com",
      "policy": {
          "ExpirationDate": "03/26/2023",
          "EffectiveDate": "03/26/2022",
          "ExpirationDateForEmailTrigger": "2023-03-25",
          "AccountIndicator": "ABC CORPORATION",
          "PolicyNumber": "071635772",
          "PolicyType": "1",
          "CorporatePolicy": "C68501581",
          "InsuredNo": "01063150",
          "AuditorID": "",
          "AuditKind": "E",
          "SICcode": "2843",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "Z01315",
          "ClientID": "",
          "HotStateIndicator": "No ",
          "UnderwriterName": "Ann  Pillas",
          "UnderwriterPhone": "6235802037",
          "AnnualPrem": "400",
          "CompanionPolicy": "Yes",
          "ReceivedDate": "2023-03-30",
          "ManagementCode": "BO"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "DOLLIFF INC",
          "CompanyName": "",
          "Address1": "6465WAYZATA BLVD",
          "Address2": "SUITE 850",
          "City": "SAINT LOUIS PARK",
          "State": "MN",
          "Zip": "55426",
          "Phone": "9525937444",
          "Email": "Brad.Russell@chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "RANTEC CORPORATION",
              "Address1": "P.O. BOX 729",
              "Address2": "",
              "City": "RANCHESTER",
              "State": "WY",
              "Zip": "82839",
              "Phone": "1111111111"
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "PolyPro International Inc ",
              "Address1": "P.O. BOX 729",
              "Address2": "",
              "City": "RANCHESTER",
              "State": "WY",
              "Zip": "82839",
              "Phone": "",
              "LegalDescription": "Other",
              "FEIN": "",
              "RatedOrNonRated": ""
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "RANTEC CORPORATION",
                      "FEIN": "",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "03/26/2022",
                      "ExpirationDate": "03/26/2023"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "RANTEC CORPORATION",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "FL",
                      "Zip": "",
                      "Phone": "1111111111"
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "3",
                      "ContactName": "",
                      "CompanyName": "RANTEC CORPORATION",
                      "Address1": "4965 GULF OF MEXICO DRIVE #204",
                      "Address2": "",
                      "City": "Longboat Key",
                      "State": "FL",
                      "Zip": "34228",
                      "Phone": "1111111111"
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "160",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68501581",
                      "PolicyNumber": "071635772",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS OR COLLECTORS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "FL0001",
                      "EntityName": "RANTEC CORPORATION",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "FL",
                      "StateLocationOfEntity": "FL",
                      "FromDate": "03/26/2022",
                      "ToDate": "03/26/2023",
                      "ExposureAmount": "50000",
                      "StateRate": "0.320",
                      "EstimatedPremium": "160.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "21"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68501581",
      "Notes": {
          "Note": [
              {
                  "PolicyNumber": "071635772",
                  "Subject": "reopen /est billing not completed ",
                  "EntryDate": "07/26/2021",
                  "LastUpdate": "07/26/2021",
                  "NoteType": "General",
                  "PurgeDate": "07/26/2024",
                  "Author": "Shelly Brown",
                  "PolicyExpiration": "03/26/2021",
                  "Notes": "sent in by Barb "
              }
          ]
      },
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Jen Wilhelm",
                      "ContactAddress": "7300 Metro Boulevard #570",
                      "ContactCity": "Minneapolis",
                      "ContactState": "MN",
                      "ContactZip": "55435",
                      "ContactPhone": "9528357717",
                      "Extension": "",
                      "ContactFax": "9528353811",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Office Manager"
                  }
              ]
          }
      },
      "AuditSeqNo": "1030849",
      "PolicyNo": "071635772",
      "PolicyTraceID": "C6850158103262022",
      "RushFlagInd": "",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Initial",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "036063847 / D96003389",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "03/26/2022",
                  "PolicyTermExpDt": "03/26/2023",
                  "AuditablePremium": "$7,283"
              }
          ]
      },
      "FormsandEndorsements": {
          "FormsandEndorsement": [
              {
                  "Number": "WC000414A",
                  "EffectiveDate": "03/26/2022",
                  "Title": "Notification of Change in Ownership Endorsement",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC090407",
                  "EffectiveDate": "03/26/2022",
                  "Title": "Florida Non-Cooperation With Premium Audit Endorsement",
                  "Values": "",
                  "Names": ""
              }
          ]
      },
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "642590260751e36822ec0532",
      "created": "2023-03-30T13:35:34.243Z",
      "modified": "2023-07-04T07:51:43.587Z",
      "userId": "sushil.diwakar+auditor@chubb.com",
      "policy": {
          "ExpirationDate": "03/26/2024",
          "EffectiveDate": "03/26/2023",
          "ExpirationDateForEmailTrigger": "2023-03-25",
          "AccountIndicator": "RANTEC CORPORATION",
          "PolicyNumber": "071635772",
          "PolicyType": "2",
          "CorporatePolicy": "C68501581",
          "InsuredNo": "01063150",
          "AuditorID": "",
          "AuditKind": "E",
          "SICcode": "2843",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "Z01315",
          "ClientID": "",
          "HotStateIndicator": "No ",
          "UnderwriterName": "Ann  Pilla",
          "UnderwriterPhone": "6235802037",
          "AnnualPrem": "400",
          "CompanionPolicy": "Yes",
          "ReceivedDate": "2023-03-30",
          "ManagementCode": "BO"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "DOLLIFF INC",
          "CompanyName": "",
          "Address1": "6465WAYZATA BLVD",
          "Address2": "SUITE 850",
          "City": "SAINT LOUIS PARK",
          "State": "MN",
          "Zip": "55426",
          "Phone": "9525937444",
          "Email": "Brad.Russell@chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "RANTEC CORPORATION",
              "Address1": "P.O. BOX 729",
              "Address2": "",
              "City": "RANCHESTER",
              "State": "WY",
              "Zip": "82839",
              "Phone": "1111111111"
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "PolyPro International Inc ",
              "Address1": "P.O. BOX 729",
              "Address2": "",
              "City": "RANCHESTER",
              "State": "WY",
              "Zip": "82839",
              "Phone": "",
              "LegalDescription": "Other",
              "FEIN": "",
              "RatedOrNonRated": ""
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "RANTEC CORPORATION",
                      "FEIN": "",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "03/26/2023",
                      "ExpirationDate": "03/26/2024"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "RANTEC CORPORATION",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "FL",
                      "Zip": "",
                      "Phone": "1111111111"
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "3",
                      "ContactName": "",
                      "CompanyName": "RANTEC CORPORATION",
                      "Address1": "4965 GULF OF MEXICO DRIVE #204",
                      "Address2": "",
                      "City": "Longboat Key",
                      "State": "FL",
                      "Zip": "34228",
                      "Phone": "1111111111"
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "160",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68501581",
                      "PolicyNumber": "071635772",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS OR COLLECTORS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "FL0001",
                      "EntityName": "RANTEC CORPORATION",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "FL",
                      "StateLocationOfEntity": "FL",
                      "FromDate": "03/26/2023",
                      "ToDate": "03/26/2024",
                      "ExposureAmount": "50000",
                      "StateRate": "0.320",
                      "EstimatedPremium": "160.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "21"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68501581",
      "Notes": {
          "Note": [
              {
                  "PolicyNumber": "071635772",
                  "Subject": "reopen /est billing not completed ",
                  "EntryDate": "07/26/2021",
                  "LastUpdate": "07/26/2021",
                  "NoteType": "General",
                  "PurgeDate": "07/26/2024",
                  "Author": "Shelly Brown",
                  "PolicyExpiration": "03/26/2021",
                  "Notes": "sent in by Barb "
              }
          ]
      },
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Jen Wilhelm",
                      "ContactAddress": "7300 Metro Boulevard #570",
                      "ContactCity": "Minneapolis",
                      "ContactState": "MN",
                      "ContactZip": "55435",
                      "ContactPhone": "9528357717",
                      "Extension": "",
                      "ContactFax": "9528353811",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Office Manager"
                  }
              ]
          }
      },
      "AuditSeqNo": "1230849",
      "PolicyNo": "071635772",
      "PolicyTraceID": "C6850158103262023",
      "RushFlagInd": "",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Initial",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "036063847 / D96003389",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "03/26/2023",
                  "PolicyTermExpDt": "03/26/2024",
                  "AuditablePremium": "$7,283"
              }
          ]
      },
      "FormsandEndorsements": {
          "FormsandEndorsement": [
              {
                  "Number": "WC000414A",
                  "EffectiveDate": "03/26/2023",
                  "Title": "Notification of Change in Ownership Endorsement",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC090407",
                  "EffectiveDate": "03/26/2023",
                  "Title": "Florida Non-Cooperation With Premium Audit Endorsement",
                  "Values": "",
                  "Names": ""
              }
          ]
      },
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "642590270751e36822ec0545",
      "created": "2023-03-30T13:35:35.216Z",
      "modified": "2023-03-30T17:30:05.861Z",
      "userId": "sushil.diwakar+auditor@chubb.com",
      "policy": {
          "ExpirationDate": "04/08/2024",
          "EffectiveDate": "04/08/2023",
          "ExpirationDateForEmailTrigger": "2024-04-07",
          "AccountIndicator": "UPSTART VENTURES MANAGEMENT LLC",
          "PolicyNumber": "071636546",
          "PolicyType": "1",
          "CorporatePolicy": "C68463233",
          "InsuredNo": "02500569",
          "AuditorID": "",
          "AuditKind": "E",
          "SICcode": "6799",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "IT5838",
          "ClientID": "",
          "HotStateIndicator": "No ",
          "UnderwriterName": "Kimberly  Barnes",
          "UnderwriterPhone": "6235802013",
          "AnnualPrem": "810",
          "CompanionPolicy": "Yes",
          "ReceivedDate": "2023-03-30",
          "ManagementCode": "BO"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "MOODY INSURANCE AGENCY     INC",
          "CompanyName": "",
          "Address1": "8055 EAST TUFTS AVENUE",
          "Address2": "SUITE 1000",
          "City": "DENVER",
          "State": "CO",
          "Zip": "80237",
          "Phone": "8008248002",
          "Email": "Brad.Russell@chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "UPSTART VENTURES MANAGEMENT LLC",
              "Address1": "417 WAKARA WAY, SUITE 3510",
              "Address2": "",
              "City": "SALT LAKE CITY",
              "State": "UT",
              "Zip": "84108",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "UPSTART VENTURES MANAGEMENT LLC",
              "Address1": "417 WAKARA WAY, SUITE 3150",
              "Address2": "",
              "City": "SALT LAKE CITY",
              "State": "UT",
              "Zip": "84108",
              "Phone": "",
              "LegalDescription": "Other",
              "FEIN": "260185426",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "UPSTART VENTURES MANAGEMENT LLC",
                      "FEIN": "26-0185426",
                      "AdditionalName": "",
                      "Entity": "Other",
                      "EffectiveDate": "04/08/2023",
                      "ExpirationDate": "04/08/2024"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "UPSTART LIFE SCIENCES CAPITAL, LP",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "UT",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "UPSTART VENTURES MANAGEMENT LLC",
                      "Address1": "417 WAKARA WAY",
                      "Address2": "",
                      "City": "SALT LAKE CITY",
                      "State": "UT",
                      "Zip": "84108",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "525",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68463233",
                      "PolicyNumber": "071636546",
                      "ClassCode": "8742",
                      "ClassDescription": "MESSENGERS, COLLECTORS, OR SALESPERSONS OUTSIDE.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "UT0001",
                      "EntityName": "UPSTART VENTURES MANAGEMENT LLC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "SALT LAKE CITY",
                      "AuditLocState": "UT",
                      "StateLocationOfEntity": "UT",
                      "FromDate": "04/08/2023",
                      "ToDate": "04/08/2024",
                      "ExposureAmount": "200000",
                      "StateRate": "0.240",
                      "EstimatedPremium": "480.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "417 WAKARA WAY",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "06"
                  },
                  {
                      "CorporatePolicy": "C68463233",
                      "PolicyNumber": "071636546",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "UT0001",
                      "EntityName": "UPSTART VENTURES MANAGEMENT LLC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "SALT LAKE CITY",
                      "AuditLocState": "UT",
                      "StateLocationOfEntity": "UT",
                      "FromDate": "04/08/2023",
                      "ToDate": "04/08/2024",
                      "ExposureAmount": "50000",
                      "StateRate": "0.090",
                      "EstimatedPremium": "45.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "417 WAKARA WAY",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "03"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68463233",
      "Notes": "",
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Stephanie Sorensen",
                      "ContactAddress": "417 WAKARA WAY, SUITE 3150",
                      "ContactCity": "SALT LAKE CITY",
                      "ContactState": "UT",
                      "ContactZip": "84108",
                      "ContactPhone": "8015050632",
                      "Extension": "",
                      "ContactFax": "8015050631",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Controller"
                  }
              ]
          }
      },
      "AuditSeqNo": "1219143",
      "PolicyNo": "071636546",
      "PolicyTraceID": "C6846323304082023",
      "RushFlagInd": "",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Initial",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "035854317 / D95838170",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "04/08/2023",
                  "PolicyTermExpDt": "04/08/2024",
                  "AuditablePremium": ""
              }
          ]
      },
      "FormsandEndorsements": {
          "FormsandEndorsement": [
              {
                  "Number": "WC000414A",
                  "EffectiveDate": "04/08/2023",
                  "Title": "Notification of Change in Ownership Endorsement",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC000424",
                  "EffectiveDate": "04/08/2023",
                  "Title": "Audit NonCompliance Charge Endorsement",
                  "Values": "",
                  "Names": ""
              }
          ]
      },
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "642590280751e36822ec0558",
      "created": "2023-03-30T13:35:36.163Z",
      "modified": "2023-03-30T17:30:05.659Z",
      "userId": "sushil.diwakar+auditor@chubb.com",
      "policy": {
          "ExpirationDate": "04/17/2024",
          "EffectiveDate": "04/17/2023",
          "ExpirationDateForEmailTrigger": "2024-04-16",
          "AccountIndicator": "THE HARBORSTONE GROUP, LLC",
          "PolicyNumber": "071637120",
          "PolicyType": "1",
          "CorporatePolicy": "C68465199",
          "InsuredNo": "01270873",
          "AuditorID": "",
          "AuditKind": "E",
          "SICcode": "6726",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "Z02342",
          "ClientID": "",
          "HotStateIndicator": "No ",
          "UnderwriterName": "Cinthya  Pinedo",
          "UnderwriterPhone": "6235802095",
          "AnnualPrem": "797",
          "CompanionPolicy": "Yes",
          "ReceivedDate": "2023-03-30",
          "ManagementCode": "BO"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "ASSUREDPARTNERS OF MISSOURILLC",
          "CompanyName": "",
          "Address1": "12645 OLIVE BLVD",
          "Address2": "SUITE 300",
          "City": "SAINT LOUIS",
          "State": "MO",
          "Zip": "63141",
          "Phone": "3144231717",
          "Email": "Brad.Russell@chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "THE HARBORSTONE GROUP, LLC",
              "Address1": "P O BOX 3798",
              "Address2": "",
              "City": "QUINCY",
              "State": "IL",
              "Zip": "62305",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "THE HARBORSTONE GROUP, LLC",
              "Address1": "P O BOX 3798",
              "Address2": "",
              "City": "QUINCY",
              "State": "IL",
              "Zip": "62305",
              "Phone": "",
              "LegalDescription": "LTD Liability Co - LLC",
              "FEIN": "371371425",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "THE HARBORSTONE GROUP, LLC",
                      "FEIN": "37-1371425",
                      "AdditionalName": "",
                      "Entity": "LTD Liability Co - LLC",
                      "EffectiveDate": "04/17/2023",
                      "ExpirationDate": "04/17/2024"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "THE HARBORSTONE GROUP, LLC",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "IL",
                      "Zip": "",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "311",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68465199",
                      "PolicyNumber": "071637120",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS OR COLLECTORS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "IL0001",
                      "EntityName": "THE HARBORSTONE GROUP, LLC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "IL",
                      "StateLocationOfEntity": "IL",
                      "FromDate": "04/17/2023",
                      "ToDate": "04/17/2024",
                      "ExposureAmount": "0",
                      "StateRate": "0.470",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "21"
                  },
                  {
                      "CorporatePolicy": "C68465199",
                      "PolicyNumber": "071637120",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "IL0001",
                      "EntityName": "THE HARBORSTONE GROUP, LLC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "IL",
                      "StateLocationOfEntity": "IL",
                      "FromDate": "04/17/2023",
                      "ToDate": "04/17/2024",
                      "ExposureAmount": "155700",
                      "StateRate": "0.200",
                      "EstimatedPremium": "311.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "03"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68465199",
      "Notes": "",
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Angela M Walbring",
                      "ContactAddress": "3325 Maine, Suite B",
                      "ContactCity": "QUINCY",
                      "ContactState": "IL",
                      "ContactZip": "62305",
                      "ContactPhone": "2172289090",
                      "Extension": "",
                      "ContactFax": "2172289092",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Member"
                  }
              ]
          }
      },
      "AuditSeqNo": "1219626",
      "PolicyNo": "071637120",
      "PolicyTraceID": "C6846519904172023",
      "RushFlagInd": "",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "035380525 / D95811607",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "04/17/2023",
                  "PolicyTermExpDt": "04/17/2024",
                  "AuditablePremium": "$17"
              }
          ]
      },
      "FormsandEndorsements": {
          "FormsandEndorsement": [
              {
                  "Number": "WC000414A",
                  "EffectiveDate": "04/17/2023",
                  "Title": "Notification of Change in Ownership Endorsement",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC000424",
                  "EffectiveDate": "04/17/2023",
                  "Title": "Audit NonCompliance Charge Endorsement",
                  "Values": "",
                  "Names": ""
              }
          ]
      },
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "64819c2c7b995fa85c38336a",
      "created": "2023-06-08T09:15:24.121Z",
      "modified": "2023-07-20T10:19:57.717Z",
      "userId": "job-queue-processor",
      "policy": {
          "ExpirationDate": "06/01/2023",
          "EffectiveDate": "07/01/2022",
          "ExpirationDateForEmailTrigger": "2023-06-01",
          "AccountIndicator": "RADIX ORGANIZATION, INC.",
          "PolicyNumber": "071701305",
          "PolicyType": "3",
          "CorporatePolicy": "C68582088",
          "InsuredNo": "00005575",
          "AuditorID": "",
          "AuditKind": "C",
          "SICcode": "6211",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "09723C",
          "ClientID": "",
          "HotStateIndicator": "No",
          "UnderwriterName": "Kevin  Dantzler",
          "UnderwriterPhone": "2156404429",
          "AnnualPrem": "1124",
          "CompanionPolicy": "Yes",
          "ReceivedDate": "2023-06-15",
          "ManagementCode": "BO"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "DAYTON RITZ & OSBORNE",
          "CompanyName": "",
          "Address1": "P.O. BOX 5099",
          "Address2": "",
          "City": "EAST HAMPTON",
          "State": "NY",
          "Zip": "119370000",
          "Phone": "6313240420",
          "Email": "Brad.Russell@Chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "RADIX ORGANIZATION, INC.",
              "Address1": "501 EAST 79TH ST APT. 19A",
              "Address2": "",
              "City": "NEW YORK",
              "State": "NY",
              "Zip": "10075",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "RADIX ORGANIZATION, INC.",
              "Address1": "501 EAST 79TH ST APT 19A",
              "Address2": "",
              "City": "New York",
              "State": "NY",
              "Zip": "10075",
              "Phone": "",
              "LegalDescription": "Corporation",
              "FEIN": "132740340",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "RADIX ORGANIZATION, INC.",
                      "FEIN": "13-2740340",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "07/01/2022",
                      "ExpirationDate": "07/01/2023"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "RADIX ORGANIZATION, INC.",
                      "Address1": "501 EAST 79TH STREET, APT. 19 A",
                      "Address2": "",
                      "City": "NEW YORK",
                      "State": "NY",
                      "Zip": "10075",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "1286",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68582088",
                      "PolicyNumber": "071701305",
                      "ClassCode": "8809",
                      "ClassDescription": "EXECUTIVE OFFICERS NOC NOT FOREMEN, WORKERS OR SAL",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "NY0001",
                      "EntityName": "RADIX ORGANIZATION, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "NEW YORK",
                      "AuditLocState": "NY",
                      "StateLocationOfEntity": "NY",
                      "FromDate": "07/01/2022",
                      "ToDate": "07/01/2023",
                      "ExposureAmount": "250000",
                      "StateRate": "0.220",
                      "EstimatedPremium": "550.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "501 EAST 79TH STREET, APT. 19-A",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "01"
                  },
                  {
                      "CorporatePolicy": "C68582088",
                      "PolicyNumber": "071701305",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "NY0001",
                      "EntityName": "RADIX ORGANIZATION, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "NEW YORK",
                      "AuditLocState": "NY",
                      "StateLocationOfEntity": "NY",
                      "FromDate": "07/01/2022",
                      "ToDate": "07/01/2023",
                      "ExposureAmount": "62123",
                      "StateRate": "0.150",
                      "EstimatedPremium": "93.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "501 EAST 79TH STREET, APT. 19-A",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "05"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68582088",
      "Notes": "",
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Charlotte Dominics",
                      "ContactAddress": "501 EAST 79TH ST APT 19A",
                      "ContactCity": "NEW YORK",
                      "ContactState": "NY",
                      "ContactZip": "10075",
                      "ContactPhone": "9176571874",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Office Manager"
                  },
                  {
                      "ContactName": "Michael Leshansky",
                      "ContactAddress": "551 FIFTH AVENUE - 24TH FLOOR",
                      "ContactCity": "NEW YORK",
                      "ContactState": "NY",
                      "ContactZip": "10176",
                      "ContactPhone": "2126612720",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "himanshu.mishra+insured1@chubb.com",
                      "PrimaryContact": "No",
                      "Designation": "CPA"
                  }
              ]
          }
      },
      "AuditSeqNo": "1053819",
      "PolicyNo": "071701305",
      "PolicyTraceID": "C6858208807012022",
      "RushFlagInd": "false",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "035812406 / D96045517",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "07/01/2022",
                  "PolicyTermExpDt": "07/01/2023",
                  "AuditablePremium": "$300"
              }
          ]
      },
      "FormsandEndorsements": "",
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "64819c2c69d708a3e4de6c72",
      "created": "2023-06-08T09:15:24.782Z",
      "modified": "2023-06-21T16:12:06.654Z",
      "userId": "job-queue-processor",
      "policy": {
          "ExpirationDate": "06/01/2023",
          "EffectiveDate": "07/14/2022",
          "ExpirationDateForEmailTrigger": "2023-06-01",
          "AccountIndicator": "BLUE GRASS SAVINGS BANK",
          "PolicyNumber": "071701639",
          "PolicyType": "1",
          "CorporatePolicy": "C68584711",
          "InsuredNo": "01500660",
          "AuditorID": "",
          "AuditKind": "C",
          "SICcode": "6712",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "05719C",
          "ClientID": "",
          "HotStateIndicator": "No",
          "UnderwriterName": "David  Vanley",
          "UnderwriterPhone": "6233083082",
          "AnnualPrem": "2253",
          "CompanionPolicy": "Yes",
          "ReceivedDate": "2023-06-16",
          "ManagementCode": "BO"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "IOWA BANKERS INSURANCE &",
          "CompanyName": "",
          "Address1": "P O BOX 6210",
          "Address2": "",
          "City": "JOHNSTON",
          "State": "IA",
          "Zip": "501316210",
          "Phone": "5152864300",
          "Email": "Brad.Russell@Chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "BLUE GRASS SAVINGS BANK",
              "Address1": "104 E. MAYNE",
              "Address2": "",
              "City": "BLUE GRASS",
              "State": "IA",
              "Zip": "52726",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "BLUE GRASS SAVINGS BANK",
              "Address1": "104 E. MAYNE",
              "Address2": "",
              "City": "BLUE GRASS",
              "State": "IA",
              "Zip": "52726",
              "Phone": "",
              "LegalDescription": "Corporation",
              "FEIN": "420144560",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "BLUE GRASS SAVINGS BANK",
                      "FEIN": "42-0144560",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "07/14/2022",
                      "ExpirationDate": "07/14/2023"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "BLUE GRASS SAVINGS BANK",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "IA",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "EMF CORP.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "IA",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "3",
                      "ContactName": "",
                      "CompanyName": "BLUE GRASS SAVINGS BANK",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "WA",
                      "Zip": "",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "3846",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68584711",
                      "PolicyNumber": "071701639",
                      "ClassCode": "8855",
                      "ClassDescription": "BANKS AND TRUST COMPANIES   ALL EMPLOYEES, SALESPE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "IA0001",
                      "EntityName": "BLUE GRASS SAVINGS BANK",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "IA",
                      "StateLocationOfEntity": "IA",
                      "FromDate": "07/14/2022",
                      "ToDate": "07/14/2023",
                      "ExposureAmount": "1077168",
                      "StateRate": "0.160",
                      "EstimatedPremium": "1723.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "01"
                  },
                  {
                      "CorporatePolicy": "C68584711",
                      "PolicyNumber": "071701639",
                      "ClassCode": "9139",
                      "ClassDescription": "STOP GAP COVERAGE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "WA0002",
                      "EntityName": "BLUE GRASS SAVINGS BANK",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "WA",
                      "StateLocationOfEntity": "WA",
                      "FromDate": "07/14/2022",
                      "ToDate": "07/14/2023",
                      "ExposureAmount": "200",
                      "StateRate": "0.000",
                      "EstimatedPremium": "200.00",
                      "ExposureBasisCode": "T",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0002-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "01"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68584711",
      "Notes": "",
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Abhishek Saini",
                      "ContactAddress": "104 E. MAYNE",
                      "ContactCity": "BLUE GRASS",
                      "ContactState": "IA",
                      "ContactZip": "52726",
                      "ContactPhone": "5633811732",
                      "Extension": [],
                      "ContactFax": [],
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "VP, HR"
                  },
                  {
                      "ContactName": "Wayne Beck",
                      "ContactAddress": "104 E. MAYNE",
                      "ContactCity": "BLUE GRASS",
                      "ContactState": "IA",
                      "ContactZip": "52726",
                      "ContactPhone": "5633811732",
                      "Extension": "",
                      "ContactFax": "5633812317",
                      "ContactEmail": "himanshu.mishra+insured1@chubb.com",
                      "PrimaryContact": "No",
                      "Designation": "President"
                  }
              ]
          }
      },
      "AuditSeqNo": "1054251",
      "PolicyNo": "071701639",
      "PolicyTraceID": "C6858471107142022",
      "RushFlagInd": "false",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "035757354 / D9611672A",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "07/14/2022",
                  "PolicyTermExpDt": "07/14/2023",
                  "AuditablePremium": "$35"
              }
          ]
      },
      "FormsandEndorsements": "",
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "63f347459e474649413ed2ec",
      "created": "2023-02-20T10:11:17.896Z",
      "modified": "2023-06-20T14:37:58.564Z",
      "userId": "raj.palireddy+insured@chubb.com",
      "policy": {
          "ExpirationDate": "05/01/2023",
          "EffectiveDate": "05/01/2022",
          "ExpirationDateForEmailTrigger": "2023-04-30",
          "AccountIndicator": "SGI, INC.",
          "PolicyNumber": "071704365",
          "PolicyType": "1",
          "CorporatePolicy": "C68602385",
          "InsuredNo": "01050504",
          "AuditorID": "",
          "AuditKind": "E",
          "SICcode": "6411",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "IT8370",
          "ClientID": "",
          "HotStateIndicator": "No ",
          "UnderwriterName": "Louise  Gregory",
          "UnderwriterPhone": "9085725394",
          "AnnualPrem": "4445",
          "CompanionPolicy": "Yes",
          "ReceivedDate": "2023-02-20",
          "ManagementCode": "BO"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "ENERGY INSURANCE AGENCY INC",
          "CompanyName": "",
          "Address1": "7661 BEECHMONT AVE",
          "Address2": "SUITE 220",
          "City": "CINCINNATI",
          "State": "OH",
          "Zip": "452554243",
          "Phone": "8595433004",
          "Email": "Test@chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "SGI, INC.",
              "Address1": "ONE SHEAKLEY WAY",
              "Address2": "",
              "City": "CINCINNATI",
              "State": "OH",
              "Zip": "45246",
              "Phone": "5139478500"
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "SGI, INC.",
              "Address1": "1 SHEAKLEY WAY",
              "Address2": "",
              "City": "CINCINNATI",
              "State": "OH",
              "Zip": "45246",
              "Phone": "",
              "LegalDescription": "Corporation",
              "FEIN": "880353290",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "SGI, INC.",
                      "FEIN": "88-0353290",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "05/01/2022",
                      "ExpirationDate": ""
                  },
                  {
                      "Insuredname": "SHEAKLEY UNICOMP, INC.",
                      "FEIN": "31-0709181",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "05/01/2022",
                      "ExpirationDate": ""
                  },
                  {
                      "Insuredname": "SHEAKLEY UNICOMP, INC.",
                      "FEIN": "31-1476781",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "05/01/2022",
                      "ExpirationDate": ""
                  },
                  {
                      "Insuredname": "SHEAKLEY UNISERVICE",
                      "FEIN": "31-0709181",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "05/01/2022",
                      "ExpirationDate": ""
                  },
                  {
                      "Insuredname": "SHEAKLEY UNISERVICE",
                      "FEIN": "31-1476781",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "05/01/2022",
                      "ExpirationDate": ""
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "SGI, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "AL",
                      "Zip": "",
                      "Phone": "5139478500"
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNICOMP, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "IN",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNISERVICE",
                      "Address1": "625 VICTORY DRIVE",
                      "Address2": "",
                      "City": "SHARPSVILLE",
                      "State": "PA",
                      "Zip": "16150",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "3",
                      "ContactName": "",
                      "CompanyName": "SGI, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "FL",
                      "Zip": "",
                      "Phone": "5139478500"
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "3",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNICOMP, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "KY",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "3",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNICOMP, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "MS",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "4",
                      "ContactName": "",
                      "CompanyName": "SGI, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "IL",
                      "Zip": "",
                      "Phone": "5139478500"
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "4",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNICOMP, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "MA",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "4",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNICOMP, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "OK",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "5",
                      "ContactName": "",
                      "CompanyName": "SGI, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "IN",
                      "Zip": "",
                      "Phone": "5139478500"
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "5",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNICOMP, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "SC",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "5",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNICOMP, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "VA",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "6",
                      "ContactName": "",
                      "CompanyName": "SGI, INC.",
                      "Address1": "625 VICTORY DRIVE",
                      "Address2": "",
                      "City": "SHARPSVILLE",
                      "State": "PA",
                      "Zip": "16150",
                      "Phone": "5139478500"
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "6",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNICOMP, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "TN",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "7",
                      "ContactName": "",
                      "CompanyName": "SGI, INC.",
                      "Address1": "1321 MURFREESBORO RD, #100",
                      "Address2": "",
                      "City": "NASHVILLE",
                      "State": "TN",
                      "Zip": "37217",
                      "Phone": "5139478500"
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "8",
                      "ContactName": "",
                      "CompanyName": "SGI, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "TX",
                      "Zip": "",
                      "Phone": "5139478500"
                  }
              ]
          },
          "EntityAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "1",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNICOMP, INC.",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "IL",
                      "Zip": "",
                      "Phone": "",
                      "FEIN": "311476781",
                      "LegalDescription": "Corporation",
                      "RatedOrNonRated": "",
                      "EffectiveDate": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "1",
                      "ContactName": "",
                      "CompanyName": "SHEAKLEY UNISERVICE",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "MD",
                      "Zip": "",
                      "Phone": "",
                      "FEIN": "310709181",
                      "LegalDescription": "Corporation",
                      "RatedOrNonRated": "",
                      "EffectiveDate": ""
                  }
              ]
          }
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "3142",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "0951",
                      "ClassDescription": "SALESPERSON   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "PA0001",
                      "EntityName": "SHEAKLEY UNISERVICE",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "SHARPSVILLE",
                      "AuditLocState": "PA",
                      "StateLocationOfEntity": "PA",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "0",
                      "StateRate": "0.360",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "625 VICTORY DRIVE",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8742",
                      "ClassDescription": "MESSENGERS, COLLECTORS, OR SALESPERSONS OUTSIDE.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "KY0007",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "KY",
                      "StateLocationOfEntity": "KY",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "45000",
                      "StateRate": "0.370",
                      "EstimatedPremium": "167.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0007-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS OR COLLECTORS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "FL0011",
                      "EntityName": "SGI, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "FL",
                      "StateLocationOfEntity": "FL",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "0",
                      "StateRate": "0.320",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0011-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS OR COLLECTORS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "IL0005",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "IL",
                      "StateLocationOfEntity": "IL",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "65000",
                      "StateRate": "0.470",
                      "EstimatedPremium": "306.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0005-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS OR COLLECTORS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "IL0012",
                      "EntityName": "SGI, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "IL",
                      "StateLocationOfEntity": "IL",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "0",
                      "StateRate": "0.470",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0012-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS OR COLLECTORS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "IN0006",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "IN",
                      "StateLocationOfEntity": "IN",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "0",
                      "StateRate": "0.270",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0006-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS OR COLLECTORS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "IN0013",
                      "EntityName": "SGI, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "IN",
                      "StateLocationOfEntity": "IN",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "520000",
                      "StateRate": "0.270",
                      "EstimatedPremium": "1404.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0013-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS, COLLECTORS OR MESSENGERS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "MA0008",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "MA",
                      "StateLocationOfEntity": "MA",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "84000",
                      "StateRate": "0.100",
                      "EstimatedPremium": "84.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0008-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "MA0008",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "MA",
                      "StateLocationOfEntity": "MA",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "0",
                      "StateRate": "0.060",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0008-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "TX0004",
                      "EntityName": "SGI, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "TX",
                      "StateLocationOfEntity": "TX",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "55000",
                      "StateRate": "0.100",
                      "EstimatedPremium": "55.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0004-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "AL0014",
                      "EntityName": "SGI, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "AL",
                      "StateLocationOfEntity": "AL",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "82000",
                      "StateRate": "0.240",
                      "EstimatedPremium": "197.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0014-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "KY0007",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "KY",
                      "StateLocationOfEntity": "KY",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "175000",
                      "StateRate": "0.180",
                      "EstimatedPremium": "315.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0007-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "MD0015",
                      "EntityName": "SHEAKLEY UNISERVICE",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "MD",
                      "StateLocationOfEntity": "MD",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "31200",
                      "StateRate": "0.090",
                      "EstimatedPremium": "28.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0015-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "MS0018",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "MS",
                      "StateLocationOfEntity": "MS",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "65000",
                      "StateRate": "0.300",
                      "EstimatedPremium": "195.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0018-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "OK0016",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "OK",
                      "StateLocationOfEntity": "OK",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "88400",
                      "StateRate": "0.280",
                      "EstimatedPremium": "248.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0016-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "TN0010",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "TN",
                      "StateLocationOfEntity": "TN",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "0",
                      "StateRate": "0.180",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0010-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "VA0017",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "VA",
                      "StateLocationOfEntity": "VA",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "94900",
                      "StateRate": "0.100",
                      "EstimatedPremium": "95.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0017-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8871",
                      "ClassDescription": "CLERICAL TELECOMMUTER EMPLOYEES.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "IL0005",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "IL",
                      "StateLocationOfEntity": "IL",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "0",
                      "StateRate": "0.090",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0005-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8871",
                      "ClassDescription": "CLERICAL TELECOMMUTER EMPLOYEES.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "IN0006",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "IN",
                      "StateLocationOfEntity": "IN",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "0",
                      "StateRate": "0.090",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0006-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8871",
                      "ClassDescription": "CLERICAL TELECOMMUTER EMPLOYEES.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "SC0009",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "SC",
                      "StateLocationOfEntity": "SC",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "0",
                      "StateRate": "0.110",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0009-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C68602385",
                      "PolicyNumber": "071704365",
                      "ClassCode": "8871",
                      "ClassDescription": "CLERICAL TELECOMMUTER EMPLOYEES.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "TN0010",
                      "EntityName": "SHEAKLEY UNICOMP, INC.",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "TN",
                      "StateLocationOfEntity": "TN",
                      "FromDate": "05/01/2022",
                      "ToDate": "05/01/2023",
                      "ExposureAmount": "60000",
                      "StateRate": "0.080",
                      "EstimatedPremium": "48.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0010-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68602385",
      "Notes": {
          "Note": [
              {
                  "PolicyNumber": "071704365",
                  "Subject": "Void Audit",
                  "EntryDate": "09/25/2020",
                  "LastUpdate": "09/25/2020",
                  "NoteType": "General",
                  "PurgeDate": "09/23/2023",
                  "Author": "Wendy Phan",
                  "PolicyExpiration": "05/01/2020",
                  "Notes": "09/23/2020 WP  Audit voided to amend NCCI mod to .91 at inception and to 1.05 midterm to clear a MA Crit"
              }
          ]
      },
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "MAUREEN SURKAMP",
                      "ContactAddress": "1 SHEAKLEY WAY",
                      "ContactCity": "CINCINNATI",
                      "ContactState": "OH",
                      "ContactZip": "45246",
                      "ContactPhone": "5136181215",
                      "Extension": "",
                      "ContactFax": "5133264706",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Payroll Clerk"
                  },
                  {
                      "ContactName": "Maureen Surkamp",
                      "ContactAddress": "1 SHEAKLEY WAY",
                      "ContactCity": "CINCINNATI",
                      "ContactState": "OH",
                      "ContactZip": "45246",
                      "ContactPhone": "5135641271",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "test@chubb.com",
                      "PrimaryContact": "No",
                      "Designation": "CPA"
                  }
              ]
          }
      },
      "AuditSeqNo": "1057601",
      "PolicyNo": "071704365",
      "PolicyTraceID": "C6860238505012022",
      "RushFlagInd": "",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "035775822 / D96135002",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "05/01/2022",
                  "PolicyTermExpDt": "05/01/2023",
                  "AuditablePremium": "$17,293"
              }
          ]
      },
      "FormsandEndorsements": {
          "FormsandEndorsement": [
              {
                  "Number": "WC000414",
                  "EffectiveDate": "/2/22/05/0",
                  "Title": "Notification of Change in Ownership Endorsement",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC000414A",
                  "EffectiveDate": "/2/22/05/0",
                  "Title": "Notification of Change in Ownership Endorsement",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC000424",
                  "EffectiveDate": "/2/22/05/0",
                  "Title": "Audit NonCompliance Charge Endorsement",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC081003",
                  "EffectiveDate": "/2/22/05/0",
                  "Title": "AUDIT ADJUSTMENT ENDORSEMENT",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC090407",
                  "EffectiveDate": "/2/22/05/0",
                  "Title": "Florida Non-Cooperation With Premium Audit Endorsement",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC370401",
                  "EffectiveDate": "/2/22/05/0",
                  "Title": "Pennsylvania Audit NonCompliance Charge Endorsement",
                  "Values": "",
                  "Names": ""
              }
          ]
      },
      "PremiumDiscountExperienceModificationSchedules": {
          "Schedules": [
              {
                  "State": "ALABAMA",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "FLORIDA",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "ILLINOIS",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "INDIANA",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "KENTUCKY",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "MASSACHUSETTS",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "MARYLAND",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "MISSISSIPPI",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "OKLAHOMA",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "SOUTH CAROLINA",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "TENNESSEE",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "TEXAS",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              },
              {
                  "State": "VIRGINIA",
                  "FactorType": "Experience Modification",
                  "DateRange": "05/01/2022 to 05/01/2023",
                  "Factor": "0.9800"
              }
          ]
      },
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "6482edb0315a62ae7719d26c",
      "created": "2023-06-09T09:15:28.472Z",
      "modified": "2023-06-13T08:53:07.407Z",
      "userId": "job-queue-processor",
      "policy": {
          "ExpirationDate": "06/01/2023",
          "EffectiveDate": "06/01/2022",
          "ExpirationDateForEmailTrigger": "2023-06-01",
          "AccountIndicator": "JUNIOR SAILING ASSOCIATION OF LONG ISLAN",
          "PolicyNumber": "071727395",
          "PolicyType": "1",
          "CorporatePolicy": "C68530040",
          "InsuredNo": "02381343",
          "AuditorID": "",
          "AuditKind": "Z",
          "SICcode": "7997",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "106737",
          "ClientID": "",
          "HotStateIndicator": "No",
          "UnderwriterName": "Jacqueline  Callahan",
          "UnderwriterPhone": "6233083392",
          "AnnualPrem": "587",
          "CompanionPolicy": "Yes",
          "ReceivedDate": "2023-06-09",
          "ManagementCode": "BO"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "GOWRIE GROUP INC",
          "CompanyName": "",
          "Address1": "70ESSEX ROAD",
          "Address2": "",
          "City": "WESTBROOK",
          "State": "CT",
          "Zip": "064980970",
          "Phone": "8002628911",
          "Email": "Brad.Russell@Chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "JUNIOR SAILING ASSOCIATION OF LONG ISLAN D SOUND, INC.",
              "Address1": "1 WOODBINE AVE",
              "Address2": "",
              "City": "LARCHMONT",
              "State": "NY",
              "Zip": "10538",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "JUNIOR SAILING ASSOC OF LONG ISLAND SOUN",
              "Address1": "1 WOODBINE AVE",
              "Address2": "",
              "City": "LARCHMONT",
              "State": "NY",
              "Zip": "10538",
              "Phone": "",
              "LegalDescription": "Corporation",
              "FEIN": "116037791",
              "RatedOrNonRated": ""
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "JUNIOR SAILING ASSOCIATION OF LONG ISLAN",
                      "FEIN": "11-6037791",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "06/11/2022",
                      "ExpirationDate": "06/11/2023"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": "",
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "490",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68530040",
                      "PolicyNumber": "071727395",
                      "ClassCode": "8809",
                      "ClassDescription": "EXECUTIVE OFFICERS NOC NOT FOREMEN, WORKERS OR SAL",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "NY0001",
                      "EntityName": "JUNIOR SAILING ASSOCIATION OF LONG ISLAN",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "LARCHMONT",
                      "AuditLocState": "NY",
                      "StateLocationOfEntity": "NY",
                      "FromDate": "06/11/2022",
                      "ToDate": "06/11/2023",
                      "ExposureAmount": "64000",
                      "StateRate": "0.220",
                      "EstimatedPremium": "141.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "1 WOODBINE AVE",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "01"
                  },
                  {
                      "CorporatePolicy": "C68530040",
                      "PolicyNumber": "071727395",
                      "ClassCode": "9060",
                      "ClassDescription": "CLUB COUNTRY, GOLF, FISHING OR YACHT & CLERICAL",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "NY0001",
                      "EntityName": "JUNIOR SAILING ASSOCIATION OF LONG ISLAN",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "LARCHMONT",
                      "AuditLocState": "NY",
                      "StateLocationOfEntity": "NY",
                      "FromDate": "06/11/2022",
                      "ToDate": "06/11/2023",
                      "ExposureAmount": "6000",
                      "StateRate": "1.730",
                      "EstimatedPremium": "104.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "1 WOODBINE AVE",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "01"
                  },
                  {
                      "CorporatePolicy": "C68530040",
                      "PolicyNumber": "071727395",
                      "ClassCode": "9060V",
                      "ClassDescription": "CLUB COUNTRY, GOLF, FISHING OR YACHT & CLERICAL",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "NY0001",
                      "EntityName": "JUNIOR SAILING ASSOCIATION OF LONG ISLAN",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "LARCHMONT",
                      "AuditLocState": "NY",
                      "StateLocationOfEntity": "NY",
                      "FromDate": "06/11/2022",
                      "ToDate": "06/11/2023",
                      "ExposureAmount": "0",
                      "StateRate": "1.730",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "1 WOODBINE AVE",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "01"
                  }
              ]
          }
      },
      "Endorsements": {
          "Endorsement": [
              {
                  "PolicyNumber": "071727395",
                  "EndorsementCode": "WC000311A",
                  "EndorsementDescription": "Voluntary Compensation and EL Coverage",
                  "Values": {
                      "Value": [
                          {
                              "PolicyNumber": "071727395",
                              "EndorsementCode": "WC000311A",
                              "Value": "EMPLOYEE"
                          },
                          {
                              "PolicyNumber": "071727395",
                              "EndorsementCode": "WC000311A",
                              "Value": "VOLUNTEERS"
                          },
                          {
                              "PolicyNumber": "071727395",
                              "EndorsementCode": "WC000311A",
                              "Value": "STATE OF EMPLOYMENT"
                          },
                          {
                              "PolicyNumber": "071727395",
                              "EndorsementCode": "WC000311A",
                              "Value": "NY"
                          },
                          {
                              "PolicyNumber": "071727395",
                              "EndorsementCode": "WC000311A",
                              "Value": "DESIGNATED WORKERS COMP LAW"
                          },
                          {
                              "PolicyNumber": "071727395",
                              "EndorsementCode": "WC000311A",
                              "Value": "NY"
                          }
                      ]
                  }
              }
          ]
      },
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68530040",
      "Notes": {
          "Note": [
              {
                  "PolicyNumber": "071727395",
                  "Subject": "Dispute assigned to Berry",
                  "EntryDate": "01/27/2023",
                  "LastUpdate": "01/27/2023",
                  "NoteType": "General",
                  "PurgeDate": "01/27/2026",
                  "Author": "Janine Ciccone",
                  "PolicyExpiration": "06/11/2022",
                  "Notes": "1/27 JC- Dispute assigned to AB"
              }
          ]
      },
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "BOB WHITTREDGE",
                      "ContactAddress": "1 WOODBINE AVE",
                      "ContactCity": "LARCHMONT",
                      "ContactState": "NY",
                      "ContactZip": "10538",
                      "ContactPhone": "5704419373",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "EXECUTIVE DIRECTOR"
                  },
                  {
                      "ContactName": "Ed Wassmer",
                      "ContactAddress": "1 WOODBINE AVE",
                      "ContactCity": "LARCHMONT",
                      "ContactState": "NY",
                      "ContactZip": "10538",
                      "ContactPhone": "5166271234",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "himanshu.mishra+insured1@chubb.com",
                      "PrimaryContact": "No",
                      "Designation": "President"
                  }
              ]
          }
      },
      "AuditSeqNo": "1133583",
      "PolicyNo": "071727395",
      "PolicyTraceID": "C6853004006112022",
      "RushFlagInd": "false",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "035877110 / D96013826",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "06/11/2022",
                  "PolicyTermExpDt": "06/11/2023",
                  "AuditablePremium": "$10"
              }
          ]
      },
      "FormsandEndorsements": {
          "FormsandEndorsement": [
              {
                  "Number": "WC000311A",
                  "EffectiveDate": "06/01/2022",
                  "Title": "Voluntary Compensation and EL Coverage",
                  "Values": "EMPLOYEE",
                  "Names": "EMPLOYEE"
              },
              {
                  "Number": "WC000311A",
                  "EffectiveDate": "06/01/2022",
                  "Title": "Voluntary Compensation and EL Coverage",
                  "Values": "",
                  "Names": "VOLUNTEERS"
              },
              {
                  "Number": "WC000311A",
                  "EffectiveDate": "06/01/2022",
                  "Title": "Voluntary Compensation and EL Coverage",
                  "Values": "STATE OF EMPLOYMENT",
                  "Names": "STATE OF EMPLOYMENT"
              },
              {
                  "Number": "WC000311A",
                  "EffectiveDate": "06/01/2022",
                  "Title": "Voluntary Compensation and EL Coverage",
                  "Values": "",
                  "Names": "NY"
              },
              {
                  "Number": "WC000311A",
                  "EffectiveDate": "06/01/2022",
                  "Title": "Voluntary Compensation and EL Coverage",
                  "Values": "DESIGNATED WORKERS COMP LAW",
                  "Names": "DESIGNATED WORKERS COMP LAW"
              },
              {
                  "Number": "WC000311A",
                  "EffectiveDate": "06/01/2022",
                  "Title": "Voluntary Compensation and EL Coverage",
                  "Values": "",
                  "Names": "NY"
              }
          ]
      },
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "63f4c4002a0ba67831a81713",
      "created": "2023-02-21T13:15:44.401Z",
      "modified": "2023-06-05T07:24:37.410Z",
      "userId": "job-queue-processor",
      "policy": {
          "ExpirationDate": "04/08/2023",
          "EffectiveDate": "04/08/2022",
          "ExpirationDateForEmailTrigger": "2023-04-08",
          "AccountIndicator": "NORWEGIAN QUEEN MANAGEMENT COMPANY, LLC ",
          "PolicyNumber": "071728245",
          "PolicyType": "1",
          "CorporatePolicy": "C6846285A",
          "InsuredNo": "02475371",
          "AuditorID": "",
          "AuditKind": "E",
          "SICcode": "8811",
          "Symbol": "LC",
          "Division": "Z",
          "MarketCode": "CRM",
          "AgencyCode": "700916",
          "ClientID": "",
          "HotStateIndicator": "No ",
          "UnderwriterName": "Regina  Bishop",
          "UnderwriterPhone": "9085722887",
          "AnnualPrem": "2917",
          "CompanionPolicy": "Yes",
          "ReceivedDate": "2023-02-21",
          "ManagementCode": "PJ"
      },
      "Request": {
          "CustomerNumber": "1055298",
          "ProductLineID": "3",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "KIBBLE & PRENTICE HOLDING",
          "CompanyName": "",
          "Address1": "601 UNION STREET",
          "Address2": "SUITE 1000",
          "City": "SEATTLE",
          "State": "WA",
          "Zip": "98101",
          "Phone": "2067311200",
          "Email": "Brad.Russell@chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "NORWEGIAN QUEEN MANAGEMENT COMPANY, LLC  C/O LIG INS AGENCIES - ATTN C LYNN",
              "Address1": "1905 NW CORPORATE BOULEVARD",
              "Address2": "",
              "City": "BOCA RATON",
              "State": "FL",
              "Zip": "33431",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "NORWEGIAN QUEEN MANAGEMENT COMPANY, LLC ",
              "Address1": "C/O CHRISTINE LYNN",
              "Address2": "",
              "City": "BOCA RATON",
              "State": "FL",
              "Zip": "33431",
              "Phone": "",
              "LegalDescription": "LTD Liability Co - LLC",
              "FEIN": "440625568",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "NORWEGIAN QUEEN MANAGEMENT COMPANY, LLC ",
                      "FEIN": "44-0625568",
                      "AdditionalName": "",
                      "Entity": "LTD Liability Co - LLC",
                      "EffectiveDate": "04/08/2022",
                      "ExpirationDate": ""
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "NORWEGIAN QUEEN MANAGEMENT COMPANY, LLC  C/O LIG INS AGENCIES   ATTN C LYNN",
                      "Address1": "565 EAST ALEXANDER PALM ROAD",
                      "Address2": "",
                      "City": "BOCA RATON",
                      "State": "FL",
                      "Zip": "33432",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "2628",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C6846285A",
                      "PolicyNumber": "071728245",
                      "ClassCode": "0913",
                      "ClassDescription": "DOMESTIC WORKERS RESIDENCES FULL TIME",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "FL0001",
                      "EntityName": "NORWEGIAN QUEEN MANAGEMENT COMPANY, LLC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "BOCA RATON",
                      "AuditLocState": "FL",
                      "StateLocationOfEntity": "FL",
                      "FromDate": "04/08/2022",
                      "ToDate": "04/08/2023",
                      "ExposureAmount": "4",
                      "StateRate": "622.000",
                      "EstimatedPremium": "2488.00",
                      "ExposureBasisCode": "U",
                      "AuditLocAddress": "565 EAST ALEXANDER PALM ROAD",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  },
                  {
                      "CorporatePolicy": "C6846285A",
                      "PolicyNumber": "071728245",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "FL0001",
                      "EntityName": "NORWEGIAN QUEEN MANAGEMENT COMPANY, LLC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "BOCA RATON",
                      "AuditLocState": "FL",
                      "StateLocationOfEntity": "FL",
                      "FromDate": "04/08/2022",
                      "ToDate": "04/08/2023",
                      "ExposureAmount": "87470",
                      "StateRate": "0.160",
                      "EstimatedPremium": "140.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "565 EAST ALEXANDER PALM ROAD",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C6846285A",
      "Notes": {
          "Note": [
              {
                  "PolicyNumber": "071728245",
                  "Subject": "21-22 WC Dispute - Closed w/revision",
                  "EntryDate": "10/05/2022",
                  "LastUpdate": "10/15/2022",
                  "NoteType": "General",
                  "PurgeDate": "10/05/2025",
                  "Author": "Lavin, Renee L",
                  "PolicyExpiration": "04/08/2022",
                  "Notes": "10/15/22 rl Revised to exclude the yacht ees that are covered under a separate policy.&#10;&#10;10/05/22 rl Assigned to Lavin"
              },
              {
                  "PolicyNumber": "071728245",
                  "Subject": "Attention Auditor/Reviewer - Yacht ees covered under separate policy",
                  "EntryDate": "10/15/2022",
                  "LastUpdate": "10/15/2022",
                  "NoteType": "General",
                  "PurgeDate": "10/15/2025",
                  "Author": "Lavin, Renee L",
                  "PolicyExpiration": "04/08/2022",
                  "Notes": "10/15/22 rl Yacht ees are covered under policy #Y09987125, please do not add them to the audit."
              }
          ]
      },
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Valentina Lyon",
                      "ContactAddress": "1905 N.W. CORPORATE BOULEVARD",
                      "ContactCity": "Boca Raton",
                      "ContactState": "FL",
                      "ContactZip": "33431",
                      "ContactPhone": "5619944445",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Office Manager"
                  }
              ]
          }
      },
      "AuditSeqNo": "1019093",
      "PolicyNo": "071728245",
      "PolicyTraceID": "C6846285A04082022",
      "RushFlagInd": "",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "055383052 / D96044938",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "04/20/2022",
                  "PolicyTermExpDt": "04/20/2023",
                  "AuditablePremium": "$500"
              }
          ]
      },
      "FormsandEndorsements": {
          "FormsandEndorsement": [
              {
                  "Number": "WC000414A",
                  "EffectiveDate": "/2/22/04/0",
                  "Title": "Notification of Change in Ownership Endorsement",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC090407",
                  "EffectiveDate": "/2/22/04/0",
                  "Title": "Florida Non-Cooperation With Premium Audit Endorsement",
                  "Values": "",
                  "Names": ""
              }
          ]
      },
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "63f3aab8b4c0fc5d63a4718c",
      "created": "2023-02-20T17:15:36.697Z",
      "modified": "2023-03-20T10:34:57.004Z",
      "userId": "job-queue-processor",
      "policy": {
          "ExpirationDate": "01/10/2023",
          "EffectiveDate": "01/10/2022",
          "ExpirationDateForEmailTrigger": "2023-01-10",
          "AccountIndicator": "NANO SOLUTIONS LLC",
          "PolicyNumber": "071738857",
          "PolicyType": "1",
          "CorporatePolicy": "C70483993",
          "InsuredNo": "02873322",
          "AuditorID": "",
          "AuditKind": "C",
          "SICcode": "3678",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "279312",
          "ClientID": "",
          "HotStateIndicator": "No ",
          "UnderwriterName": "Alize  Reiner",
          "UnderwriterPhone": "9085724508",
          "AnnualPrem": "112",
          "CompanionPolicy": "Yes",
          "ReceivedDate": "2023-02-22",
          "ManagementCode": ""
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "ProducerEmail": "",
          "Email": "Brad.Russell@chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "NANO SOLUTIONS LLC",
              "Address1": "86 IRONWOOD RD",
              "Address2": "",
              "City": "TRUMBULL",
              "State": "CT",
              "Zip": "06611",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "NANO SOLUTIONS LLC",
              "Address1": "86 IRONWOOD RD",
              "Address2": "",
              "City": "TRUMBULL",
              "State": "CT",
              "Zip": "06611",
              "Phone": "",
              "LegalDescription": "LTD Liability Co - LLC",
              "FEIN": "680621738",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "NANO SOLUTIONS LLC",
                      "FEIN": "68-0621738",
                      "AdditionalName": "",
                      "Entity": "LTD Liability Co - LLC",
                      "EffectiveDate": "10/04/2022",
                      "ExpirationDate": ""
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "NANO SOLUTIONS LLC",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "CT",
                      "Zip": "",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "22",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C70483993",
                      "PolicyNumber": "071738857",
                      "ClassCode": "4511",
                      "ClassDescription": "ANALYTICAL LABORATORIES OR ASSAYING INCLUDING LABO",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "CT0001",
                      "EntityName": "NANO SOLUTIONS LLC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "CT",
                      "StateLocationOfEntity": "CT",
                      "FromDate": "10/04/2022",
                      "ToDate": "10/31/2022",
                      "ExposureAmount": "2220",
                      "StateRate": "0.990",
                      "EstimatedPremium": "22.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": ""
                  }
              ]
          }
      },
      "Endorsements": {
          "Endorsement": [
              {
                  "PolicyNumber": "071738857",
                  "EndorsementCode": "WC000308",
                  "EndorsementDescription": "Partners, Officers & Others Exclusion",
                  "Values": {
                      "Value": [
                          {
                              "PolicyNumber": "071738857",
                              "EndorsementCode": "WC000308",
                              "Value": "PARTNERS"
                          },
                          {
                              "PolicyNumber": "071738857",
                              "EndorsementCode": "WC000308",
                              "Value": "JAI SINGH"
                          },
                          {
                              "PolicyNumber": "071738857",
                              "EndorsementCode": "WC000308",
                              "Value": "OFFICERS"
                          },
                          {
                              "PolicyNumber": "071738857",
                              "EndorsementCode": "WC000308",
                              "Value": "OTHERS"
                          }
                      ]
                  }
              }
          ]
      },
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C70483993",
      "Notes": "",
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Melissa Maynard",
                      "ContactAddress": "86 IRONWOOD RD",
                      "ContactCity": "TRUMBULL",
                      "ContactState": "CT",
                      "ContactZip": "06611",
                      "ContactPhone": "2035048001",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Broker"
                  },
                  {
                      "ContactName": "Melissa Maynard",
                      "ContactAddress": "86 IRONWOOD RD",
                      "ContactCity": "TRUMBULL",
                      "ContactState": "CT",
                      "ContactZip": "06611",
                      "ContactPhone": "2039083908",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "mjmaynard@chubb.com",
                      "PrimaryContact": "No",
                      "Designation": "Member"
                  }
              ]
          }
      },
      "AuditSeqNo": "1136008",
      "PolicyNo": "071738857",
      "PolicyTraceID": "C7048399310042022",
      "RushFlagInd": "",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Closed Out",
      "AdditionalPolicies": "",
      "FormsandEndorsements": {
          "FormsandEndorsement": [
              {
                  "Number": "WC000308",
                  "EffectiveDate": "/2/22/01/1",
                  "Title": "Partners, Officers & Others Exclusion",
                  "Values": "PARTNERS",
                  "Names": "PARTNERS"
              },
              {
                  "Number": "WC000308",
                  "EffectiveDate": "/2/22/01/1",
                  "Title": "Partners, Officers & Others Exclusion",
                  "Values": "",
                  "Names": "JAI SINGH"
              },
              {
                  "Number": "WC000308",
                  "EffectiveDate": "/2/22/01/1",
                  "Title": "Partners, Officers & Others Exclusion",
                  "Values": "OFFICERS",
                  "Names": "OFFICERS"
              },
              {
                  "Number": "WC000308",
                  "EffectiveDate": "/2/22/01/1",
                  "Title": "Partners, Officers & Others Exclusion",
                  "Values": "OTHERS",
                  "Names": "OTHERS"
              },
              {
                  "Number": "WC000414A",
                  "EffectiveDate": "/2/22/01/1",
                  "Title": "Notification of Change in Ownership Endorsement",
                  "Values": "",
                  "Names": ""
              },
              {
                  "Number": "WC000424",
                  "EffectiveDate": "/2/22/01/1",
                  "Title": "Audit NonCompliance Charge Endorsement",
                  "Values": "",
                  "Names": ""
              }
          ]
      },
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "6486e23269d708a3e4e03158",
      "created": "2023-06-12T09:15:30.892Z",
      "modified": "2023-06-12T12:55:43.807Z",
      "userId": "job-queue-processor",
      "policy": {
          "ExpirationDate": "04/01/2023",
          "EffectiveDate": "04/01/2022",
          "ExpirationDateForEmailTrigger": "2023-04-01",
          "AccountIndicator": "AMERICAN MURAL PROJECT INC",
          "PolicyNumber": "071739459",
          "PolicyType": "1",
          "CorporatePolicy": "C68092255",
          "InsuredNo": "02723163",
          "AuditorID": "",
          "AuditKind": "R",
          "SICcode": "8641",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "Z03720",
          "ClientID": "",
          "HotStateIndicator": "No",
          "UnderwriterName": "Bernadette  Caccese",
          "UnderwriterPhone": "9085725536",
          "AnnualPrem": "761",
          "CompanionPolicy": "No",
          "ReceivedDate": "2023-06-12",
          "ManagementCode": "BO"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "ASSUREDPARTNERS NORTHEAST  LLC",
          "CompanyName": "",
          "Address1": "1300 WINSTED ROAD",
          "Address2": "",
          "City": "TORRINGTON",
          "State": "CT",
          "Zip": "067902940",
          "Phone": "8604352507",
          "Email": "Brad.Russell@Chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "AMERICAN MURAL PROJECT INC",
              "Address1": "74-90 WHITING ST",
              "Address2": "",
              "City": "WINSTED",
              "State": "CT",
              "Zip": "06098",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "AMERICAN MURAL PROJECT INC",
              "Address1": "WINSTED",
              "Address2": "",
              "City": "WINCHESTER",
              "State": "CT",
              "Zip": "06098",
              "Phone": "",
              "LegalDescription": "Corporation",
              "FEIN": "263993911",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "AMERICAN MURAL PROJECT INC",
                      "FEIN": "26-3993911",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "07/07/2021",
                      "ExpirationDate": "07/07/2022"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "AMERICAN MURAL PROJECT INC",
                      "Address1": "74 WHITING ST",
                      "Address2": "",
                      "City": "WINSTED",
                      "State": "CT",
                      "Zip": "06098",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "840",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68092255",
                      "PolicyNumber": "071739459",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "CT0001",
                      "EntityName": "AMERICAN MURAL PROJECT INC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "WINSTED",
                      "AuditLocState": "CT",
                      "StateLocationOfEntity": "CT",
                      "FromDate": "07/07/2021",
                      "ToDate": "07/07/2022",
                      "ExposureAmount": "175200",
                      "StateRate": "0.240",
                      "EstimatedPremium": "420.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "74 WHITING ST",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "03"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68092255",
      "Notes": "",
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Cynthia E Rines",
                      "ContactAddress": "WINSTED",
                      "ContactCity": "WINCHESTER",
                      "ContactState": "CT",
                      "ContactZip": "06098",
                      "ContactPhone": "8606185443",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Accountant"
                  }
              ]
          }
      },
      "AuditSeqNo": "1179074",
      "PolicyNo": "071739459",
      "PolicyTraceID": "C6809225507072021",
      "RushFlagInd": "false",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": "",
      "FormsandEndorsements": "",
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "648833be7b995fa85c3abf0e",
      "created": "2023-06-13T09:15:42.782Z",
      "modified": "2023-06-13T09:30:04.234Z",
      "userId": "job-queue-processor",
      "policy": {
          "AccountIndicator": "FLORIDA PHARMACEUTICAL PRODUCTS, LLC",
          "PolicyType": "1",
          "CorporatePolicy": "C68585247",
          "PolicyNumber": "071743171",
          "InsuredNo": "03187222",
          "AuditorID": "PORT",
          "AuditKind": "E",
          "EffectiveDate": "07/16/2022",
          "ExpirationDate": "07/16/2023",
          "SICcode": "2834",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "ManagementCode": "BO",
          "AgencyCode": "271042",
          "HotStateIndicator": "No",
          "UnderwriterName": "Malcolm  Dock",
          "UnderwriterPhone": "908-572-5218",
          "AnnualPrem": "3353",
          "CompanionPolicy": "Yes",
          "PayFrequency": "A",
          "PriorPolicyId": "071743171",
          "SourceCode": "",
          "ExpirationDateForEmailTrigger": "2023-07-16",
          "ReceivedDate": "2023-06-13"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "USI INSURANCE SERVICES LLC",
          "CompanyName": "",
          "Address1": "2400EAST COMMERICAL BLVD",
          "Address2": "SUITE 600",
          "City": "FORT LAUDERDALE",
          "State": "FL",
          "Zip": "33308",
          "Phone": "9546074000",
          "Email": "Brad.Russell@Chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "FLORIDA PHARMACEUTICAL PRODUCTS, LLC",
              "Address1": "6111 BROKEN SOUND PKWY NW",
              "Address2": "",
              "City": "BOCA RATON",
              "State": "FL",
              "Zip": "33487",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "FLORIDA PHARMACEUTICAL PRODUCTS, LLC",
              "Address1": "6111 BROKEN SOUND PKWY NW",
              "Address2": "",
              "City": "BOCA RATON",
              "State": "FL",
              "Zip": "33487",
              "Phone": "",
              "LegalDescription": "Other",
              "FEIN": "650918850",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "FLORIDA PHARMACEUTICAL PRODUCTS, LLC",
                      "FEIN": "65-0918850",
                      "AdditionalName": "",
                      "Entity": "Other",
                      "EffectiveDate": "07/16/2022",
                      "ExpirationDate": "07/16/2023"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "FLORIDA PHARMACEUTICAL PRODUCTS, LLC",
                      "Address1": "6111 BROKEN SOUND PKWY NW #160",
                      "Address2": "",
                      "City": "6111 BROKEN SOUND P",
                      "State": "FL",
                      "Zip": "33487",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "3000",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68585247",
                      "PolicyNumber": "071743171",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS OR COLLECTORS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "FL0001",
                      "EntityName": "FLORIDA PHARMACEUTICAL PRODUCTS, LLC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "6111 BROKEN SOUND P",
                      "AuditLocState": "FL",
                      "StateLocationOfEntity": "FL",
                      "FromDate": "07/16/2022",
                      "ToDate": "07/16/2023",
                      "ExposureAmount": "695000",
                      "StateRate": "0.320",
                      "EstimatedPremium": "2224.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "6111 BROKEN SOUND PKWY NW #160",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "21"
                  },
                  {
                      "CorporatePolicy": "C68585247",
                      "PolicyNumber": "071743171",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC.",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "FL0001",
                      "EntityName": "FLORIDA PHARMACEUTICAL PRODUCTS, LLC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "6111 BROKEN SOUND P",
                      "AuditLocState": "FL",
                      "StateLocationOfEntity": "FL",
                      "FromDate": "07/16/2022",
                      "ToDate": "07/16/2023",
                      "ExposureAmount": "485000",
                      "StateRate": "0.160",
                      "EstimatedPremium": "776.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "6111 BROKEN SOUND PKWY NW #160",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "03"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68585247",
      "Notes": "",
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "TEST",
                      "ContactAddress": "TEST",
                      "ContactCity": "BOCA RATON",
                      "ContactState": "FL",
                      "ContactZip": "33487",
                      "ContactPhone": "7328639966",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": ""
                  }
              ]
          }
      },
      "AuditSeqNo": "1054344",
      "PolicyNo": "071743171",
      "PolicyTraceID": "C6858524707162022",
      "RushFlagInd": "false",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "036063540 / D96369682",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "07/16/2022",
                  "PolicyTermExpDt": "07/16/2023",
                  "AuditablePremium": "$300"
              }
          ]
      },
      "FormsandEndorsements": "",
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "648833c3315a62ae771bd2f2",
      "created": "2023-06-13T09:15:47.247Z",
      "modified": "2023-06-13T09:30:04.324Z",
      "userId": "job-queue-processor",
      "policy": {
          "AccountIndicator": "CLEAN ENERGY, LLC",
          "PolicyType": "1",
          "CorporatePolicy": "C70471723",
          "PolicyNumber": "071743742",
          "InsuredNo": "03191517",
          "AuditorID": "PORT",
          "AuditKind": "Z",
          "EffectiveDate": "07/10/2022",
          "ExpirationDate": "07/10/2023",
          "SICcode": "4911",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "ManagementCode": "BO",
          "AgencyCode": "27032C",
          "HotStateIndicator": "No",
          "UnderwriterName": "Dajana  Sarenac",
          "UnderwriterPhone": "6235802162",
          "AnnualPrem": "796",
          "CompanionPolicy": "Yes",
          "PayFrequency": "A",
          "PriorPolicyId": "071743742",
          "SourceCode": "",
          "ExpirationDateForEmailTrigger": "2023-07-10",
          "ReceivedDate": "2023-06-13"
      },
      "Request": {
          "CustomerNumber": "1055298",
          "ProductLineID": "3",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "PEOPLES FIRST INSURANCE AND",
          "CompanyName": "",
          "Address1": "PO BOX 66",
          "Address2": "",
          "City": "ROCK HILL",
          "State": "SC",
          "Zip": "297310000",
          "Phone": "8033245262",
          "Email": "Brad.Russell@Chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "CLEAN ENERGY, LLC",
              "Address1": "5320 OLD PINEVILLE ROAD",
              "Address2": "",
              "City": "CHARLOTTE",
              "State": "NC",
              "Zip": "28217",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "CLEAN ENERGY, LLC",
              "Address1": "5320 OLD PINEVILLE ROAD",
              "Address2": "",
              "City": "CHARLOTTE",
              "State": "NC",
              "Zip": "28217",
              "Phone": "",
              "LegalDescription": "LTD Liability Co - LLC",
              "FEIN": "272073551",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "CLEAN ENERGY, LLC",
                      "FEIN": "27-2073551",
                      "AdditionalName": "",
                      "Entity": "LTD Liability Co - LLC",
                      "EffectiveDate": "07/10/2022",
                      "ExpirationDate": "07/10/2023"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "CLEAN ENERGY, LLC",
                      "Address1": "11701 MT. HOLLY ROAD",
                      "Address2": "",
                      "City": "CHARLOTTE",
                      "State": "NC",
                      "Zip": "28214",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "0",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C70471723",
                      "PolicyNumber": "071743742",
                      "ClassCode": "7539",
                      "ClassDescription": "ELECTRIC LIGHT OR POWER CO NOC ALL EMPLOYEES & DRI",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "NC0001",
                      "EntityName": "CLEAN ENERGY, LLC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "CHARLOTTE",
                      "AuditLocState": "NC",
                      "StateLocationOfEntity": "NC",
                      "FromDate": "07/10/2022",
                      "ToDate": "07/10/2023",
                      "ExposureAmount": "0",
                      "StateRate": "2.380",
                      "EstimatedPremium": "0.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "11701 MT. HOLLY ROAD",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "08"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C70471723",
      "Notes": "",
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "shannon doster ",
                      "ContactAddress": "5320 OLD PINEVILLE ROAD",
                      "ContactCity": "CHARLOTTE",
                      "ContactState": "NC",
                      "ContactZip": "28217",
                      "ContactPhone": "7047175530",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Controller/Office Manager"
                  }
              ]
          }
      },
      "AuditSeqNo": "1082670",
      "PolicyNo": "071743742",
      "PolicyTraceID": "C7047172307102022",
      "RushFlagInd": "false",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "037115420 / D96303038",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "07/10/2022",
                  "PolicyTermExpDt": "07/10/2023",
                  "AuditablePremium": "$10,275"
              }
          ]
      },
      "FormsandEndorsements": "",
      "PremiumDiscountExperienceModificationSchedules": {
          "Schedules": [
              {
                  "State": "NORTH CAROLINA",
                  "FactorType": "Experience Modification",
                  "DateRange": "07/10/2022 to 07/10/2023",
                  "Factor": "0.8800"
              }
          ]
      },
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "648833c81651949c933ad05c",
      "created": "2023-06-13T09:15:52.063Z",
      "modified": "2023-06-15T08:14:19.349Z",
      "userId": "job-queue-processor",
      "policy": {
          "AccountIndicator": "DANCING RABBIT, INC. DBA THE CENTER FOR ",
          "PolicyType": "1",
          "CorporatePolicy": "C68105249",
          "PolicyNumber": "071743957",
          "InsuredNo": "01397880",
          "AuditorID": "Y740",
          "AuditKind": "R",
          "EffectiveDate": "06/01/2022",
          "ExpirationDate": "06/01/2023",
          "SICcode": "9512",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "ManagementCode": "BO",
          "AgencyCode": "27861C",
          "HotStateIndicator": "No",
          "UnderwriterName": "Jennifer  Mowrey",
          "UnderwriterPhone": "9085725253",
          "AnnualPrem": "356",
          "CompanionPolicy": "Yes",
          "PayFrequency": "A",
          "PriorPolicyId": "071743957",
          "SourceCode": "",
          "ExpirationDateForEmailTrigger": "2023-06-01",
          "ReceivedDate": "2023-06-13"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "ALLIANT INSURANCE SERVICES",
          "CompanyName": "",
          "Address1": "4530WALNEY RD STE 200",
          "Address2": "",
          "City": "CHANTILLY",
          "State": "VA",
          "Zip": "201510000",
          "Phone": "8002987373",
          "Email": "Brad.Russell@Chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "DANCING RABBIT, INC. DBA THE CENTER FOR  SUSTAINABLE COOPERATIVE CULTURE",
              "Address1": "1 DANCING RABBIT LANE, UNIT 18",
              "Address2": "",
              "City": "RUTLEDGE",
              "State": "MO",
              "Zip": "63563",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "DANCING RABBIT, INC. DBA THE CENTER FOR  SUSTAINABLE COOPERATIVE CULTURE",
              "Address1": "1 DANCING RABBIT LANE",
              "Address2": "",
              "City": "RUTLEDGE",
              "State": "MO",
              "Zip": "63563",
              "Phone": "",
              "LegalDescription": "Corporation",
              "FEIN": "431762592",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "DANCING RABBIT, INC. DBA THE CENTER FOR ",
                      "FEIN": "43-1762592",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "07/01/2021",
                      "ExpirationDate": "07/01/2022"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "DANCING RABBIT, INC. DBA THE CENTER FOR  SUSTAINABLE COOPERATIVE CULTURE",
                      "Address1": "1 DANCING RABBIT LANE",
                      "Address2": "",
                      "City": "RUTLEDGE",
                      "State": "MO",
                      "Zip": "63563",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "173",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68105249",
                      "PolicyNumber": "071743957",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS OR COLLECTORS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "MO0001",
                      "EntityName": "DANCING RABBIT, INC. DBA THE CENTER FOR",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "RUTLEDGE",
                      "AuditLocState": "MO",
                      "StateLocationOfEntity": "MO",
                      "FromDate": "07/01/2021",
                      "ToDate": "07/01/2022",
                      "ExposureAmount": "14695",
                      "StateRate": "0.490",
                      "EstimatedPremium": "72.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "1 DANCING RABBIT LANE",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "21"
                  },
                  {
                      "CorporatePolicy": "C68105249",
                      "PolicyNumber": "071743957",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "MO0001",
                      "EntityName": "DANCING RABBIT, INC. DBA THE CENTER FOR",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "RUTLEDGE",
                      "AuditLocState": "MO",
                      "StateLocationOfEntity": "MO",
                      "FromDate": "07/01/2021",
                      "ToDate": "07/01/2022",
                      "ExposureAmount": "46113",
                      "StateRate": "0.220",
                      "EstimatedPremium": "101.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "1 DANCING RABBIT LANE",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "03"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68105249",
      "Notes": {
          "Note": [
              {
                  "PolicyNumber": "071743957",
                  "Subject": "RUSH – MO  Compliance for 071743957   20/21 term Due 10/29",
                  "EntryDate": "09/22/2021",
                  "LastUpdate": "09/22/2021",
                  "NoteType": "General",
                  "PurgeDate": "09/22/2024",
                  "Author": "MARY BECKNER",
                  "PolicyExpiration": "07/01/2021",
                  "Notes": "MEB/9-22-21\r\nRUSH – Review/processing as audit is on the MO compliance list. \r\n"
              }
          ]
      },
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Mica Wood",
                      "ContactAddress": "1 DANCING RABBIT LANE",
                      "ContactCity": "RUTLEDGE",
                      "ContactState": "MO",
                      "ContactZip": "63563",
                      "ContactPhone": "0000000000",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": ""
                  }
              ]
          }
      },
      "AuditSeqNo": "1179076",
      "PolicyNo": "071743957",
      "PolicyTraceID": "C6810524907012021",
      "RushFlagInd": "false",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": {
          "CompanionPolicies": [
              {
                  "PolicyNoandCPN": "035750373 / D9613261A",
                  "Type": "General Liability",
                  "PolicyTermEffDt": "07/01/2022",
                  "PolicyTermExpDt": "07/01/2023",
                  "AuditablePremium": "$27"
              }
          ]
      },
      "FormsandEndorsements": "",
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  },
  {
      "_id": "648833cf1651949c933ad077",
      "created": "2023-06-13T09:15:59.806Z",
      "modified": "2023-07-04T07:51:21.614Z",
      "userId": "job-queue-processor",
      "policy": {
          "ExpirationDate": "06/13/2023",
          "EffectiveDate": "06/13/2022",
          "ExpirationDateForEmailTrigger": "2023-06-13",
          "AccountIndicator": "GRAND PRIX INT'L INC",
          "PolicyNumber": "071745974",
          "PolicyType": "1",
          "CorporatePolicy": "C68531639",
          "InsuredNo": "03586001",
          "AuditorID": "",
          "AuditKind": "E",
          "SICcode": "7389",
          "Symbol": "LC",
          "Division": "5",
          "MarketCode": "ALO",
          "AgencyCode": "I02828",
          "ClientID": "",
          "HotStateIndicator": "No ",
          "UnderwriterName": "Anthony  Guzman",
          "UnderwriterPhone": "",
          "AnnualPrem": "1667",
          "CompanionPolicy": "No",
          "ReceivedDate": "2023-06-13",
          "ManagementCode": "BO"
      },
      "Request": {
          "CustomerNumber": "CGIVAAZ",
          "ProductLineID": "2",
          "LiabilityLimit1Policy": "",
          "LiabilityLimitCombPolicy": "",
          "LiabilityLimit1Sub": "",
          "LiabilityLimitCombSub": "",
          "DueDate": "",
          "Photo": "",
          "Diagram": ""
      },
      "Agent": {
          "AgentName": "BROWN & BROWN OF",
          "CompanyName": "",
          "Address1": "55 CAPITAL BLVD STE 102",
          "Address2": "",
          "City": "ROCKY HILL",
          "State": "CT",
          "Zip": "060673927",
          "Phone": "4132363712",
          "Email": "Brad.Russell@Chubb.com"
      },
      "Location": {
          "Record": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "GRAND PRIX INT'L INC",
              "Address1": "PO BOX 51084",
              "Address2": "",
              "City": "INDIAN ORCHARD",
              "State": "MA",
              "Zip": "01151",
              "Phone": ""
          },
          "Insured": {
              "LocationNumber": "1",
              "ContactName": "",
              "CompanyName": "GRAND PRIX INT'L INC",
              "Address1": "PO BOX 51084",
              "Address2": "",
              "City": "INDIAN ORCHARD",
              "State": "MA",
              "Zip": "01151",
              "Phone": "",
              "LegalDescription": "Corporation",
              "FEIN": "043449295",
              "RatedOrNonRated": "Rated"
          },
          "RatedNamedInsured": {
              "Rated": [
                  {
                      "Insuredname": "GRAND PRIX INT'L INC",
                      "FEIN": "04-3449295",
                      "AdditionalName": "",
                      "Entity": "Corporation",
                      "EffectiveDate": "06/13/2022",
                      "ExpirationDate": "06/13/2023"
                  }
              ]
          },
          "NonRatedNamedInsured": "",
          "AdditionalAddresses": {
              "Address": [
                  {
                      "AddressType": "",
                      "LocationNumber": "2",
                      "ContactName": "",
                      "CompanyName": "GRAND PRIX INT'L INC",
                      "Address1": "NO FIXED ADDRESS",
                      "Address2": "",
                      "City": "",
                      "State": "MA",
                      "Zip": "",
                      "Phone": ""
                  },
                  {
                      "AddressType": "",
                      "LocationNumber": "3",
                      "ContactName": "",
                      "CompanyName": "GRAND PRIX INT'L INC",
                      "Address1": "34 FRONT ST.",
                      "Address2": "",
                      "City": "INDIAN ORCHARD",
                      "State": "MA",
                      "Zip": "01151",
                      "Phone": ""
                  }
              ]
          },
          "EntityAddresses": ""
      },
      "Policies": {
          "ClassCodes": {
              "TotalPremium": "976",
              "ClassCode": [
                  {
                      "CorporatePolicy": "C68531639",
                      "PolicyNumber": "071745974",
                      "ClassCode": "8742",
                      "ClassDescription": "SALESPERSONS, COLLECTORS OR MESSENGERS   OUTSIDE",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "MA0001",
                      "EntityName": "GRAND PRIX INT'L INC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "MA",
                      "StateLocationOfEntity": "MA",
                      "FromDate": "06/13/2022",
                      "ToDate": "06/13/2023",
                      "ExposureAmount": "425000",
                      "StateRate": "0.100",
                      "EstimatedPremium": "425.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "16"
                  },
                  {
                      "CorporatePolicy": "C68531639",
                      "PolicyNumber": "071745974",
                      "ClassCode": "8810",
                      "ClassDescription": "CLERICAL OFFICE EMPLOYEES NOC",
                      "ClassCodeType": "",
                      "Auditable": "",
                      "EntityNumber": "MA0001",
                      "EntityName": "GRAND PRIX INT'L INC",
                      "LocationNumberOfEntity": "",
                      "AuditLocCity": "",
                      "AuditLocState": "MA",
                      "StateLocationOfEntity": "MA",
                      "FromDate": "06/13/2022",
                      "ToDate": "06/13/2023",
                      "ExposureAmount": "918000",
                      "StateRate": "0.060",
                      "EstimatedPremium": "551.00",
                      "ExposureBasisCode": "P",
                      "AuditLocAddress": "NO FIXED ADDRESS",
                      "RatingGroup": "0001-01",
                      "POPROD": "",
                      "Coverage": "",
                      "AIPExposureDesc": "",
                      "ClassCodeSuffix": "03"
                  }
              ]
          }
      },
      "Endorsements": "",
      "Coverages": {
          "Coverage": {
              "CoverageCode": "01"
          }
      },
      "Claims": "",
      "CorporatePolicy": "C68531639",
      "Notes": {
          "Note": [
              {
                  "PolicyNumber": "071745974",
                  "Subject": "21/22 Audit Dispute - Closed w/revision",
                  "EntryDate": "08/31/2022",
                  "LastUpdate": "09/16/2022",
                  "NoteType": "General",
                  "PurgeDate": "08/31/2025",
                  "Author": "Barb Gray",
                  "PolicyExpiration": "06/13/2022",
                  "Notes": "09/16/22 rl Revised audit to correct payroll.\r\n\r\nbg 08/31/2022 - assigned to Lavin"
              },
              {
                  "PolicyNumber": "036035723",
                  "Subject": "Expiration Date Change                                                                                                                                                                                  ",
                  "EntryDate": "05/14/2021",
                  "LastUpdate": "05/14/2021",
                  "NoteType": "General",
                  "PurgeDate": "05/14/2024",
                  "Author": "BATCH                                                                                               ",
                  "PolicyExpiration": "01/01/2022",
                  "Notes": "The Expiration Date for this term has changed from 06/13/2022 to 01/01/2022.\r\r\n\r\r\nThe Audit was not previously Assigned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          "
              }
          ]
      },
      "AuditContact": {
          "Contacts": {
              "Contact": [
                  {
                      "ContactName": "Rebecca D'amato",
                      "ContactAddress": "PO BOX 51084",
                      "ContactCity": "INDIAN ORCHARD",
                      "ContactState": "MA",
                      "ContactZip": "01151",
                      "ContactPhone": "4135438887",
                      "Extension": "",
                      "ContactFax": "",
                      "ContactEmail": "raj.palireddy+insured@chubb.com",
                      "PrimaryContact": "Yes",
                      "Designation": "Controller"
                  }
              ]
          }
      },
      "AuditSeqNo": "1039072",
      "PolicyNo": "071745974",
      "PolicyTraceID": "C6853163906132022",
      "RushFlagInd": "",
      "WorkOrderServiceLevelID": "11",
      "FileType": "Detail",
      "PolicyStatus": "OK",
      "EmailStatus": "Not Send",
      "PolicyStatusForClosedOut": "Not Closed",
      "AdditionalPolicies": "",
      "FormsandEndorsements": "",
      "PremiumDiscountExperienceModificationSchedules": "",
      "module": "633f7f6f6ac8e25d1bea2004"
  }
]

  insuredData:any=[];


  ngOnInit() {

    for(let x of this.insuredDataRaw){
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
