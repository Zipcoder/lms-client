export class Lab {
	private _id:number;
	private _date:Date;
	private _title:string;
	get title(){
		return this._title;
	}
	private _module:string;
	private _repo:string;

	constructor(model: any=null){
		this._id = model.id;
		this._date = model.date;
		this._title = model.title;
		this._module = model.module;
		this._repo = model.repo;
	}
}
