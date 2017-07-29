
import {Rect} from "../base/rect";
import {Style} from "../base/style";
import {Point} from "../base/point";
import {Edit} from "../controls/edit";
import {Button} from "../controls/button";
import {Widget} from "../controls/widget";
import Events = require("../base/events");
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * @class ChoosableEdit
 * @extends Widget
 * 编辑器+选择按钮。
 */
export class ChoosableEdit extends Widget {
	protected _edit : Edit;
	protected _button : Button;
	protected _inputTips : string;
	
	/**
	 * @property {Function} onChoose
	 * 点击选择按钮时，会调用该回调函数。
	 */
	public onChoose : Function;

	public set inputTips(value:string) {
		this._inputTips = value;
		if(this._edit) {
			this._edit.set({inputTips:value});
		}
	}

	public get inputTips() : string {
		return this._inputTips;
	}

	public set value(value:any) {
		this._value = value;
		if(this._edit) {
			var oldValue = this._edit.text;
			if(oldValue !== value) {
				this._edit.text = value;
				this._edit.notifyChangeEx(Events.CHANGE, value, oldValue);
			}
		}
	}

	public get value() : any {
		return this._edit ? this._edit.text : this._value;
	}

	public set dataBindingRule(dataBindingRule:any) {
		this._edit.dataBindingRule = dataBindingRule;
	}

	public get dataBindingRule() : any {
		return this._edit.dataBindingRule;
	}

	public relayoutChildren() : Rect {
		this.requestRedraw();
		if(this._edit && this._button) {
			var x = this.leftPadding;
			var y = this.topPadding;
			var h = this.clientH;
			var w = this.clientW - this.h - 6;
			this._edit.moveResizeTo(x, y, w, h, 0);
			
			w = this.h;
			x = this.w - w - 4;
			this._button.moveResizeTo(x, y, w, h, 0);
		}

		return this.getLayoutRect();
	}

	public dispose() {
		this._edit = null;
		this._button = null;
		super.dispose();
	}

	protected onReset() {
		super.onReset();
		
		this.padding = 0;
		this.onChoose = null;
		this._edit = Edit.create();
		this.addChild(this._edit);
		this._edit.on(Events.CHANGE, evt => {
			this.dispatchEvent(evt);
		});

		this._button = Button.create({text:"..."});
		this.addChild(this._button);
		this._button.on(Events.CLICK, evt => {
			if(this.onChoose) {
				this.onChoose();
			}
		});
	}

	constructor() {
		super(ChoosableEdit.TYPE);
	}

	public static TYPE = "choosable.edit";
	private static rBin = WidgetRecyclableCreator.create(ChoosableEdit);
	public static create(options?:any) : ChoosableEdit {
		return <ChoosableEdit>ChoosableEdit.rBin.create(options);
	}
};

WidgetFactory.register(ChoosableEdit.TYPE, ChoosableEdit.create);

