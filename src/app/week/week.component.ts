import { Component, OnInit } from '@angular/core';
import {MdTabsModule, MdCardModule} from '@angular/material';

@Component({
  selector: 'ms-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

	weekDays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  constructor() { }

  ngOnInit() {
  }

}
