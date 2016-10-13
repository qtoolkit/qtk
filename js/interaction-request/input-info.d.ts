export declare class InputInfo {
    w: number;
    title: string;
    value: string;
    inputTips: string;
    inputType: string;
    isValueValid: Function;
    constructor(title: string, value: string, inputTips?: string, inputType?: string, w?: number);
    static create(title: string, value: string, inputTips?: string, inputType?: string, w?: number): InputInfo;
}
