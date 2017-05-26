import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DateService } from '../shared/date.service';
import { Lab } from '../../shared/models/lab.model';
import { Module } from './models/module.model';

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

	private mapListToModuleModelList(list: Array<Object>){
			list.forEach((item, index) => {
				list[index] = this.mapModuleModel(item);
			});

			return list;
	}

	private mapModuleModel(model:any){
		let module = new Module();
		module.title = model.module;
		module.microlabs = this.mapListToModelList(model.microlabs) as Array<Lab>;
		module.labs = this.mapListToModelList(model.labs) as Array<Lab>;

		return module;
	}

	public findModules(){
		return new Promise((resolve, reject) => {
			let url = this.config + '/' + this.modelName + '/module.json'; //remove json extention when REST service is complete

			console.log('URL', url);

			this.http.get(url)
				.map(res => res.json())
				.subscribe(res => {
					if (res.error) {
						reject(res.error);
					}else{
						resolve(this.mapListToModuleModelList(res));
					}
				});
		});
	}
}
