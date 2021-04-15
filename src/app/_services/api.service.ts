import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../_models/activity';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://www.boredapi.com/api/activity/';


  constructor(
    private http: HttpClient
  ) { }

  getActivity(type?: string){
    if(type === null || type === ""){
      return this.http.get<Activity>(this.baseUrl);
    } else {
      return this.http.get<Activity>(this.baseUrl + 'activity?type=' + type);
    }
  }
}
