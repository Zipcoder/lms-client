import { Component, OnInit } from '@angular/core';
import { Day } from './models/day.model';
import { LectureService } from '../../services/lecture/lecture.service';
import { Lecture } from '../../shared/models/lecture.model';
import { LabService } from '../../services/lab/lab.service';
import { Lab } from '../../shared/models/lab.model';
import { SpeakerService } from '../../services/speaker/speaker.service';
import { Speaker } from '../../shared/models/speaker.model';
import { EventService } from '../../services/event/event.service';
import { Event } from '../../shared/models/event.model';
import { DayViewComponent } from './dayview/dayview.component';

@Component({
	selector: 'ms-weekly',
	templateUrl: './weekly.component.html',
	styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {

	private now: Date = new Date();
	private monday: Date;
	private friday: Date;
	private days: Day[] = [];
	private dayShown: Day;
	private selectedDay: number;
	private dayToggled: Boolean = false;

	constructor(
		private lectureService: LectureService,
		private labService: LabService,
		private speakerService: SpeakerService,
		private eventService: EventService
	) { }

	ngOnInit() {
		this.today();
		this.toggleAnimation();
		this.dayShown = this.days[this.setInitDay()];
		this.setClickedDay(this.setInitDay());
	}

	private getMonday = (date): Date => {
		let day: number = date.getDay(),
			diff = date.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday

		return date = new Date(date.setDate(diff));
	}

	private today = () => {
		this.monday = this.getMonday(new Date);
		this.setDays(this.monday.getDate());
	}
	private nextMonday = () => {
		this.toggleAnimation();
		let next: number = this.monday.getDate() + 7;
		this.setDays(next);
		this.setDayOnWeekChange();
	}

	private prevMonday = () => {
		this.toggleAnimation();
		let prev: number = this.monday.getDate() - 7;
		this.setDays(prev);
		this.setDayOnWeekChange();
	}

	private setDays = (start: number) => {
		this.monday = new Date(this.monday.setDate(start));

		for (let i = 0; i < 5; i++) {
			let weekday: number = this.monday.getDate() + i;
			let date: Date = new Date(new Date(this.monday).setDate(weekday));
			this.days[i] = new Day(date);
		}

		this.fetchLectures();
		this.fetchLabs();
		this.fetchSpeakers();
		this.fetchEvents();
		
		console.log(this.days);
	}

	private fetchLectures() {
		this.lectureService.findByDateRange(1, 2).then((lectures: Object) => {
			for (let i = 0; i < 5; i++) {
				let isoDate = this.days[i].date.toISOString().split('T')[0];
				this.days[i].lectures = lectures[isoDate];
			}
		})
	}

	private fetchLabs() {
		this.labService.findByDateRange(1, 2).then((labs: Object) => {
			for (let i = 0; i < 5; i++) {
				let isoDate = this.days[i].date.toISOString().split('T')[0];
				this.days[i].labs = labs[isoDate];
			}
		})
	}

	private fetchSpeakers() {
		this.speakerService.findByDateRange(1, 2).then((speakers: Object) => {
			for (let i = 0; i < 5; i++) {
				let isoDate = this.days[i].date.toISOString().split('T')[0];
				this.days[i].speakers = speakers[isoDate];
			}
		})
	}

	private fetchEvents() {
		this.eventService.findByDateRange(1, 2).then((events: Object) => {
			for (let i = 0; i < 5; i++) {
				let isoDate = this.days[i].date.toISOString().split('T')[0];
				this.days[i].events = events[isoDate];
			}
		})
	}

	private changeDayBtnPressed(dayPressed, index){
		this.setClickedDay(index);
		this.toggleAnimation();
		setTimeout(() => {
			this.dayShown = dayPressed;
		}, 500);
	}

	private setClickedDay( index){
		this.selectedDay = index;
	}

	private toggleAnimation(){
		this.dayToggled = true;
		setTimeout(() => {
			this.dayToggled = false;
		}, 1000);
	}

	private setInitDay(){
		for(var i = 0; i < this.days.length; i++){
			if(this.days[i].date.getDate() === new Date().getDate()){
				return i;
			}
		}
	}

	private setDayOnWeekChange(){
		setTimeout(() => {
			this.dayShown = this.days[this.selectedDay];
		}, 500);
	}

	private todayBtnClicked(){
		this.toggleAnimation();
		let index = this.setInitDay();
		this.selectedDay = index;
		setTimeout(() => {
			this.dayShown = this.days[index];
		}, 500);
	}
}
