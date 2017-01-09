/**
 * @class ToastInfo
 * InteractionRequest.toast的参数。
 */
export declare class ToastInfo {
    w: number;
    text: string;
    duration: number;
    constructor(text: string, duration?: number, w?: number);
    /**
     * @method create
     * @static
     * 创建ToastInfo对象。
     *
     * @param {string} text 要显示的文本信息。
     * @param {number} duration 显示的时间（单位为毫秒）。
     * @param {number} w 宽度（单位为像素）。
     *
     * @return {ToastInfo}
     */
    static create(text: string, duration?: number, w?: number): ToastInfo;
}
