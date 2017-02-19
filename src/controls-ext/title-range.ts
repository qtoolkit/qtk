
import {RangeEdit}  from "./range-edit";
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * @class TitleRange
 * @extends Widget
 * 带标题的范围的编辑器。
 */
export class TitleRange extends TitleValue {
	constructor(type?:string) {
		super(type || TitleRange.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return RangeEdit.create(options);
	}

	public static TYPE = "title-range";
	private static recycleBin = WidgetRecyclableCreator.create(TitleRange);
	public static create(options?:any) : TitleRange {
		return <TitleRange>TitleRange.recycleBin.create(options);
	}
};

WidgetFactory.register(TitleRange.TYPE, TitleRange.create);
