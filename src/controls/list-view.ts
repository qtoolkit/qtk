
import {Rect} from "../rect";
import {Widget} from "./widget";
import {ScrollView} from "./scroll-view";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";
import {Layouter} from "../layouters/layouter";
import {ListLayouter, ListLayouterParam} from "../layouters/list-layouter";

export class ListView extends ScrollView {
	public set itemSpacing(value:number) {
		this._is = value;
		var layouter = <ListLayouter>this._childrenLayouter;
		layouter.spacing = value;
	}
	public get itemSpacing() : number {
		return this._is;
	}
	
	public set itemH(value:number) {
		this._ih = value;
		var layouter = <ListLayouter>this._childrenLayouter;
		layouter.h = value;
	}
	public get itemH() : number {
		return this._ih;
	}

	public get childrenLayouter() : Layouter{
		return this._childrenLayouter;
	}
	public set childrenLayouter(layouter:Layouter) {
	}
	
	protected beforeDrawChildren(ctx:any) {
		super.beforeDrawChildren(ctx);
	}

	protected afterDrawChildren(ctx:any) {
		super.afterDrawChildren(ctx);
	}

	protected doDrawChildren(ctx:any) {
		var top = this.offsetY;
		var bottom = top + this.h;

		this._children.forEach(function(child) {
			var visible = child.visible && child.y < bottom && (child.y + child.h) > top;
			if(visible) {
				child.draw(ctx);
			}
		});
	}

	public get desireHeight() : number {
		var itemH = this.itemH;
		var h = this.topPadding + this.bottomPadding;
		this.children.forEach(child => {
			var param = <ListLayouterParam>child.layoutParam;
			if(param) {
				h += param.h || itemH; 
			}else{
				h += child.h || itemH; 
			}

		});

		return h;
	}

	public relayoutChildren() : Rect {
		var r = super.relayoutChildren();
		this.contentW = r.w + this.leftPadding + this.rightPadding;
		this.contentH = r.h + this.topPadding + this.bottomPadding;

		return r;
	}
	
	protected _ih : number;
	protected _is : number;

	constructor(type?:string) {
		super(type || ListView.TYPE);
	}

	protected onReset() {
		super.onReset();
		this.scrollerOptions.scrollingX = false;
		this._childrenLayouter = ListLayouter.create({height:this.itemH, spacing:0});
	}
	
	protected static defProps = Object.assign({}, Widget.defProps, {_ih:30, _is:0});
	protected getDefProps() : any {
		return ListView.defProps;
	}


	public static TYPE = "list-view";
	private static recycleBinListView = WidgetRecyclableCreator.create(ListView);
	public static create(options?:any) : ListView{
		return <ListView>ListView.recycleBinListView.create(options);
	}
};

WidgetFactory.register(ListView.TYPE, ListView.create);

