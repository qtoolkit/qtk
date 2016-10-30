import { IComparator } from "./icomparator";
export declare class DelegateComparator implements IComparator {
    protected _compare: Function;
    compare(a: any, b: any): number;
    private constructor(compare);
    static create(compare: Function): DelegateComparator;
}
