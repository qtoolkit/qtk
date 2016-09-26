import { Rect } from "../rect";
import { Widget } from "./widget";
import { MatrixStack } from "../matrix-stack";
export declare class Pages extends Widget {
    value: number;
    setValueByPage(page: Widget): Widget;
    target: Widget;
    relayoutChildren(): Rect;
    protected drawChildren(ctx: any): Widget;
    protected findEventTargetChild(x: number, y: number, ctx: MatrixStack): Widget;
    reset(type: string): Widget;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(): Pages;
}
