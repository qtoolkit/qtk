import { Rect } from "../rect";
import { Widget } from "../controls/widget";
import { IViewModal } from "../mvvm/iview-modal";
export declare class TableColInfo {
    w: number;
    title: string;
    options: any;
    sortable: boolean;
    widgetType: string;
    constructor(title: string, widgetType: string, w: number, options: any, sortable?: boolean);
    static create(title: string, widgetType: string, w: number, options: any, sortable?: boolean): TableColInfo;
}
/**
 * 表格
 */
export declare class Table extends Widget {
    private _itemH;
    private _colsInfo;
    private _showIndexBar;
    private _templateRow;
    private _headerBarH;
    private _indexBarW;
    private _headerBar;
    private _indexBar;
    private _client;
    itemH: number;
    indexBarW: number;
    headerBarH: number;
    showIndexBar: boolean;
    resetColumns(): Table;
    addColumn(colInfo: TableColInfo): Table;
    getColumns(): Array<TableColInfo>;
    constructor();
    protected getTemplateRow(): Widget;
    bindData(viewModal: IViewModal): Widget;
    protected prepareUI(): void;
    protected onInit(): void;
    relayoutChildren(): Rect;
    dispose(): void;
    protected onReset(): void;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Table;
}
