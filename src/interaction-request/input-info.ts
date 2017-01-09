
/**
 * @class InputInfo
 * InteractionRequest.input的参数。
 */
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
		this.isValueValid = function(value) {
			return !!value;
		}
	}

	/**
	 * @method create
	 * @static
	 * 创建InputInfo对象。
	 *
     * @param {string} title 标题。
     * @param {string} value 缺省值。
     * @param {string} inputTips 输入提示（可选）。
     * @param {string} inputType 输入类型（可选）, "text"表示文本，"number"表示数值。
     * @param {number} w 宽度（单位为像素）（可选）。
     *
     * @return {InputInfo}
	 */
	public static create(title:string, value:string, inputTips?:string, inputType?:string, w?:number) {
		return new InputInfo(title, value, inputTips, inputType, w);
	}
};
