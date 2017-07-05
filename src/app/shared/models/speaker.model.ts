export class Speaker {
	private id:number;
	private date:Date;
	private speaker:string;
	private speakerUrl:string;
	private company:string;
	private companyUrl:string;
	private topic:string;
	private timeStart:string;
	private timeStop:string;

	constructor(model:any=null){
		this.id = model.id;
		this.date = model.date;
		this.speaker = model.speaker;
		this.speakerUrl = model.speakerUrl;
		this.company = model.company;
		this.companyUrl = model.companyUrl;
		this.topic = model.topic;
		this.timeStart = model.timeStart;
		this.timeStop = model.timeStop;
	}
}
