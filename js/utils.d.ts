export declare function stableSort(arr: any, comp: any): any;
export declare function assign(target: any, other: any): any;
export declare function aRemove(arr: any, obj: any): boolean;
declare global  {
    interface Array<T> {
        stableSort(comp: Function): any;
        remove(obj: any): boolean;
        forEachR(func: Function): any;
    }
}
export {};
