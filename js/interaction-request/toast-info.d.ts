export declare class ToastInfo {
    w: number;
    text: string;
    duration: number;
    constructor(text: string, duration?: number, w?: number);
    static create(text: string, duration?: number, w?: number): ToastInfo;
}
