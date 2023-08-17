import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReviewerDashboardDataService {

  url="http://localhost:8000/reviewerDashboardData"
  constructor(private http:HttpClient) { }
  getReviewerDahboardData(){
    return this.http.get(this.url);
  }
}
