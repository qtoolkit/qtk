import { IFilter } from "./ifilter";
export declare class DelegateFilter implements IFilter {
    protected _check: Function;
    check(data: any): boolean;
    private constructor(check);
    static create(check: Function): DelegateFilter;
}
