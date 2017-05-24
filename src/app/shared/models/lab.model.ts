export class Lab {
	private id:number;
	private date:Date;
	private title:string;
	private module:string;
	private repo:string;

	constructor(model: any=null){
		this.id = model.id;
		this.date = model.date;
		this.title = model.title;
		this.module = model.module;
		this.repo = model.repo;
	}
}
