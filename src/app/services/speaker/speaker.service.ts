import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DateService } from '../shared/date.service';
import { Speaker } from '../../shared/models/speaker.model';

@Injectable()
export class SpeakerService extends DateService {
	model:any;
	modelName:string = 'speaker';
  constructor(@Inject(Http) http:Http) {
		super(http);

		this.model = (construct:any) => {
			return new Speaker(construct);
		}
	}

}
