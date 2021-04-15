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

  ngOnInit(): void {}

  onSubmit(form: NgForm){

  }


}
