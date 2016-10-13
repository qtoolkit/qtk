export declare class NotificationInfo {
    w: number;
    content: string;
    constructor(content: string, w?: number);
    static create(content: string, w?: number): NotificationInfo;
}
