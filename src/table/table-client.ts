
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {MatrixStack} from "../matrix-stack";
import {ListView} from "../controls/list-view";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 表格
 */
export class TableClient extends ListView {
	protected _colsWidth : Array<number>;

	public set colsWidth(value:Array<number>) {
		this._colsWidth = value;
	}

	public get colsWidth() : Array<number> {
		return this._colsWidth;
	}

	constructor() {
		super(TableClient.TYPE);
	}

	protected onReset() {
		super.onReset();
		this.dragToScroll = true;
	}

	public static TYPE = "table-client";
	private static rBin = new RecyclableCreator<TableClient>(function() {return new TableClient()});
	public static create(options?:any) : TableClient {
		return <TableClient>TableClient.rBin.create().reset(TableClient.TYPE, options);
	}
};

WidgetFactory.register(TableClient.TYPE, TableClient.create);

