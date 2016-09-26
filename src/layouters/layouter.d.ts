import { Rect } from "../rect";
import { Widget } from "../controls/widget";
/**
 * 子控件布局算法。
 */
export declare class Layouter {
    /**
     * 布局算法的名称。
     */
    type: string;
    /**
     * 转换成JSON数据。
     */
    toJson(): any;
    /**
     * 从JSON数据创建。
     */
    fromJson(json: any): void;
    /**
     * 设置参数。
     */
    setOptions(options: any): any;
    /**
     * 对子控件进行布局。
     * @param widget 父控件
     * @param children 只控件
     * @returns 全部子控件需要的区域。
     */
    layoutChildren(widget: Widget, children: Array<Widget>, rect: Rect): Rect;
    static evalValue(value: string, total: number): number;
    createParam(options?: any): any;
}
/**
 * Layouter的工厂。
 */
export declare class LayouterFactory {
    private static creators;
    static register(type: string, creator: Function): void;
    static create(type: string, options: any): Layouter;
    static createFromJson(json: any): Layouter;
}
