
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {MatrixStack} from "../matrix-stack";
import {RecyclableCreator} from "../recyclable-creator";
import {WidgetFactory} from "../controls/widget-factory";
import {PassiveScrollableGroup} from "./passive-scrollable-group";

/**
 * 表格头
 */
export class TableHeader extends PassiveScrollableGroup {
	constructor() {
		super(TableHeader.TYPE);
	}

	public static TYPE = "table-header";
	private static recycleBin = new RecyclableCreator<TableHeader>(function() {return new TableHeader()});
	public static create(options?:any) : TableHeader {
		return <TableHeader>TableHeader.recycleBin.create().reset(TableHeader.TYPE, options);
	}
};

WidgetFactory.register(TableHeader.TYPE, TableHeader.create);

