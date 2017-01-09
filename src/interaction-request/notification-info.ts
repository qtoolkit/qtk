
/**
 * @class NotificationInfo
 * InteractionRequest.notify的参数。
 */
export class NotificationInfo {
	public w : number;
	public content : string;

	constructor(content:string, w?:number) {
		this.w = w;
		this.content = content;
	}

	/**
	 * @method create
	 * @static
	 * 创建NotificationInfo对象。
	 *
     * @param {string} content 要显示的文本信息。
     * @param {number} w 宽度（单位为像素）。
     *
     * @return {NotificationInfo}
	 */
	public static create(content:string, w?:number) : NotificationInfo {
		return new NotificationInfo(content, w);
	}
};
