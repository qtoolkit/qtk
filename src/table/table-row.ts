
import {Rect} from "../base/rect";
import {Style} from "../base/style";
import Events = require("../base/events");
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";
import {TableClient} from "./table-client";

/**
 * 表格中的一行。
 */
export class TableRow extends Widget {
	constructor() {
		super(TableRow.TYPE);
	}

	public relayoutChildren(): Rect {
		var tableClient = <TableClient>(this.parent);
		
		if(!this.w || !this.h || !tableClient) {
			return;
		}

		var h = this.clientH;
		var x = this.leftPadding;
		var y = this.rightPadding;
		var colsWidth = tableClient.colsWidth;
		
		this.children.forEach((child:Widget, index:number) => {
			var w = colsWidth[index] || 100;
			child.moveResizeTo(x, y, w, h);
			x += w;
		});

		this.w = x + this.rightPadding;

		return null;
	}

	public static TYPE = "table-row";
	private static recycleBin = WidgetRecyclableCreator.create(TableRow);
	public static create(options?:any) : TableRow {
		return <TableRow>TableRow.recycleBin.create(options);
	}
};

WidgetFactory.register(TableRow.TYPE, TableRow.create);

