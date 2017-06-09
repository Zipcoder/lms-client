import { Component, Input } from '@angular/core';
import { Day } from '../models/day.model';
import { MdGridListModule } from '@angular/material';

@Component({
    selector: 'day-view',
    templateUrl: './dayview.component.html',
    styleUrls: ['./dayview.component.scss']
})
export class DayViewComponent{

    @Input() day: Day;

    constructor(){
    }
    
}