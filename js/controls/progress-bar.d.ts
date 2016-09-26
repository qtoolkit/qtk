import { Widget } from "./widget";
import { Style } from "../style";
export declare enum ProgressBarType {
    V = 1,
    VERTICAL = 1,
    H = 2,
    HORIZONTAL = 2,
    C = 3,
    CIRCLE = 3,
}
export declare class ProgressBar extends Widget {
    barType: ProgressBarType;
    textFormater: (value: number) => string;
    constructor(type?: string);
    readonly text: string;
    value: any;
    protected drawColorForeGround(ctx: any, style: Style): Widget;
    protected drawImage(ctx: any, style: Style): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ProgressBar;
}
