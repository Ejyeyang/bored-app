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
  activityActivated: Activity;

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.activityActivated.subscribe(res => {
      this.activityActivated = res;
    }, error => {
      console.log(error);
    });
  }



}
