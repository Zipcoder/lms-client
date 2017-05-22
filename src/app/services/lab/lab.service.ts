import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DateRangeService } from '../shared/date-range.service';
import { Lab } from '../../shared/models/lab.model';

@Injectable()
export class LabService extends DateRangeService {
	model:any;
	modelName:string = 'lab.json';

  constructor(@Inject(Http) http:Http) {
		super(http);

		this.model = (construct:any) => {
			return new Lab(construct);
		}
	}

}
