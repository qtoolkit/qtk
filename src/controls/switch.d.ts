import { Style } from "../style";
import { Widget } from "./widget";
import Events = require("../events");
export declare class Switch extends Widget {
    protected _offset: number;
    protected _switching: boolean;
    protected offset: number;
    protected readonly minOffset: number;
    protected readonly maxOffset: number;
    protected drawColorBackground(ctx: any, style: Style): Widget;
    protected dispatchPointerUp(evt: Events.PointerEvent): void;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Switch;
}
