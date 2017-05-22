import { Injectable, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base.service';

@Injectable()
export class DateRangeService extends BaseService{

  constructor(@Inject(Http) http:Http) {
		super(http);
	}

	findByDateRange(start: number, stop:number) {
		return new Promise((resolve, reject) => {
			let url = this.config + '/' + this.modelName;

/*
			if (start && stop) {
				url = url + '?start=' + start + '&stop=' + stop;
			}
*/
			console.log('URL', url);

			this.http.get(url)
				.map(res => res.json())
				.subscribe(res => {
					if (res.error) {
						reject(res.error);
					} else {
						resolve(this.mapObjectToObjectOfModels(res));
					}
				});
		});
	}

	mapObjectToObjectOfModels (list: Object) {

		for (let date in list) {
    	if (list.hasOwnProperty(date)) {
        //console.log(list[date]);

				list[date].forEach((item, index) => {
		      list[date][index] = this.mapModel(item);
		    });

    	}
		}

    return list;
  }

}
