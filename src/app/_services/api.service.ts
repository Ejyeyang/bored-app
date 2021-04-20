import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Activity } from '../_models/activity';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://www.boredapi.com/api/activity';
  formData: Activity;
  activity?: Activity;

  activityActivated = new Subject<Activity>();

  constructor(
    private http: HttpClient
  ) { }

  getActivity(form?: Activity){
    if(form.type === ''){
      return this.http.get<Activity>(this.baseUrl);
    } else {
      console.log(this.formData.type);
      return this.http.get<Activity>(this.baseUrl + '?type=' + form.type.toString());
    }
  }
}
