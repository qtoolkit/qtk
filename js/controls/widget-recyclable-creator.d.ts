import { Widget } from "./widget";
import { RecyclableCreator } from "../recyclable-creator";
/**
 * 可循环的创建器。
 */
export declare class WidgetRecyclableCreator extends RecyclableCreator<Widget> {
    protected _type: string;
    constructor(ctor: any);
    create(options: any): Widget;
    static create(ctor: any): WidgetRecyclableCreator;
}
