import { IComparator } from "./icomparator";
/**
 * 数值比较器。
 */
export declare class NumberComparator implements IComparator {
    compare(a: any, b: any): number;
    static create(): IComparator;
}
/**
 * 字符串比较器。
 */
export declare class StringComparator implements IComparator {
    compare(a: any, b: any): number;
    static create(): IComparator;
}
/**
 * 反向比较器。
 */
export declare class RevertComparator implements IComparator {
    private comparator;
    compare(a: any, b: any): number;
    constructor(comparator: IComparator);
    static create(comparator: IComparator): IComparator;
}
/**
 * 对象属性比较器。
 */
export declare class ObjectPropComparator implements IComparator {
    private prop;
    private comparator;
    compare(a: any, b: any): number;
    constructor(comparator: IComparator, prop: string);
    static create(comparator: IComparator, prop: string): IComparator;
}
