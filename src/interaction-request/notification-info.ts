export class NotificationInfo {
	public w : number;
	public content : string;

	constructor(content:string, w?:number) {
		this.w = w;
		this.content = content;
	}

	public static create(content:string, w?:number) {
		return new NotificationInfo(content, w);
	}
};
