
/**
 * @class ConfirmationInfo
 * InteractionRequest.confirm的参数。
 */
export class ConfirmationInfo {
	public w : number;
	public content : string;
	public confirmed : boolean;

	constructor(content:string, w?:number) {
		this.w = w;
		this.content = content;
		this.confirmed = false;
	}

	/**
	 * @method create
	 * @static
	 * 创建ConfirmationInfo对象。
	 *
     * @param {string} content 要显示的文本信息。
     * @param {number} w 宽度（单位为像素）。
     *
     * @return {ConfirmationInfo}
	 */
	public static create(content:string, w?:number) : ConfirmationInfo{
		return new ConfirmationInfo(content, w);
	}
};
