import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Activity } from '../_models/activity';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://www.boredapi.com/api/activity';
  formData: Activity;

  activityActivated = new Subject<Activity>();

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  getActivity(form?: Activity){
    if(form.type !== ''){
      console.log(form);
      this.toastr.success('By type: ' + form.type);
      return this.http.get<Activity>(this.baseUrl + '?type=' + form.type.toString());
    } else if(form.participants !== null){
      if(form.participants > 5 || form.participants < 1){
        this.toastr.info("Participants must have a value between 1 and 5");
        return;
      }
      console.log(form);
      this.toastr.success('By participants: ' + form.participants);
      return this.http.get<Activity>(this.baseUrl + '?participants=' + form.participants);
    } else {
      console.log(form);
      this.toastr.success('Random');
      return this.http.get<Activity>(this.baseUrl);
    }
  }


}
