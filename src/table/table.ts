
import {Rect} from "../base/rect";
import {Point} from "../base/point";
import {Style} from "../base/style";
import Events = require("../base/events");
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

import {TableRow} from "./table-row";
import {TableIndex} from "./table-index";
import {TableClient} from "./table-client";
import {TableHeader} from "./table-header";
import {TableIndexItem} from "./table-index-item";
import {TableHeaderItem} from "./table-header-item";
import {IViewModel, ICollectionViewModel, UpdateTiming, BindingMode} from "../mvvm/iview-model";

/**
 * 描述表格中某列的信息。
 */
export class TableColInfo {
	/**
	 * 初始宽度。
	 */
	public w:number;
	
	/**
	 * 标题
	 */
	public title:string;
	
	/**
	 * 用于创建该列控件的参数。比如输入类型和数据绑定规则。
	 */
	public options : any;

	/**
	 * 本列是否启用点击排序功能，如果启用，请指定sortKey。
	 */
	public sortKey : string;

	/**
	 * 控件的类型。
	 */
	public widgetType : string;

	constructor(title:string, widgetType:string, w:number, options:any, sortKey?:string) {
		this.w = w;
		this.title = title;
		this.sortKey = sortKey;
		this.options = options || {};
		this.widgetType = widgetType || "label" ;
	}
	
	public static create(title:string, widgetType:string, w:number, options:any, sortKey?:string) {
		return new TableColInfo(title, widgetType, w, options, sortKey);
	}
};

/**
 * 表格。表格由三部分组成：
 * 1.表头(TableHeader):  在最上方，显示每一列的标题，可以点击触发按该列进行排序。
 * 2.行序号(TableIndex): 在左边，显示每一行的序号。
 * 3.客户区(TableClient):占据表的主体部分，显示表格的内容。
 */
export class Table extends Widget {
	/**
	 * 表头
	 */
	public get headerBar() : TableHeader {
		return this._headerBar;
	}
	private _headerBar : TableHeader;
	
	/**
	 * 行序号
	 */
	public get indexBar() : TableIndex {
		return this._indexBar;
	}
	private _indexBar : TableIndex;

	/**
	 * 客户区
	 */
	public get client() : TableClient {
		return this._client;
	}
	private _client : TableClient;

	/**
	 * 每行的高度(在绑定数据之前设置才有效)。
	 */
	public set rowH(value:number) {
		this._rowH = value;
	}
	public get rowH() : number {
		return this._rowH;
	}
	private _rowH: number;

	/**
	 * 行序号的宽度(在绑定数据之前设置才有效)。
	 */
	public set indexBarW(value:number) {
		this._ibW = value;
	}
	public get indexBarW() : number {
		return this._ibW;
	}
	private _ibW  : number;

	/**
	 * 表头的高度(在绑定数据之前设置才有效)。
	 */
	public set headerBarH(value:number) {
		this._hbH = value;
	}
	public get headerBarH() : number {
		return this._hbH;
	}
	private _hbH : number;

	/**
	 * 是否显示行序号(在绑定数据之前设置才有效)。
	 */
	public set showIndexBar(value:boolean) {
		this._siB = value;
	}
	public get showIndexBar() : boolean {
		return this._siB;
	}
	private _siB : boolean;

	/**
	 * 清除所有列。
	 */
	public resetColumns() : Table {
		this._colsInfo = [];
	
		return this;
	}
	
	/**
	 * 增加一列。
	 */
	public addColumn(colInfo:TableColInfo) : Table {
		this._colsInfo.push(colInfo);

		return this;
	}
	
	/**
	 * 获取所有列。
	 */
	public getColumns() : Array<TableColInfo> {
		return this._colsInfo;
	}

	constructor() {
		super(Table.TYPE);
	}

	protected getTemplateRow() : Widget {
		if(!this._templateRow) {
			var row = TableRow.create({w:this.w, h:this.rowH, app:this.app});
			this._colsInfo.forEach((item:TableColInfo) => {
				var widget = WidgetFactory.create(item.widgetType, item.options);
				widget.styleType = widget.type + ".table";
				row.addChild(widget, true);
			});
			this._templateRow = row;
		}
		
		return this._templateRow;
	}

