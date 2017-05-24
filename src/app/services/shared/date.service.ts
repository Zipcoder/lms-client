import { Injectable, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base.service';

@Injectable()
export class DateService extends BaseService {

	constructor( @Inject(Http) http: Http) {
		super(http);
	}

	mapObjectToObjectOfModels(list: Object) {

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

	findByDate(date:string, populate: Array<string> = null) {
		return new Promise((resolve, reject) => {
      let url = this.config + '/' + this.modelName + '/' + date + '.json'; //json extention will need to be removed when REST service is created

      if (populate) {
        url = url + '?populate=' + populate.join(', ');
      }

      console.log('URL', url);

      this.http.get(url)
        .map(res => res.json())
        .subscribe(res => {
          if (res.error) {
            reject(res.error);
          } else {
            resolve(this.mapListToModelList(res));
          }
        });
    });
	}

	findByDateRange(start: number, stop: number, populate: Array<string> = null) {
		return new Promise((resolve, reject) => {
			let url = this.config + '/' + this.modelName + '.json'; //json extention will need to be removed when REST service is created

			if (populate) {
        url = url + '?populate=' + populate.join(', ');
      }

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
}
