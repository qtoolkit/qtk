import { Rect } from '../rect';
import { Widget } from '../controls/widget';
import { Layouter } from './layouter';
/**
 * 简单的布局器。
 */
export declare class SimpleLayouter extends Layouter {
    readonly type: string;
    layoutChildren(widget: Widget, children: Array<Widget>, rect: Rect): Rect;
    layoutChild(child: Widget, r: Rect): void;
    createParam(options?: any): SimpleLayouterParam;
    static create(options?: any): SimpleLayouter;
}
/**
 * 简单的布局器的参数。
 *
 * 如果父控件使用SimpleLayouter布局器，则子控件需要把layoutParam设置为SimpleLayouterParam。
 *
 * 对于x/y/w/h参数：
 * *.如果以px结尾，则直接取它的值。
 * *.如果以%结尾，则表示父控件的宽度/高度的百分比。
 * *.如果以-开头，则表示父控件的宽度/高度的减去该值。
 *
 * x也可以为『center』，表示水平居中。
 * y也可以为『middle』，表示垂直居中。
 *
 * 示例：
 *
 * 父控件的宽度为800，高度为600:
 *
 * param.x = "10px"  则 x = 10;
 * param.x = "10%"   则 x = 80;
 * param.x = "-10%"  则 x = 720;
 * param.x = "-10px" 则 x = 790;
 *
 */
export declare class SimpleLayouterParam {
    type: string;
    x: string;
    y: string;
    w: string;
    h: string;
    minW: number;
    maxW: number;
    minH: number;
    maxH: number;
    constructor(x: string, y: string, w: string, h: string);
    static create(opts: any): SimpleLayouterParam;
}
