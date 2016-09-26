import { Rect } from '../rect';
import { Widget } from '../controls/widget';
import { Layouter } from './layouter';
/**
 * 列表布局器。
 */
export declare class ListLayouter extends Layouter {
    /**
     * 列表项的高度。
     */
    h: number;
    /**
     * 列表项与前一项的间距。
     */
    spacing: number;
    private rect;
    type: string;
    constructor();
    /**
     * 设置参数。
     */
    setOptions(options: any): any;
    layoutChildren(widget: Widget, children: Array<Widget>, rect: Rect): Rect;
    createParam(options?: any): ListLayouterParam;
    static create(options: any): ListLayouter;
}
/**
 * 列表布局器的参数。
 *
 * 如果父控件使用ListLayouter布局器，则子控件需要把layoutParam设置为ListLayouterParam。
 *
 */
export declare class ListLayouterParam {
    type: string;
    /**
     * 列表项的高度。
     */
    h: number;
    /**
     * 列表项与前一项的间距。
     */
    spacing: number;
    constructor(h: number, spacing: number);
    static create(opt: any): ListLayouterParam;
}
