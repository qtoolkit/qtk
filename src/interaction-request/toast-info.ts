
export class ToastInfo {
	public w : number;
	public text : string;
	public duration:number;

	constructor(text:string, duration?:number, w?:number) {
		this.text = text;
		this.duration = duration || 2000;
		this.w = w;
	}

	public static create(text:string, duration?:number, w?:number) {
		return new ToastInfo(text, duration, w);
	}
};
