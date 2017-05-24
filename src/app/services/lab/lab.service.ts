import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DateService } from '../shared/date.service';
import { Lab } from '../../shared/models/lab.model';

@Injectable()
export class LabService extends DateService {
	model:any;
	modelName:string = 'lab';

  constructor(@Inject(Http) http:Http) {
		super(http);

		this.model = (construct:any) => {
			return new Lab(construct);
		}
	}

}
