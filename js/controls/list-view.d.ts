import { Rect } from "../rect";
import { Widget } from "./widget";
import { ScrollView } from "./scroll-view";
import { Layouter } from "../layouters/layouter";
export declare class ListView extends ScrollView {
    itemSpacing: number;
    itemHeight: number;
    childrenLayouter: Layouter;
    protected doDrawChildren(ctx: any): Widget;
    readonly desireHeight: number;
    relayoutChildren(): Rect;
    protected _itemHeight: number;
    protected _itemSpacing: number;
    constructor();
    protected onReset(): void;
    static TYPE: string;
    private static recycleBinListView;
    static create(options?: any): ListView;
}
