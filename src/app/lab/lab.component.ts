import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabService } from '../services/lab/lab.service';

@Component({
  selector: 'ms-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
