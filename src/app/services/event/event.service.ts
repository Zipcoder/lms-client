import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DateRangeService } from '../shared/date-range.service';
import { Event } from '../../shared/models/event.model';

@Injectable()
export class EventService extends DateRangeService {
	model:any;
	modelName:string='event.json';

  constructor(@Inject(Http) http:Http) {
		super(http);

		this.model = (construct:any) => {
			return new Event(construct);
		}
	}

}
