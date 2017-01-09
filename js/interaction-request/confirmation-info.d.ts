/**
 * @class ConfirmationInfo
 * InteractionRequest.confirm的参数。
 */
export declare class ConfirmationInfo {
    w: number;
    content: string;
    confirmed: boolean;
    constructor(content: string, w?: number);
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
    static create(content: string, w?: number): ConfirmationInfo;
}