	public bindData(viewModel:IViewModel) : Widget {
		this.prepareUI();
		var client = this._client;
		
		if(client) {
			client.templateItem = this.getTemplateRow();
			client.removeAllChildren();
			client.bindData(viewModel);
		}
		
		var itemH = this.rowH;
		var indexBar = this._indexBar;
		if(indexBar) {
			indexBar.removeAllChildren();
			client.children.forEach((item:Widget, index:number) => {
				indexBar.addChild(TableIndexItem.create({text:index, h:itemH}), true);
			});
			indexBar.relayoutChildren();
		}

		return this;
	}

	protected onHeaderItemResized() {
		var client = this.client;
		var colsWidth = this.headerBar.children.map((item:Widget) => {
			return item.w;
		});
		client.colsWidth = colsWidth;
		client.relayoutChildren();

		this.headerBar.relayoutChildren();
	}
	
	protected onHeaderItemResizing() {
		this.headerBar.relayoutChildren();
	}

	protected prepareUI() {
		var itemH = this.rowH;
		this.removeAllChildren();
		
		var showIndexBar = this.showIndexBar;
		this._headerBar = TableHeader.create({h:this.headerBarH, w:this.w});
		this._client = TableClient.create({itemH:itemH, w:this.w-this.indexBarW, h:this.h-this.headerBarH});
		
		this.addChild(this._client, false);
		this.addChild(this._headerBar, false);
		if(showIndexBar) {
			this._indexBar = TableIndex.create({w:this.indexBarW, h:this.h});
			this.addChild(this._indexBar , false);
		}
	
		var headerBar = this._headerBar;
		this._colsInfo.forEach((item:TableColInfo) => {
			let headerItem = TableHeaderItem.create({w:item.w, text:item.title, sortKey:item.sortKey});	
			headerBar.addChild(headerItem);
			headerItem.on(Events.RESIZE_END, evt => {
				this.onHeaderItemResized();
			});
			headerItem.on(Events.RESIZE_CANCEL, evt => {
				this.onHeaderItemResized();
			});
			headerItem.on(Events.RESIZING, evt => {
				this.onHeaderItemResizing();
			});
			headerItem.on(Events.SORT, evt => {
				this.dispatchEvent(evt);
			});
		});

		var client = this._client;
		var indexBar = this._indexBar;
		var headerBar = this._headerBar;
		client.on(Events.SCROLL, (evt:Events.ScrollEvent) => {
			if(indexBar) {
				indexBar.offsetY = evt.offsetY;
			}
			headerBar.offsetX = evt.offsetX;
			this.requestRedraw();
		});

		this.relayoutChildren();
	}

	protected onInit() {
		super.onInit();
	}

	public relayoutChildren() : Rect {
		if(!this.w || !this.h) {
			return null;
		}

		var w = 0;
		var h = 0;
		var x = this.leftPadding;
		var y = this.topPadding;
		var client = this._client;
		var indexBar = this._indexBar;
		var headerBar = this._headerBar;
		var indexBarW = this.indexBarW;
		var headerBarH = this.headerBarH;

		var yy = y + headerBarH;
		var xx = this.showIndexBar ? x + indexBarW : x;
		w = this.w - xx - this.rightPadding;
		h = this.h - yy - this.bottomPadding;
	
		var colsWidth = null;
		if(headerBar) {
			headerBar.moveResizeTo(xx, y, w, headerBarH);
			headerBar.relayoutChildren();
			colsWidth = headerBar.children.map((item:Widget) => {
				return item.w;
			});
		}

		if(indexBar) {
			indexBar.moveResizeTo(x, yy, indexBarW, h);
			indexBar.relayoutChildren();
		}

		if(client) {
			client.colsWidth = colsWidth;
			client.moveResizeTo(xx, yy, w, h);
			client.relayoutChildren();
		}

		return this.getLayoutRect();
	}
	
	public dispatchWheel(evt:any) {
		if(this.client) {
			this.client.dispatchWheel(evt);
		}
	}

	public dispose() {
		super.dispose();
		
		this._templateRow = null;
		this._headerBar = null;
		this._indexBar = null;
		this._client = null;
		this.resetColumns();
	}

	protected onReset() {
		super.onReset();
		this.resetColumns();
	}
	
	private _colsInfo : Array<TableColInfo>;
	private _templateRow : Widget;	

	protected static defProps = Object.assign({}, Widget.defProps, {_rowH:30, _ibW:30, _hbH:30, _siB:true});
	protected getDefProps() : any {
		return Table.defProps;
	}

	public static TYPE = "table";
	private static recycleBin = WidgetRecyclableCreator.create(Table);
	public static create(options?:any) : Table {
		return <Table>Table.recycleBin.create(options);
	}
};

WidgetFactory.register(Table.TYPE, Table.create);

