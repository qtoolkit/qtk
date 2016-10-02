
import {Label} from "../controls/label";
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class TitleLabel extends TitleValue {
	constructor(type?:string) {
		super(type || TitleLabel.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return Label.create(options);
	}

	public static TYPE = "title-label";
	private static recycleBin = new RecyclableCreator<TitleLabel>(function() {return new TitleLabel()});
	public static create(options?:any) : TitleLabel {
		return <TitleLabel>TitleLabel.recycleBin.create().reset(TitleLabel.TYPE, options);
	}
};

WidgetFactory.register(TitleLabel.TYPE, TitleLabel.create);
