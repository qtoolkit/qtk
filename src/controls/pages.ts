
import {Rect} from "../rect";
import {Style} from "../style";
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * 页面管理器。管理多个页面，只有一个页面处于活跃状态，仅该页面可见，可以处理事件。
 * value表示该活跃页面的索引。
 */
export class Pages extends Widget {
	public set value(value:number) {
		var n = this.children.length-1;
		this._value = Math.max(0, Math.min(value, n));
		this.requestRedraw();
	}
	public get value() : number {
		return this._value;
	}

	public setValueByPage(page:Widget) : Widget {
		this.value = this.indexOfChild(page);

		return this;
	}

	public set target(widget:Widget){
		this.value = this.children.indexOf(widget);
	}

	public get target() : Widget {
		if(this.children.length) {
			return this.children[this.value];
		}else{
			return null;
		}
	}

	public relayoutChildren() : Rect {
		var r = this.getLayoutRect();

		this.children.forEach(child => {
			child.moveResizeTo(r.x, r.y, r.w, r.h);
		});

		return r;
	}
	
	protected drawChildren(ctx:any) : Widget {
		var target = this.target;
		if(target) {
			target.draw(ctx);
		}

		return this;
	}

	protected findEventTargetChild(x:number, y:number) : Widget {
		return this.target;
	}

	protected onReset() {
		this.value = 0;
	}

	constructor() {
		super(Pages.TYPE);
	}

	public static TYPE = "pages";
	private static recycleBin = WidgetRecyclableCreator.create(Pages);
	public static create(options?:any) : Pages {
		return <Pages>Pages.recycleBin.create(options);
	}
};

WidgetFactory.register(Pages.TYPE, Pages.create);

