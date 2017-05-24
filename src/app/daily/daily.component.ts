import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lecture } from '../shared/models/lecture.model';
import { LectureService } from '../services/lecture/lecture.service';
import { Lab } from '../shared/models/lab.model';
import { LabService } from '../services/lab/lab.service';
import { Speaker } from '../shared/models/speaker.model';
import { SpeakerService } from '../services/speaker/speaker.service';
import { Event } from '../shared/models/event.model';
import { EventService } from '../services/event/event.service';


@Component({
  selector: 'ms-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit, OnDestroy {

	private date:string;
	private sub:any;
	private lectures:Lecture[];
	private events:Event[];
	private speakers:Speaker[];
	private labs:Lab[];

  constructor(
		private route:ActivatedRoute,
		private lectureService:LectureService,
		private speakerService:SpeakerService,
		private eventService:EventService,
		private labService:LabService
	) {}

  ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.date = params['date'];
			this.setDay();
		})
  }

	private setDay(){
		this.fetchLectures();
		this.fetchLabs();
		this.fetchSpeakers();
		this.fetchEvents();
	}

	private fetchLectures(){
		this.lectureService.findByDate(this.date).then((lectures:Array<Lecture>) => {
			this.lectures = lectures;
		})
	}

	private fetchLabs(){
		this.labService.findByDate(this.date).then((labs:Array<Lab>) => {
			this.labs = labs;
		})
	}

	private fetchSpeakers(){
		this.speakerService.findByDate(this.date).then((speakers:Array<Speaker>) => {
			this.speakers = speakers;
		})
	}

	private fetchEvents(){
		this.eventService.findByDate(this.date).then((events:Array<Event>) => {
			this.events = events;
		})
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}
}
