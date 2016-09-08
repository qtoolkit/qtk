
import {Rect} from "../rect";
import {Point} from "../point";
import {Style} from "../style";
import {TreeItemData} from "./tree-item-data";
import {Widget, HitTestResult} from "./widget";
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "./widget-factory";
import {RoundType, Graphics} from "../graphics";
import {ImageTile, ImageDrawType} from "../image-tile";
import {RecyclableCreator} from "../recyclable-creator";

export class TreeItem extends Widget {
	protected _level  : number;
	protected _isLeaf : boolean;
	protected _expanded : boolean;
	protected _indention : number;
	protected _data : TreeItemData;
	protected _parentItem : TreeItem;

	constructor() {
		super(TreeItem.TYPE);
	}

	public get desireWidth() : number {
		var style = this.getStyle();
		var text = this.data.text;
		var w = this._level * this._indention + this.h;

		w += Graphics.measureText(text, style.font);

		return w;
	}

	public get visible() {
		var item = this.parentItem;
		while(item !== null) {
			if(!item.expanded) {
				return false;
			}
			item = item.parentItem;
		}

		return this._visible;
	}

	protected getStyleType() : string {
		var appendix = this.isLeaf ? "leaf" : (this.expanded ? "expanded":"collapsed"); 
		
		return (this._styleType || this.type) +"."+appendix;
	}
	
	public get parentItem() : TreeItem {
		return this._parentItem;
	}
	public set parentItem(value:TreeItem) {
		this._parentItem = value;
	}
	

	public get level() : number {
		return this._level;
	}
	public set level(value:number) {
		this._level = value;
	}
	
	public get isLeaf() : boolean {
		return this._isLeaf;
	}
	public set isLeaf(value:boolean) {
		this._isLeaf = value;
	}

	public get data() : TreeItemData{
		return this._data;
	}
	public set data(value:TreeItemData) {
		this._data = value;
	}

	public get indention() : number {
		return this._indention || 30;
	}
	public set indention(value:number) {
		this._indention = value;
	}

	public get expanded() : boolean{
		return this._expanded;
	}
	public set expanded(value:boolean) {
		this._expanded = value;
	}

	protected drawImage(ctx:any, style:Style) : Widget {
		if(style.forceGroundImage) {
			var y = 0;
			var w = this.h;
			var h = this.h;
			var x = this._level * this._indention;

			style.forceGroundImage.draw(ctx, ImageDrawType.CENTER, x, y, w, h);
		}

		return this;
	}
	
	protected drawText(ctx:any, style:Style) : Widget {
		var text = this.data.text;
		if(text && style.fontColor) {
			var y = 0;
			var h = this.h;
			var x = this._level * this._indention;
			if(style.forceGroundImage) {
				x += h; 
			}
			var w = this.x + this.w - x;
			Graphics.drawTextSL(ctx, text, style, Rect.rect.init(x, y, w, h));
		}

		return this;
	}
	
	protected dispatchDblClick(evt:any) {
		super.dispatchDblClick(evt);
		if(!this.isLeaf) {
			this.expanded = !this.expanded;
			this.parent.relayoutChildren();
		}
	}
	
	protected dispatchClick(evt:any) {
		if(!this.isLeaf) {
			var p = this.toLocalPoint(Point.point.copy(evt));
			var y = 0
			var w = this.h;
			var h = this.h;
			var x = this._level * this._indention;

			if(p.isIn(x, y, w, h)) {
				this.expanded = !this.expanded;
				this.parent.relayoutChildren();
			}
		}
		super.dispatchClick(evt);
	}

	public dispose() {
		super.dispose();
		TreeItem.recyclbale.recycle(this);
	}
	
	public reset(type:string) : Widget {
		super.reset(type);
		this._level = 0;
		this._isLeaf = false;
		this._indention = 30;
		this._expanded = false;

		return this;
	}

	public static TYPE = "tree-item";
	private static recyclbale = new RecyclableCreator<TreeItem>(function() {return new TreeItem()});
	public static create() : Widget {
		return TreeItem.recyclbale.create().reset(TreeItem.TYPE);
	}
};

WidgetFactory.register(TreeItem.TYPE, TreeItem.create);

