
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

import {TableRow} from "./table-row";
import {TableIndex} from "./table-index";
import {TableClient} from "./table-client";
import {TableHeader} from "./table-header";
import {TableIndexItem} from "./table-index-item";
import {TableHeaderItem} from "./table-header-item";
import {IViewModal, ICollectionViewModal, UpdateTiming, BindingMode} from "../mvvm/iview-modal";

export class TableColInfo {
	public w:number;
	public title:string;
	public options : any;
	public sortable : boolean;
	public widgetType : string;

	constructor(title:string, widgetType:string, w:number, options:any, sortable?:boolean) {
		this.w = w;
		this.title = title;
		this.sortable = sortable;
		this.widgetType = widgetType;
		this.options = options || {};
	}
	
	public static create(title:string, widgetType:string, w:number, options:any, sortable?:boolean) {
		return new TableColInfo(title, widgetType, w, options, sortable);
	}
};

/**
 * 表格
 */
export class Table extends Widget {
	private _itemH : number;
	private _colsInfo : Array<TableColInfo>;
	private _showIndexBar : boolean;
	private _templateRow : Widget;	
	private _headerBarH : number;
	private _indexBarW  : number;
	private _headerBar : TableHeader;
	private _indexBar : TableIndex;
	private _client : TableClient;

	public set itemH(value:number) {
		this._itemH = value;
	}
	
	public get itemH() : number {
		return this._itemH;
	}

	public set indexBarW(value:number) {
		this._indexBarW = value;
	}
	
	public get indexBarW() : number {
		return this._indexBarW;
	}

	public set headerBarH(value:number) {
		this._headerBarH = value;
	}
	
	public get headerBarH() : number {
		return this._headerBarH;
	}

	public set showIndexBar(value:boolean) {
		this._showIndexBar = value;
	}
	
	public get showIndexBar() : boolean {
		return this._showIndexBar;
	}

	public resetColumns() : Table {
		this._colsInfo = [];
	
		return this;
	}

	public addColumn(colInfo:TableColInfo) : Table {
		this._colsInfo.push(colInfo);

		return this;
	}
	
	public getColumns() : Array<TableColInfo> {
		return this._colsInfo;
	}

	constructor() {
		super(Table.TYPE);
	}

	protected getTemplateRow() : Widget {
		if(!this._templateRow) {
			var row = TableRow.create({w:this.w, h:this.itemH, app:this.app});
			this._colsInfo.forEach((item:TableColInfo) => {
				var widget = WidgetFactory.create(item.widgetType, item.options);
				widget.styleType = widget.type + ".table";
				row.addChild(widget, true);
			});
			this._templateRow = row;
		}
		
		return this._templateRow;
	}

	public bindData(viewModal:IViewModal) : Widget {
		this.prepareUI();
		var client = this._client;
		
		if(client) {
			client.templateItem = this.getTemplateRow();
			client.bindData(viewModal);
		}
		
		var indexBar = this._indexBar;
		if(indexBar) {
			var itemH = this.itemH;
			indexBar.removeAllChildren();
			client.children.forEach((item:Widget, index:number) => {
				indexBar.addChild(TableIndexItem.create({text:index, h:itemH}), true);
			});
			indexBar.relayoutChildren();
		}

		return this;
	}

	protected prepareUI() {
		var itemH = this.itemH;
		this.removeAllChildren();
		
		var showIndexBar = this.showIndexBar;
		this._headerBar = TableHeader.create({h:this.headerBarH, w:this.w});
		this._indexBar = TableIndex.create({w:this.indexBarW, h:this.h});
		this._client = TableClient.create({itemH:itemH, w:this.w-this.indexBarW, h:this.h-this.headerBarH});
	
		this.addChild(this._client, false);
		this.addChild(this._headerBar, false);
		this.addChild(this._indexBar , false);

		var headerBar = this._headerBar;
		this._colsInfo.forEach((item:TableColInfo) => {
			let headerItem = TableHeaderItem.create({w:item.w, text:item.title, sortable:item.sortable});	
			headerBar.addChild(headerItem);
		});

		var client = this._client;
		var indexBar = this._indexBar;
		var headerBar = this._headerBar;

		client.on(Events.SCROLL, (evt:Events.ScrollEvent) => {
			indexBar.offsetY = evt.offsetY;
			headerBar.offsetX = evt.offsetX;
			this.requestRedraw();
		});

		this.relayoutChildren();
	}

	protected onInit() {
		super.onInit();
		if(!this._headerBar) {
			this.prepareUI();
		}
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
		var indexBarW = this._indexBarW;
		var headerBarH = this._headerBarH;

		var yy = y + headerBarH;
		var xx = this.showIndexBar ? x + this._indexBarW : x;
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
		this._itemH = 30;
		this.resetColumns();
		this._indexBarW = 30;
		this._headerBarH = 30;
		this._showIndexBar = true;
	}

	public static TYPE = "table";
	private static recycleBin = new RecyclableCreator<Table>(function() {return new Table()});
	public static create(options?:any) : Table {
		return <Table>Table.recycleBin.create().reset(Table.TYPE, options);
	}
};

WidgetFactory.register(Table.TYPE, Table.create);

