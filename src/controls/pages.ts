
import {Rect} from "../rect";
import {Style} from "../style";
import {Widget} from "./widget";
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

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

	public set target(value:Widget){
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

	protected findEventTargetChild(x:number, y:number, ctx:MatrixStack) : Widget {
		return this.target;
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this.value = 0;
		return this;
	}

	constructor() {
		super(Pages.TYPE);
	}

	public dispose() {
		super.dispose();
		Pages.recyclbale.recycle(this);
	}

	public static TYPE = "pages";
	private static recyclbale = new RecyclableCreator<Pages>(function() {return new Pages()});
	public static create() : Pages {
		return <Pages>Pages.recyclbale.create().reset(Pages.TYPE);
	}
};

WidgetFactory.register(Pages.TYPE, Pages.create);

