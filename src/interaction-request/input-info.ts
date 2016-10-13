export class InputInfo {
	public w : number;
	public title : string;
	public value : string;
	public inputTips : string;
	public inputType : string;
	public isValueValid : Function;

	constructor(title:string, value:string, inputTips?:string, inputType?:string, w?:number) {
		this.w = w;
		this.value = value;
		this.title = title;
		this.inputTips = inputTips;
		this.inputType = inputType;
	}

	public static create(title:string, value:string, inputTips?:string, inputType?:string, w?:number) {
		return new InputInfo(title, value, inputTips, inputType, w);
	}
};
