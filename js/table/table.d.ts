import { Rect } from "../rect";
import { Widget } from "../controls/widget";
import { TableIndex } from "./table-index";
import { TableClient } from "./table-client";
import { TableHeader } from "./table-header";
import { IViewModal } from "../mvvm/iview-modal";
/**
 * 描述表格中某列的信息。
 */
export declare class TableColInfo {
    /**
     * 初始宽度。
     */
    w: number;
    /**
     * 标题
     */
    title: string;
    /**
     * 用于创建该列控件的参数。比如输入类型和数据绑定规则。
     */
    options: any;
    /**
     * 本列是否启用点击排序功能，如果启用，请指定sortKey。
     */
    sortKey: string;
    /**
     * 控件的类型。
     */
    widgetType: string;
    constructor(title: string, widgetType: string, w: number, options: any, sortKey?: string);
    static create(title: string, widgetType: string, w: number, options: any, sortKey?: string): TableColInfo;
}
/**
 * 表格。表格由三部分组成：
 * 1.表头(TableHeader):  在最上方，显示每一列的标题，可以点击触发按该列进行排序。
 * 2.行序号(TableIndex): 在左边，显示每一行的序号。
 * 3.客户区(TableClient):占据表的主体部分，显示表格的内容。
 */
export declare class Table extends Widget {
    /**
     * 表头
     */
    readonly headerBar: TableHeader;
    private _headerBar;
    /**
     * 行序号
     */
    readonly indexBar: TableIndex;
    private _indexBar;
    /**
     * 客户区
     */
    readonly client: TableClient;
    private _client;
    /**
     * 每行的高度(在绑定数据之前设置才有效)。
     */
    rowH: number;
    private _rowH;
    /**
     * 行序号的宽度(在绑定数据之前设置才有效)。
     */
    indexBarW: number;
    private _ibW;
    /**
     * 表头的高度(在绑定数据之前设置才有效)。
     */
    headerBarH: number;
    private _hbH;
    /**
     * 是否显示行序号(在绑定数据之前设置才有效)。
     */
    showIndexBar: boolean;
    private _siB;
    /**
     * 清除所有列。
     */
    resetColumns(): Table;
    /**
     * 增加一列。
     */
    addColumn(colInfo: TableColInfo): Table;
    /**
     * 获取所有列。
     */
    getColumns(): Array<TableColInfo>;
    constructor();
    protected getTemplateRow(): Widget;
    bindData(viewModal: IViewModal): Widget;
    protected onHeaderItemResized(): void;
    protected onHeaderItemResizing(): void;
    protected prepareUI(): void;
    protected onInit(): void;
    relayoutChildren(): Rect;
    dispatchWheel(evt: any): void;
    dispose(): void;
    protected onReset(): void;
    private _colsInfo;
    private _templateRow;
    protected static defProps: {} & {
        _x: number;
        _y: number;
        _z: number;
        _w: number;
        _h: number;
        _state: number;
        _value: number;
        _enable: boolean;
        _visible: boolean;
        _selected: boolean;
        _opacity: number;
        _scaleX: number;
        _scaleY: number;
        _pivotX: number;
        _pivotY: number;
        _rotation: number;
        _focusable: boolean;
        _sensitive: boolean;
        _tips: any;
        _text: any;
        _name: any;
        _tag: any;
        _hitTestResult: number;
        _isWindow: boolean;
        _mode: number;
        _styleType: any;
        _lp: number;
        _tp: number;
        _rp: number;
        _bp: number;
    } & {
        _rowH: number;
        _ibW: number;
        _hbH: number;
        _siB: boolean;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Table;
}
