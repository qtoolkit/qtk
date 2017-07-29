import {Rect} from '../base/rect';
import Events = require("../base/events");
import {Direction} from '../base/consts';
import {Widget} from '../controls/widget';
import {Layouter, LayouterFactory, LayouterParam, LayouterParamFactory} from './layouter';

const TYPE = "dock";

/**
 * Dock布局器。
 */
export class DockLayouter extends Layouter {
	public get type() : string {
		return TYPE;
	}

	public layoutChildren(widget:Widget, children:Array<Widget>, rect:Rect) : Rect {
		var r = rect.clone();
		var arr = widget.children.forEach(child => {
			if(r.w > 0 &&  r.h > 0) {
				this.layoutChild(child, r);
			}
		});
		r.dispose();

		return rect;
	}

	public layoutChild(child:Widget, r:Rect) {
		var x = 0;
		var y = 0;
		var w = 0;
		var h = 0;
		var param = <DockLayouterParam>child.layoutParam;

		if(param && param.type === TYPE && child.visible) {
			switch(param.position) {
				case Direction.LEFT : {
					x = r.x;
					y = r.y;
					h = r.h;
					w = Math.min(r.w, param.size ? Layouter.evalValue(param.size, r.w) : child.w);
					r.x += w;
					r.w -= w;
					break;
				}
				case Direction.RIGHT : {
					y = r.y;
					h = r.h;
					w = Math.min(r.w, param.size ? Layouter.evalValue(param.size, r.w) : child.w);
					x = r.x + r.w - w;
					r.w -= w;
					break;
				}
				case Direction.BOTTOM : {
					x = r.x;
					w = r.w;
					h = Math.min(r.h, param.size ? Layouter.evalValue(param.size, r.h) : child.h);
					y = r.y + r.h - h;
					r.h -= h;
					break;
				}
				default: {
					x = r.x;
					y = r.y;
					w = r.w;
					h = Math.min(r.h, param.size ? Layouter.evalValue(param.size, r.h) : child.h);
					r.h -= h;
					r.y += h;
					break;
				}
			}

			child.moveResizeTo(x, y, w, h);
			child.relayoutChildren();
		}
	}

	public createParam(options?:any) {
		return DockLayouterParam.createWithOptions(options);
	}

	static create() : DockLayouter {
		return DockLayouter.createWithOptions({});
	}

	static createWithOptions(options?:any) : DockLayouter {
		var layouter = new DockLayouter();

		return layouter.setOptions(options);
	}
};

LayouterFactory.register(TYPE, DockLayouter.createWithOptions);

/**
 * Dock布局器的参数。
 * 
 * 如果父控件使用DockLayouter布局器，则子控件需要把layoutParam设置为DockLayouterParam。
 * 
 * 对于size参数：
 * *.如果以px结尾，则直接取它的值。
 * *.如果以%结尾，则表示剩余空间的宽度/高度的百分比。
 *
 */
export class DockLayouterParam extends LayouterParam {
	public size : string;
	public position : Direction;

	public set widget(widget:Widget) {
		this._widget = widget;
		widget.on(Events.RESIZING, evt => this.onWidgetResized());
	}

	constructor(position:Direction, size:string) {
		super(TYPE);

		this.size = size;
		this.position = position;
	}

	/**
	 * 对应的Widget被用户RESIZE之后，重排兄弟控件。
	 */
	protected onWidgetResized() {
		var widget = this._widget;
		if(this.position === Direction.LEFT || this.position === Direction.RIGHT) {
			var w = widget.w;
			this.size = w.toString();
		}else if(this.position === Direction.TOP || this.position === Direction.BOTTOM) {
			var h = widget.h;
			this.size = h.toString();
		}

		widget.parent.relayoutChildren();
	}

	public static create(position:Direction, size:string) {
		return new DockLayouterParam(position, size);
	}

	public static createWithOptions(opts:any) {
		var options = opts || {};

		return new DockLayouterParam(options.position, options.size||"");
	}
};

LayouterParamFactory.register(TYPE, DockLayouterParam.createWithOptions);

