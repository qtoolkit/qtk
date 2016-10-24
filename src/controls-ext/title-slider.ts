
import {Slider} from "../controls/slider";
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

export class TitleSlider extends TitleValue {
	constructor(type?:string) {
		super(type || TitleSlider.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return Slider.create(options);
	}

	public static TYPE = "title-slider";
	private static recycleBin = WidgetRecyclableCreator.create(TitleSlider);
	public static create(options?:any) : TitleSlider {
		return <TitleSlider>TitleSlider.recycleBin.create(options);
	}
};

WidgetFactory.register(TitleSlider.TYPE, TitleSlider.create);
