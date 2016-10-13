export class ConfirmationInfo {
	public w : number;
	public content : string;
	public confirmed : boolean;

	constructor(content:string, w?:number) {
		this.w = w;
		this.content = content;
		this.confirmed = false;
	}

	public static create(content:string, w?:number) {
		return new ConfirmationInfo(content, w);
	}
};
