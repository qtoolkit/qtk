
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * 表格头的一项。
 */
export class TableHeaderItem extends Widget {
	/**
	 * 是否点击时按该列排序。
	 */
	public set sortable(value:boolean) {
		this._sortable = value;
	}
	public get sortable() : boolean {
		return this._sortable;
	}
	protected _sortable : boolean;

	/**
	 * 当前的排序状态。
	 */
	public get sortStatus() : string {
		return this._sortStatus;
	}
	protected _sortStatus : string;
	
	public static SORT_INC = "inc";
	public static SORT_DEC = "dec";
	
	constructor() {
		super(TableHeaderItem.TYPE);
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

	protected onInit() {
		super.onInit();
		this.useBehavior("resizable", {east:true, animateDuration:0});
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

	public static TYPE = "table-header-item";
	private static recycleBin = WidgetRecyclableCreator.create(TableHeaderItem);
	public static create(options?:any) : TableHeaderItem {
		return <TableHeaderItem>TableHeaderItem.recycleBin.create(options);
	}
};

WidgetFactory.register(TableHeaderItem.TYPE, TableHeaderItem.create);

