import {Rect} from '../rect';
import {Widget} from '../controls/widget';
import {Layouter, LayouterFactory} from './layouter';

const TYPE = "ListLayouter";

/**
 * 列表布局器。
 */
export class ListLayouter extends Layouter {
	/**
	 * 列表项的高度。
	 */
	public height : number;
	
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
		this.height = options.height || 80;
		this.spacing = options.spacing || 0;

		return this;
	}

	public layoutChildren(widget:Widget, children:Array<Widget>, rect:Rect) : Rect {
		var x = rect.x;
		var y = rect.y;
		var w = rect.w;
		var h = this.height;
		var spacing = this.spacing;

		var arr = widget.children;
		for(var i = 0, n = arr.length; i < n; i++) {
			var child = arr[i];
			var param = <ListLayouterParam>child.layoutParam;
			
			if(!child.visible) {
				continue;
			}
			if(param && param.type === TYPE) {
				h = param.height || this.height;
				spacing = param.spacing || this.spacing;
			}else {
				h = this.height;
				spacing = i ? this.spacing : 0;
			}
			y += spacing;
			child.moveResizeTo(x, y, w, h);
			child.relayoutChildren();
			y += h;
		}

		this.rect.init(rect.x, rect.y, w, y);

		return this.rect;
	}

	static create(options:any) : ListLayouter {
		var layouter = new ListLayouter();

		return layouter.setOptions(options);
	}
};

LayouterFactory.register(TYPE, ListLayouter.create);

/**
 * 列表布局器的参数。
 * 
 * 如果父控件使用ListLayouter布局器，则子控件需要把layoutParam设置为ListLayouterParam。
 * 
 */
export class ListLayouterParam {
	public type : string;
	/**
	 * 列表项的高度。
	 */
	public height : number;
	/**
	 * 列表项与前一项的间距。
	 */
	public spacing : number;

	constructor(height:number, spacing:number) {
		this.type = TYPE;
		this.height = height || 0;
		this.spacing = spacing || 0;
	}

	static create(height:number, spacing:number) {
		return new ListLayouterParam(height, spacing);
	}
};

