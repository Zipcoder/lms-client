export class Lab {
	private _id:number;
	get id(){
		return this._id;
	}
	private _date:Date;
	private _title:string;
	get title(){
		return this._title;
	}
	private _module:string;
	private _repo:string;
	private _repoUrl:string;

	constructor(model: any=null){
		this._id = model.id;
		this._date = model.date;
		this._title = model.title;
		this._module = model.module;
		this._repo = model.repo;
		this._repoUrl = model.repoUrl;
	}
}
