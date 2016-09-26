import { Rect } from "../rect";
import { Widget } from "./widget";
import { ScrollView } from "./scroll-view";
import { Layouter } from "../layouters/layouter";
export declare class ListView extends ScrollView {
    itemSpacing: number;
    itemHeight: number;
    childrenLayouter: Layouter;
    protected doDrawChildren(ctx: any): Widget;
    desireHeight: number;
    relayoutChildren(): Rect;
    protected _itemHeight: number;
    protected _itemSpacing: number;
    constructor();
    reset(type: string): Widget;
    static TYPE: string;
    private static recycleBinListView;
    static create(options?: any): ListView;
}
