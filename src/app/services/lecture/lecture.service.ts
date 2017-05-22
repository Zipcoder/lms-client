import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DateRangeService } from '../shared/date-range.service';
import { Lecture } from '../../shared/models/lecture.model';

@Injectable()
export class LectureService extends DateRangeService {
	model:any;
	modelName:string = 'lecture.json';

	constructor(@Inject(Http) http:Http) {
		super(http);

		this.model = (construct:any)=> {
			return new Lecture(construct);
		}
	}
}
