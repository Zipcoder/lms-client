export class Event {

	private id:number;
	private date:Date;
	private event:string;
	private description:string;
	private timeStart:string;
	private timeStop:string;

	constructor(model:any=null){
		this.id = model.id;
		this.date = model.date;
		this.event = model.event;
		this.description = model.description;
		this.timeStart = model.timeStart;
		this.timeStop = model.timeStop;
	}
}
