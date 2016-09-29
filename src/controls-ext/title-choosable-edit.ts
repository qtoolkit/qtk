
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {ChoosableEdit} from "./choosable-edit";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class TitleChoosableEdit extends TitleValue {
    protected _inputTips : string;

	public set onChoose(value:Function) {
		var edit = <ChoosableEdit>this._valueWidget;

		edit.onChoose = value;
	}
	public get onChoose() : Function {
		var edit = <ChoosableEdit>this._valueWidget;
		return edit.onChoose;
	}

	public set inputTips(value:string) {
		this._inputTips = value;
		if(this._valueWidget) {
			this._valueWidget.set({inputTips:value});
		}
	}

	public get inputTips() : string {
		return this._inputTips;
	}
	
	constructor(type?:string) {
		super(type || TitleChoosableEdit.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return ChoosableEdit.create();
	}

	public static TYPE = "title-choosable-edit";
	private static recycleBin = new RecyclableCreator<TitleChoosableEdit>(function() {return new TitleChoosableEdit()});
	public static create(options?:any) : TitleChoosableEdit {
		return <TitleChoosableEdit>TitleChoosableEdit.recycleBin.create().reset(TitleChoosableEdit.TYPE, options);
	}
};

WidgetFactory.register(TitleChoosableEdit.TYPE, TitleChoosableEdit.create);
