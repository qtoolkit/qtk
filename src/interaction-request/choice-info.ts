export class ChoiceOption {
	public text:string;
	public iconURL:string;

	constructor(text:string, iconURL?:string) {
		this.text = text;
		this.iconURL = iconURL || null;
	}

	public static create(text:string, iconURL?:string) {
		return new ChoiceOption(text, iconURL);
	}
};

export class ChoiceInfo {
	public w : number;
	public h : number;
	public value : any;
	public title : string;
	public multiple:boolean;
	public options : Array<ChoiceOption>;

	public resetOptions() {
		this.options = [];
	}

	public addOption(text:string, iconURL?:string) {
		this.options.push(ChoiceOption.create(text, iconURL));
	}

	constructor(title:string, multiple?:boolean, w?:number, h?:number) {
		this.w = w;
		this.h = h;
		this.title = title;
		this.multiple = multiple;
		this.resetOptions();
	}

	public static create(title:string, multiple?:boolean, w?:number, h?:number) {
		return new ChoiceInfo(title, multiple, w, h);
	}
};

