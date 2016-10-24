import {Rect} from "../rect";
import {Style} from "../style";
import {Widget, WidgetState} from "./widget";
import {Graphics, TextLine} from "../graphics";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * 文本控件。
 */
export class Label extends Widget {
	protected _mlm : boolean;
	protected _textLines : Array<TextLine>;

	/**
	 * 对文本进行重新排版。
	 */
	public relayoutText() : Widget {
		if(this._inited) {
			var style = this.getStyle();
			var text = this.getLocaleText();
			this._textLines = Graphics.layoutText(text, this.w, style.font);
		}

		return this;
	};

	/**
	 * 是否启用多行模式。
	 */
	public get multiLineMode() : boolean {
		return this._mlm;
	}

	public set multiLineMode(value:boolean) {
		this.setProp("mlm", value, true);
	}

	/**
	 * Label的值即它的文本。
	 */
	public get value() {
		return this.text;
	}
	public set value(value) {
		this.text = value;
	}

	public setStyle(state:WidgetState, style:Style):Widget{
		super.setStyle(state, style);
		this.relayoutText();

		return this;
	}

	protected drawTextSL(ctx:any, text:string, style:Style) : Widget {
		if(text && style.textColor) {
			Graphics.drawTextSL(ctx, text, style, this.getTextRect(style));
		}

		return this;
	}

	protected drawTextML(ctx:any, style:Style) : Widget {
		if(style.textColor) {
			Graphics.drawTextML(ctx, this._textLines, style, this.getTextRect(style));
		}

		return this;
	}

	protected drawText(ctx:any, style:Style) : Widget {
		if(this._textLines && this._textLines.length) {
			if(this._mlm) {
				this.drawTextML(ctx, style);
			}else{
				var text = this._textLines[0].text;
				this.drawTextSL(ctx, text, style);
			}
		}

		return this;
	}

	protected setProp(prop:string, newValue:any, notify:boolean) : Widget {
		super.setProp(prop, newValue, notify);
		if(prop === "w" || prop === "h" || prop === "value" || prop === "text") {
			this.relayoutText();
		}

		return this;
	}

	constructor(type?:string) {
		super(type || Label.TYPE);
	}

	protected onInit() {
		super.onInit();
		this.relayoutText();
	}

	protected static defProps = Object.assign({}, Widget.defProps, {_mlm:true, _lp:5, _tp:5, _rp:5, _bp:5});
	protected getDefProps() : any {
		return Label.defProps;
	}

	public static TYPE = "label";
	private static recycleBin = WidgetRecyclableCreator.create(Label);
	public static create(options?:any) : Label {
		return <Label>Label.recycleBin.create(options);
	}
};

WidgetFactory.register(Label.TYPE, Label.create);

