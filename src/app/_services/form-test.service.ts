import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../_models/activity';

@Injectable({
  providedIn: 'root'
})
export class FormTestService {
  formData: Activity;
  baseUrl = 'https://www.boredapi.com/api/activity';


  constructor(
    private http: HttpClient
  ) { }

  getActivity(formData: Activity){
    if(formData.type === null || formData.type === ''){
      return this.http.get<Activity>(this.baseUrl);
    } else {
      console.log(formData.activity);
      return this.http.get<Activity>(this.baseUrl + '?type=' + formData.type.toString());
    }
  }
}
