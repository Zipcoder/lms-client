import { Lecture } from '../../../shared/models/lecture.model';
import { Lab } from '../../../shared/models/lab.model';
import { Speaker } from '../../../shared/models/speaker.model';
import { Event } from '../../../shared/models/event.model';

export class Day{
	private _lectures:Lecture[];
	private _labs:Lab[];
	private _speakers:Speaker[];
	private _events:Event[];

	get lectures():Lecture[] {
		return this._lectures;
	}
	set lectures(list:Lecture[]){
		this._lectures = list;
	}

	get labs():Lab[] {
		return this._labs;
	}
	set labs(list:Lab[]){
		this._labs = list;
	}

	get speakers():Speaker[]{
		return this._speakers;
	}
	set speakers(list:Speaker[]){
		this._speakers = list;
	}

	get events():Event[] {
		return this._events;
	}
	set events(list:Event[]){
		this._events = list;
	}
	constructor(readonly date:Date){

	}
}
