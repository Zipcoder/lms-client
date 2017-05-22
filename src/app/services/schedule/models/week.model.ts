export class Week {

	readonly id: number;
	readonly week: number;
	readonly active: boolean;

	constructor(model: any = null){
		if(model){
			this.id = model.id;
			this.week = model.week;
			this.active = model.active;
		}
	}
}
