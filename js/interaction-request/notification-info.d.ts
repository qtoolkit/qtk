/**
 * @class NotificationInfo
 * InteractionRequest.notify的参数。
 */
export declare class NotificationInfo {
    w: number;
    content: string;
    constructor(content: string, w?: number);
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
    static create(content: string, w?: number): NotificationInfo;
}
