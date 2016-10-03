import { Rect } from "../rect";
import { Widget } from "./widget";
import { MatrixStack } from "../matrix-stack";
/**
 * 页面管理器。管理多个页面，只有一个页面处于活跃状态，仅该页面可见，可以处理事件。
 * value表示该活跃页面的索引。
 */
export declare class Pages extends Widget {
    value: number;
    setValueByPage(page: Widget): Widget;
    readonly target: Widget;
    relayoutChildren(): Rect;
    protected drawChildren(ctx: any): Widget;
    protected findEventTargetChild(x: number, y: number, ctx: MatrixStack): Widget;
    protected onReset(): void;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Pages;
}
