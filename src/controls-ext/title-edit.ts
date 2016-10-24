
import {Edit} from "../controls/edit";
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

export class TitleEdit extends TitleValue {
	protected _inputType : string;
    protected _inputTips : string;
    protected _inputFilter : (value:string) => string;

	public set inputFilter(value:(value:string) => string) {
		this._inputFilter = value;
		if(this._valueWidget) {
			this._valueWidget.set({inputFilter:value});
		}
	}

	public set inputType(value:string) {
		this._inputType = value;
		if(this._valueWidget) {
			this._valueWidget.set({inputType:value});
		}
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
	
	public get inputType() : string {
		return this._inputType;
	}

	public get inputFilter() : (value:string) => string{
		return this._inputFilter;
	}
	constructor(type?:string) {
		super(type || TitleEdit.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		var opts = options || {};
		if(this._inputTips) {
			opts.inputTips = this._inputTips;
		}

		if(this._inputType) {
			opts.inputType = this._inputType;
		}

		if(this._inputFilter) {
			opts.inputFilter = this._inputFilter;
		}

		return Edit.create(opts);
	}

	public static TYPE = "title-edit";
	private static recycleBin = WidgetRecyclableCreator.create(TitleEdit);
	public static create(options?:any) : TitleEdit {
		return <TitleEdit>TitleEdit.recycleBin.create(options);
	}
};

WidgetFactory.register(TitleEdit.TYPE, TitleEdit.create);
