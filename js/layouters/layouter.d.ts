import { Rect } from "../rect";
import { Factory } from "../factory";
import { Widget } from "../controls/widget";
/**
 * 子控件布局算法。
 */
export declare class Layouter {
    /**
     * 布局算法的名称。
     */
    readonly type: string;
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
    createParam(options?: any): any;
    /**
     * 从JSON数据创建。
     */
    fromJson(json: any): Layouter;
    /**
     * 转换成JSON数据。
     */
    toJson(): any;
    static evalValue(value: string, total: number): number;
}
/**
 * Layouter的工厂。
 */
export declare class LayouterFactory extends Factory<Layouter> {
    private static factory;
    static register(type: string, creator: Function): void;
    static create(type: string, options?: any): Layouter;
    static createWithJson(json: any): Layouter;
}
export declare class LayouterParam {
    type: string;
    constructor(type: string);
    /**
     * 从JSON数据创建。
     */
    fromJson(json: any): LayouterParam;
    /**
     * 转换成JSON数据。
     */
    toJson(): any;
}
/**
 * LayouterParam的工厂。
 */
export declare class LayouterParamFactory extends Factory<LayouterParam> {
    private static factory;
    static register(type: string, creator: Function): void;
    static create(type: string, options?: any): LayouterParam;
    static createWithJson(json: any): LayouterParam;
}
