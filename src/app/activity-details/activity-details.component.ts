import { Component, OnInit } from '@angular/core';
import { Activity } from '../_models/activity';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styles: [
  ]
})
export class ActivityDetailsComponent implements OnInit {
  activity?: Activity;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity(){
    this.apiService.getActivity().subscribe(res => {
      this.activity = res;
      console.log(this.activity);
    }, error => {
      console.log(error);
    });
  }

}
