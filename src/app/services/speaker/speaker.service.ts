import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DateRangeService } from '../shared/date-range.service';
import { Speaker } from '../../shared/models/speaker.model';

@Injectable()
export class SpeakerService extends DateRangeService {
	model:any;
	modelName:string = 'speaker.json';
  constructor(@Inject(Http) http:Http) {
		super(http);

		this.model = (construct:any) => {
			return new Speaker(construct);
		}
	}

}
