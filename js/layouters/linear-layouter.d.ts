import { Rect } from '../rect';
import { Align, Orientation } from '../consts';
import { Widget } from '../controls/widget';
import { Layouter, LayouterParam } from './layouter';
/**
 * 线性布局器。可以设置为水平和垂直两个方向。
 */
export declare class LinearLayouter extends Layouter {
    /**
     * 控件之间的间距。
     */
    spacing: number;
    /**
     * 布局的方向。
     */
    orientation: Orientation;
    readonly type: string;
    /**
     * 设置参数。
     */
    setOptions(options: any): any;
    layoutChildren(widget: Widget, children: Array<Widget>, rect: Rect): Rect;
    layoutChild(child: Widget, r: Rect, index: number): void;
    createParam(options?: any): LinearLayouterParam;
    static createH(spacing: number): LinearLayouter;
    static createV(spacing: number): LinearLayouter;
    static createVWithOptions(options: any): LinearLayouter;
    static createHWithOptions(options?: any): LinearLayouter;
}
/**
 * Linear布局器的参数。
 *
 * 如果父控件使用LinearLayouter布局器，则子控件需要把layoutParam设置为LinearLayouterParam。
 *
 * 对于w参数：
 * *.如果以px结尾，则直接取它的值。
 * *.如果以%结尾，则表示剩余空间的宽度/高度的百分比。
 *
 */
export declare class LinearLayouterParam extends LayouterParam {
    /**
     * 控件的宽度。
     */
    w: string;
    /**
     * 控件的高度。
     */
    h: string;
    /**
     * 控件的对齐方式。
     * 对于水平布局的情况，对齐方式决定控件的上下位置。
     * 对于垂直布局的情况，对齐方式决定控件的左右位置。
     */
    align: Align;
    /**
     * 与前一个控件之间的间距。
     */
    spacing: number;
    /**
     * 控件的位置。
     * 对于水平布局的情况，position>0，从左边开始排列，position<0，从右边开始排列。
     * 对于垂直布局的情况，position>0，从顶部开始排列，position<0，从底部开始排列。
     */
    position: number;
    constructor(type: string, w: string, h: string, spacing: number, align: Align, position: number);
    static createWithOptions(opts: any): LinearLayouterParam;
    static TYPE: string;
    static defParam: LinearLayouterParam;
    static createWithType(type: string, opts: any): LinearLayouterParam;
    static create(w: string | number, h: string | number, spacing?: number, align?: Align, position?: number): LinearLayouterParam;
}
