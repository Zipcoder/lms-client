import { Http, Headers } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export abstract class BaseService {
  config:String;
  http:Http;
  modelName:string;
  model:any;

  constructor(@Inject(Http) http: Http) {
    this.http   = http;
    this.config = './assets/data'
  }

  mapListToModelList (list: Array<Object>) {
    list.forEach((item, index) => {
      list[index] = this.mapModel(item);
    });

    return list;
  }

  mapModel(model: any) {
    return this.model(model);
  }

  findById(id: number, populate: Array<string> = null) {
    return new Promise((resolve, reject) => {
      let url = this.config + '/' + this.modelName + '/' + id;

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
            resolve(this.mapModel(res));
          }
        });
    });
  }

  find(populate: Array<string> = null) {
    return new Promise((resolve, reject) => {
      let url = this.config + '/' + this.modelName;
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

  upsert(model: any) {
    return new Promise((resolve, reject) => {
      let url = this.config + '/api/' + this.modelName;

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      this.http.put(url, JSON.stringify(model), {headers : headers})
        .map(res => res.json())
        .subscribe(res => {
          console.log(res);
          if (res.error) {
            reject(res.error);
          } else {
            resolve(this.mapModel(res));
          }
        });
    });
  }

  create(model: any) {
    return new Promise((resolve, reject) => {
      let url = this.config + '/' + this.modelName;

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      this.http.post(url, JSON.stringify(model), {headers : headers})
        .map(res => res.json())
        .subscribe(res => {
          console.log(res);
          if (res.error) {
            reject(res.error);
          } else {
            resolve(this.mapModel(res));
          }
        });
    });
  }
}
