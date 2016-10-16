
import {TitleValue} from "./title-value";
import {Widget} from "../controls/widget";
import {CheckButton} from "../controls/check-button";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class TitleCheckButton extends TitleValue {
	constructor(type?:string) {
		super(type || TitleCheckButton.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return CheckButton.create(options);
	}

	public static TYPE = "title-check-button";
	private static recycleBin = new RecyclableCreator<TitleCheckButton>(function() {return new TitleCheckButton()});
	public static create(options?:any) : TitleCheckButton {
		return <TitleCheckButton>TitleCheckButton.recycleBin.create().reset(TitleCheckButton.TYPE, options);
	}
};

WidgetFactory.register(TitleCheckButton.TYPE, TitleCheckButton.create);
