export declare class ConfirmationInfo {
    w: number;
    content: string;
    confirmed: boolean;
    constructor(content: string, w?: number);
    static create(content: string, w?: number): ConfirmationInfo;
}
