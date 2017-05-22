export class Lecture{
	private id:number;
	private date:Date;
	private topic:string;
	private reading:string;
	private video:string;
	private timeStart:string;
	private timeStop:string;

	constructor(model: any=null){
		this.id = model.id;
		this.date = model.date;
		this.topic = model.topic;
		this.reading = model.reading;
		this.video = model.video;
		this.timeStart = model.timeStart;
		this.timeStop = model.timeStop;
	}
}
