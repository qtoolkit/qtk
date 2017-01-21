export declare class ChoiceOption {
    text: string;
    iconURL: string;
    constructor(text: string, iconURL?: string);
    static create(text: string, iconURL?: string): ChoiceOption;
}
/**
 * @class ChoiceInfo
 * InteractionRequest.choice 的参数。
 */
export declare class ChoiceInfo {
    w: number;
    h: number;
    value: any;
    title: string;
    multiple: boolean;
    options: Array<ChoiceOption>;
    resetOptions(): void;
    addOption(text: string, iconURL?: string): void;
    constructor(title: string, multiple?: boolean, w?: number, h?: number);
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
    static create(title: string, multiple?: boolean, w?: number, h?: number): ChoiceInfo;
}
