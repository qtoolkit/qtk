import { Widget } from "./widget";
import { Style } from "../style";
export declare class CheckButton extends Widget {
    constructor(type?: string);
    value: boolean;
    protected getStyleType(): string;
    protected drawText(ctx: any, style: Style): Widget;
    protected drawImage(ctx: any, style: Style): Widget;
    protected dispatchClick(evt: any): void;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): CheckButton;
}
