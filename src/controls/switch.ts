
import {Rect} from "../rect";
import {Style} from "../style";
import {Point} from "../point";
import {Widget} from "./widget";
import TWEEN = require("tween.js");
import Events = require("../events");
import {Graphics} from "../graphics";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Switch extends Widget {
	protected _offset : number;
	protected _switching : boolean;	
	
	protected set offset(value:number) {
		this.requestRedraw();
		this._offset = Math.min(this.maxOffset, Math.max(value, this.minOffset));
	}

	protected get minOffset() : number {
		return this.h >> 1;
	}
	
	protected get maxOffset() : number {
		return this.w - (this.h >> 1);
	}

	protected get offset() : number {
		if(this._switching) {
			return this._offset;
		}
	
		return this.value ? this.maxOffset : this.minOffset;
	}

	protected drawColorBackground(ctx:any, style:Style) : Widget {
		var w = this.w;
		var h = this.h;
		var r = h >> 1;
		var offset = this.offset;
		var fillColor = null;
		var strokeColor = null;

		if(!this._switching) {
			fillColor = this.value ? style.backGroundColor : style.foreGroundColor;
			strokeColor = style.lineColor;
			Graphics.drawRoundRect(ctx, fillColor, strokeColor, 1, 0, 0, w, h, r);
		}else{
			strokeColor = style.lineColor;
			fillColor = style.backGroundColor;
			Graphics.drawRoundRect(ctx, fillColor, strokeColor, 1, 0, 0, w, h, r);
			
			w = this.w - (offset-r);
			fillColor = style.foreGroundColor;
			Graphics.drawRoundRect(ctx, fillColor, strokeColor, 1, offset-r, 0, w, h, r);
		}

		var y = r;
		var x = this.offset;
		Graphics.drawCircle(ctx, style.foreGroundColor,  style.lineColor, style.lineWidth, x, y, r);

		return this;
	}

	protected dispatchPointerUp(evt:Events.PointerEvent) {
		var dx = evt.x - evt.pointerDownX;
		
		if(dx > 5 && this.value || dx < -5 && !this.value) { 
			super.dispatchPointerUp(evt);
			return;
		}

		
		var duration = 200;
		var tween = new TWEEN.Tween(this);
		var offset = this.value ? this.minOffset : this.maxOffset;
		
		this._switching = true;	
		this.offset = this.value ? this.maxOffset : this.minOffset;

		tween.to({offset:offset}, duration).start();
		tween.onComplete(evt => {
			this.value = !this.value;
			this._switching = false;	
		});

		super.dispatchPointerUp(evt);
	}

	constructor() {
		super(Switch.TYPE);
	}

	public static TYPE = "switch";
	private static recycleBin = new RecyclableCreator<Switch>(function() {return new Switch()});
	public static create(options?:any) : Switch{
		return <Switch>Switch.recycleBin.create().reset(Switch.TYPE).set(options);
	}
};

WidgetFactory.register(Switch.TYPE, Switch.create);

