import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InsuredDashboardDataService {

  url="http://localhost:8000/insuredDashboardData"
  constructor(private http:HttpClient) { }
  getInsuredDahboardData(){
    return this.http.get(this.url);
  }

}
