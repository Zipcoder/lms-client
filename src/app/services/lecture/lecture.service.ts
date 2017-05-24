import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DateService } from '../shared/date.service';
import { Lecture } from '../../shared/models/lecture.model';

@Injectable()
export class LectureService extends DateService {
	model:any;
	modelName:string = 'lecture';

	constructor(@Inject(Http) http:Http) {
		super(http);

		this.model = (construct:any)=> {
			return new Lecture(construct);
		}
	}
}
