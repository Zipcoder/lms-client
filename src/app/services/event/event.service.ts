import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DateService } from '../shared/date.service';
import { Event } from '../../shared/models/event.model';

@Injectable()
export class EventService extends DateService {
	model:any;
	modelName:string='event';

  constructor(@Inject(Http) http:Http) {
		super(http);

		this.model = (construct:any) => {
			return new Event(construct);
		}
	}

}
