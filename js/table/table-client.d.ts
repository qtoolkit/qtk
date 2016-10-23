import { Rect } from "../rect";
import { Range } from "../range";
import { Style } from "../style";
import Events = require("../events");
import { MatrixStack } from "../matrix-stack";
import { ListView } from "../controls/list-view";
/**
 * 表格内容区域
 */
export declare class TableClient extends ListView {
    protected _colsWidth: Array<number>;
    protected _selectedCols: Range;
    protected _selectedRows: Range;
    colsWidth: Array<number>;
    selectedRows: Range;
    selectedCols: Range;
    protected xToCol(x: number): number;
    protected yToRow(y: number): number;
    protected calcSelectRect(): Rect;
    protected setSelectedRows(first: number, second: number): TableClient;
    protected setSelectedCols(first: number, second: number): TableClient;
    protected updateSelection(x: number, y: number, updateFirst: boolean, updateSecond: boolean): void;
    protected dispatchPointerDown(evt: Events.PointerEvent, ctx: MatrixStack): void;
    protected dispatchPointerMove(evt: Events.PointerEvent, ctx: MatrixStack): void;
    protected drawGrid(ctx: any, style: Style): void;
    protected drawSelection(ctx: any, style: Style): void;
    protected afterDrawChildren(ctx: any): void;
    constructor();
    protected onReset(): void;
    static TYPE: string;
    private static rBin;
    static create(options?: any): TableClient;
}
