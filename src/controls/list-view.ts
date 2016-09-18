
import {Rect} from "../rect";
import {Widget} from "./widget";
import {ScrollView} from "./scroll-view";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {Layouter} from "../layouters/layouter";
import {ListLayouter, ListLayouterParam} from "../layouters/list-layouter";

export class ListView extends ScrollView {
	public set itemSpacing(value:number) {
		this._itemSpacing = value;
		var layouter = <ListLayouter>this._childrenLayouter;
		layouter.spacing = value;
	}
	public get itemSpacing() : number {
		return this._itemSpacing;
	}
	
	public set itemHeight(value:number) {
		this._itemHeight = value;
		var layouter = <ListLayouter>this._childrenLayouter;
		layouter.h = value;
	}
	public get itemHeight() : number {
		return this._itemHeight;
	}

	public get childrenLayouter() : Layouter{
		return this._childrenLayouter;
	}
	public set childrenLayouter(layouter:Layouter) {
	}
	
	protected doDrawChildren(ctx:any) : Widget {
		var top = this.offsetY;
		var bottom = top + this.h;

		this._children.forEach(function(child) {
			var visible = child.visible && child.y < bottom && (child.y + child.h) > top;
			if(visible) {
				child.draw(ctx);
			}
		});

		return this;
	}

	public get desireHeight() : number {
		var itemHeight = this.itemHeight;
		var h = this.topPadding + this.bottomPadding;
		this.children.forEach(child => {
			var param = <ListLayouterParam>child.layoutParam;
			if(param) {
				h += param.h || itemHeight; 
			}else{
				h += child.h || itemHeight; 
			}

		});

		return h;
	}

	public relayoutChildren() : Rect {
		var r = super.relayoutChildren();
		this.contentWidth = r.w + this.leftPadding + this.rightPadding;
		this.contentHeight = r.h + this.topPadding + this.bottomPadding + this.itemHeight;

		return r;
	}

	protected _itemHeight : number;
	protected _itemSpacing : number;

	constructor() {
		super(ListView.TYPE);
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this._itemSpacing = 0;
		this._itemHeight = 80;
		this.scrollerOptions.scrollingX = false;
		this._childrenLayouter = ListLayouter.create({height:this.itemHeight, spacing:0});
		
		return this;
	}

	public dispose() {
		super.dispose();
		ListView.recycleBinListView.recycle(this);
	}

	public static TYPE = "list-view";
	private static recycleBinListView = new RecyclableCreator<ListView>(function() {return new ListView()});
	public static create(options?:any) : ListView{
		return <ListView>ListView.recycleBinListView.create().reset(ListView.TYPE).set(options);
	}
};

WidgetFactory.register(ListView.TYPE, ListView.create);

