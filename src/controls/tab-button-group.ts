
import {Rect} from "../rect";
import {Style} from "../style";
import {Widget} from "./widget";
import {Graphics} from "../graphics";
import {Orientation} from "../consts";
import {RadioButton} from "./radio-button";
import {WidgetFactory} from "./widget-factory";
import {ImageDrawType, ImageTile} from "../image-tile";
import {RecyclableCreator} from "../recyclable-creator";

export class TabButtonGroup extends Widget {
	protected _ae : boolean;
	
	public set value(value:number) {
		var n = this.children.length;
		var index = Math.max(0, Math.min(value, n-1));
		if(n > 0) {
			this.children[index].value = true;
		}

		this.requestRedraw();
	}

	public get value() : number {
		var arr = this.children;
		var n = arr.length;

		for(var i = 0; i < n; i++) {
			var iter = arr[i];
			if(iter.value) {
				return i;
			}
		}

		return 0;
	}

	public set autoExpand(value:boolean) {
		this._ae = value;
		this.relayoutChildren();
	}
	public get autoExpand() : boolean {
		return this._ae;
	}

	public relayoutChildren() : Rect {
		var x = 0;
		var y = 0;
		var w = 0;
		var h = this.h;
		var n = this.children.length;
		var autoExpand = this._ae;
		
		if(n > 0) {
			var itemW = this.w/n;
			this.children.forEach(child => {
				if(autoExpand) {
					w = itemW;
				}else{
					w = child.desireWidth;
				}
				child.moveResizeTo(x, y, w, h);
				child.relayoutChildren();
				x += w;
			});
		}

		return Rect.rect.init(0, 0, this.w, this.h);
	}
	
	protected drawChildren(ctx:any) : Widget {
		var current = null;
		this._children.forEach(function(child) {
			if(child.visible) {
				if(child.value) {
					current = child;
				}else{
					child.draw(ctx);
				}
			}
		});

		if(current) {
			current.draw(ctx);
		}

		return this;
	}
	
	constructor() {
		super(TabButtonGroup.TYPE);
	}

	protected static defProps = Object.assign({}, Widget.defProps, {_ae:true});
	protected getDefProps() : any {
		return TabButtonGroup.defProps;
	}
	public static TYPE = "tab-button-group";
	private static r = new RecyclableCreator<TabButtonGroup>(function() {return new TabButtonGroup()});
	public static create(options?:any) : TabButtonGroup {
		return <TabButtonGroup>TabButtonGroup.r.create().reset(TabButtonGroup.TYPE, options);
	}
};

WidgetFactory.register(TabButtonGroup.TYPE, TabButtonGroup.create);

