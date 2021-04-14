import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
