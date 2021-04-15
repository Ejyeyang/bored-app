import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Activity } from '../_models/activity';
import { FormTestService } from '../_services/form-test.service';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styles: [
  ]
})
export class FormTestComponent implements OnInit {
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
    public service: FormTestService
  ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData = {
      activity: '',
      type: '',
      participants: 0,
      price: 0,
      link: '',
      key: '',
      accessibility: 0
    }
  }

  onSubmit(form: NgForm){
    this.service.getActivity(form.value).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
