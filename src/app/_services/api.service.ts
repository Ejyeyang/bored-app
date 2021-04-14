import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://www.boredapi.com/api/activity/';


  constructor(
    private http: HttpClient
  ) { }

  getActivity(){
    return this.http.get<any>(this.baseUrl);
  }
}
