import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styles: [],
})
export class ActivityFormComponent implements OnInit {
  constructor(
    public apiService: ApiService,
    private toastr: ToastrService
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
      this.apiService.activityActivated.next(res);
      this.formReset();
    }, error => {
      console.log(error);
    });
  }


}
