import { Lab } from '../../../shared/models/lab.model';

export class Module {
	private _title:string;
	set title(title:string){
		this._title = title;
	}
	get title(){
		return this._title;
	}

	private _microlabs:Lab[];
	set microlabs(labs:Lab[]){
		this._microlabs = labs;
	}
	get microLabs(){
		return this._microlabs;
	}

	private _labs:Lab[];
	set labs(labs:Lab[]){
		this._labs = labs;
	}
	get labs(){
		return this._labs;
	}

	constructor(){}

}
