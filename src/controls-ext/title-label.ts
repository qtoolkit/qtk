
import {Label} from "../controls/label";
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * @class TitleLabel
 * @extends Widget
 * 带标题的文本。
 */
export class TitleLabel extends TitleValue {
	constructor(type?:string) {
		super(type || TitleLabel.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return Label.create(options);
	}

	public static TYPE = "title-label";
	private static recycleBin = WidgetRecyclableCreator.create(TitleLabel);
	public static create(options?:any) : TitleLabel {
		return <TitleLabel>TitleLabel.recycleBin.create(options);
	}
};

WidgetFactory.register(TitleLabel.TYPE, TitleLabel.create);
