import { ListView } from "../controls/list-view";
/**
 * 表格
 */
export declare class TableClient extends ListView {
    protected _colsWidth: Array<number>;
    colsWidth: Array<number>;
    constructor();
    protected onReset(): void;
    static TYPE: string;
    private static rBin;
    static create(options?: any): TableClient;
}
