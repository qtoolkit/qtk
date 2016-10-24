import { PassiveScrollableGroup } from "./passive-scrollable-group";
/**
 * 表格左边的行序数。
 */
export declare class TableIndex extends PassiveScrollableGroup {
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TableIndex;
}
