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

  returnPictureBasedOnType(){
    let type = this.activityActivated.type;
    if(type === 'education'){
      return 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
    } else if(type === 'recreational'){
      return 'https://images.unsplash.com/flagged/photo-1584650855128-d1b4a7abfdaa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';
    } else if(type === 'social'){
      return 'https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
    } else if(type === 'diy'){
      return 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';
    } else if(type === 'charity'){
      return'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80';
    } else if(type === 'cooking'){
      return 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80';
    } else if(type === 'relaxation'){
      return 'https://images.unsplash.com/photo-1559414131-b0aa53919648?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';
    } else if(type === 'music'){
      return 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';
    } else if(type === 'busywork'){
      return 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';
    } else {
      return;
    }
  }
}
