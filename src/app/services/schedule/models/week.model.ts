export class Week {
	id: number;
	week: number;
	active: boolean;

	constructor(model: any = null){
		if(model){
			this.id = model.id;
			this.week = model.week;
			this.active = model.active;
		}
	}
}
