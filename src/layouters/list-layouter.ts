import {Rect} from '../rect';
import {Widget} from '../controls/widget';
import {Layouter, LayouterFactory, LayouterParam, LayouterParamFactory} from './layouter';

const TYPE = "list";

/**
 * 列表布局器。
 */
export class ListLayouter extends Layouter {
	/**
	 * 列表项的高度。
	 */
	public h : number;
	
	/**
	 * 列表项与前一项的间距。
	 */
	public spacing : number;

	private rect : Rect;
	public get type() : string {
		return TYPE;
	}

	constructor() {
		super();
		this.rect = Rect.create(0, 0, 0, 0);
	}

	/**
	 * 设置参数。
	 */
	public setOptions(options:any) : any {
		this.h = options.h || 80;
		this.spacing = options.spacing || 0;

		return this;
	}

	public layoutChildren(widget:Widget, children:Array<Widget>, rect:Rect) : Rect {
		var x = rect.x;
		var y = rect.y;
		var w = rect.w;
		var h = this.h;
		var spacing = this.spacing;

		var arr = widget.children;
		for(var i = 0, n = arr.length; i < n; i++) {
			var child = arr[i];
			var param = <ListLayouterParam>child.layoutParam;
			
			if(!child.visible) {
				continue;
			}
			if(param && param.type === TYPE) {
				h = param.h || this.h;
				spacing = param.spacing || this.spacing;
			}else {
				h = this.h;
				spacing = i ? this.spacing : 0;
			}
			y += spacing;
			child.moveResizeTo(x, y, w, h);
			child.relayoutChildren();
			y += h;
		}

		this.rect.init(rect.x, rect.y, w, y-rect.y);

		return this.rect;
	}

	public createParam(options?:any) { 
		return ListLayouterParam.createWithOptions(options);
	}

	static create(h:number, spacing:number) : ListLayouter {
		return ListLayouter.createWithOptions({h:h, spacing:spacing});
	}

	static createWithOptions(options:any) : ListLayouter {
		var layouter = new ListLayouter();

		return layouter.setOptions(options);
	}
};

LayouterFactory.register(TYPE, ListLayouter.createWithOptions);

/**
 * 列表布局器的参数。
 * 
 * 如果父控件使用ListLayouter布局器，则子控件需要把layoutParam设置为ListLayouterParam。
 * 
 */
export class ListLayouterParam extends LayouterParam {
	/**
	 * 列表项的高度。
	 */
	public h : number;
	/**
	 * 列表项与前一项的间距。
	 */
	public spacing : number;

	constructor(h:number, spacing:number) {
		super(TYPE);

		this.h = h || 0;
		this.spacing = spacing || 0;
	}

	public static create(h:number, spacing:number) {
		return new ListLayouterParam(h, spacing);
	}

	public static createWithOptions(opt:any) {
		var options = opt || {};
		return new ListLayouterParam(options.h || options.height, options.spacing);
	}
};

LayouterParamFactory.register(TYPE, ListLayouterParam.createWithOptions);

