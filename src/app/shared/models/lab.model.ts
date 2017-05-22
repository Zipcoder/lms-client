export class Lab {
	private id:number;
	private date:Date;
	private title:string;
	private repo:string;

	constructor(model: any=null){
		this.id = model.id;
		this.date = model.date;
		this.title = model.title;
		this.repo = model.repo;
	}
}
