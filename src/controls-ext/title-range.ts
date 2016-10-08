
import {RangeEdit}  from "./range-edit";
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class TitleRange extends TitleValue {
	constructor(type?:string) {
		super(type || TitleRange.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return RangeEdit.create(options);
	}

	public static TYPE = "title-range";
	private static recycleBin = new RecyclableCreator<TitleRange>(function() {return new TitleRange()});
	public static create(options?:any) : TitleRange {
		return <TitleRange>TitleRange.recycleBin.create().reset(TitleRange.TYPE, options);
	}
};

WidgetFactory.register(TitleRange.TYPE, TitleRange.create);
