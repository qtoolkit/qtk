
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 表格头的一项。
 */
export class TableHeaderItem extends Widget {
	protected _sortable : boolean;
	protected _sortStatus : string;

	public set sortable(value:boolean) {
		this._sortable = value;
	}
	
	public get sortable() : boolean {
		return this._sortable;
	}
	
	protected getFgImageRect(style:Style) : Rect {
		var x = this.w - this.h;
		var y = this.topPadding;
		var w = this.clientH;
		var h = this.clientH;

		return Rect.rect.init(x, y, w, h);
	}
	
	protected getStyleType() : string {
		var styleType = this._styleType || this.type;
		if(!this._sortable || !this._sortStatus) {
			return styleType;
		}

		return styleType +"."+this._sortStatus;
	}

	protected onReset() {
		super.onReset();
		this._sortStatus = null;
		this.on(Events.CLICK, this.triggerSortStatus.bind(this));
	}

	protected triggerSortStatus() {
		if(this._sortable) {
			if(this._sortStatus === TableHeaderItem.SORT_INC) {
				this._sortStatus = TableHeaderItem.SORT_DEC;
			}else{
				this._sortStatus = TableHeaderItem.SORT_INC;
			}
		}
	}

	constructor() {
		super(TableHeaderItem.TYPE);
	}

	public static SORT_INC = "inc";
	public static SORT_DEC = "dec";

	public static TYPE = "table-header-item";
	private static recycleBin = new RecyclableCreator<TableHeaderItem>(function() {return new TableHeaderItem()});
	public static create(options?:any) : TableHeaderItem {
		return <TableHeaderItem>TableHeaderItem.recycleBin.create().reset(TableHeaderItem.TYPE, options);
	}
};

WidgetFactory.register(TableHeaderItem.TYPE, TableHeaderItem.create);

