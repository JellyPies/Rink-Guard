export class Alerts {
	alert ?: Alert[];
}

export class Alert {
	headline?:string;
	msgtype?: string;
	severity?: string;
	urgency?: string;
	areas?:string;
	category?:string;
	certainty?:string;
	event?:string;
	note?: string;
	effective?: string;
	expires?: string;
	desc?: string;
	instruction?: string;
}