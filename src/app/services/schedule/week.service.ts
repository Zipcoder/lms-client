import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../shared/base.service';
import { Week } from './models/week.model';

@Injectable()
export class WeekService extends BaseService {

	model: any;
	modelName = 'week.json';

	constructor(@Inject(Http) http:Http) {
		super(http);

		this.model = (construct: any) => {
      return new Week(construct);
    };
	}
}
