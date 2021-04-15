import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styles: [],
})
export class ActivityFormComponent implements OnInit {
  types: string[] = [
    'education',
    'recreational',
    'social',
    'diy',
    'charity',
    'cooking',
    'relaxation',
    'music',
    'busywork',
  ];

  constructor(
    public apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.formReset();
  }

  formReset(form?: NgForm){
    if(form != null){
      form.resetForm();
    } else {
      this.apiService.formData ={
        activity: '',
        type: '',
        participants: null,
        price: null,
        link: '',
        key: '',
        accessibility: null
      };
    }
  }

  onSubmit(form: NgForm){
    this.apiService.getActivity(form.value).subscribe(res => {
      this.apiService.activity = res;
      console.log(this.apiService.activity);
    }, error => {
      console.log(error);
    });
  }


}
