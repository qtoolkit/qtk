import { PassiveScrollableGroup } from "./passive-scrollable-group";
/**
 * 表格头
 */
export declare class TableHeader extends PassiveScrollableGroup {
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TableHeader;
}
