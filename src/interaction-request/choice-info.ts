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

/**
 * @class ChoiceInfo 
 * InteractionRequest.choice 的参数。
 */
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

	/**
	 * @method create
	 * @static
	 * 创建ChoiceInfo对象。
	 *
     * @param {string} title 标题
     * @param {boolean} multiple 是否多选。
     * @param {number} w 宽度（单位为像素）。
     * @param {number} h 高度（单位为像素）。
     *
     * @return {ToastInfo}
	 */
	public static create(title:string, multiple?:boolean, w?:number, h?:number) {
		return new ChoiceInfo(title, multiple, w, h);
	}
};

