
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {TableClient} from "./table-client";

/**
 * 表格
 */
export class TableRow extends Widget {
	constructor() {
		super(TableRow.TYPE);
	}

	protected onReset() {
		super.onReset();
	}

	public relayoutChildren(): Rect {
		var tableClient = <TableClient>(this.parent);
		if(!this.w || !this.h || !tableClient) {
			return;
		}

		var colsWidth = tableClient.colsWidth;

		var h = this.clientH;
		var x = this.leftPadding;
		var y = this.rightPadding;
		
		this.children.forEach((child:Widget, index:number) => {
			var w = colsWidth[index] || 100;
			child.moveResizeTo(x, y, w, h);
			x += w;
		});

		this.w = x + this.rightPadding;

		return null;
	}

	public static TYPE = "table-row";
	private static recycleBin = new RecyclableCreator<TableRow>(function() {return new TableRow()});
	public static create(options?:any) : TableRow {
		return <TableRow>TableRow.recycleBin.create().reset(TableRow.TYPE, options);
	}
};

WidgetFactory.register(TableRow.TYPE, TableRow.create);

