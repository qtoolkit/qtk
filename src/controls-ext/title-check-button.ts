
import {TitleValue} from "./title-value";
import {Widget} from "../controls/widget";
import {CheckButton} from "../controls/check-button";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * @class TitleCheckButton
 * @extends Widget
 * 带标题的CheckButton。
 */
export class TitleCheckButton extends TitleValue {
	constructor(type?:string) {
		super(type || TitleCheckButton.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return CheckButton.create(options);
	}

	public static TYPE = "title-check-button";
	private static recycleBin = WidgetRecyclableCreator.create(TitleCheckButton);
	public static create(options?:any) : TitleCheckButton {
		return <TitleCheckButton>TitleCheckButton.recycleBin.create(options);
	}
};

WidgetFactory.register(TitleCheckButton.TYPE, TitleCheckButton.create);
