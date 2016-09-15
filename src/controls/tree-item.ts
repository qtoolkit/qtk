
import {Rect} from "../rect";
import {Point} from "../point";
import {Style} from "../style";
import {TreeView} from "./tree-view";
import {TreeItemData} from "./tree-item-data";
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "./widget-factory";
import {RoundType, Graphics} from "../graphics";
import {ImageTile, ImageDrawType} from "../image-tile";
import {RecyclableCreator} from "../recyclable-creator";
import {Widget, WidgetState, HitTestResult} from "./widget";

/**
 * 树形视图中，显示的一个子项。
 */
export class TreeItem extends Widget {
	protected _level  : number;
	protected _indention : number;
	protected _data : TreeItemData;
	protected _parentItem : TreeItem;
	protected _childrenItems : Array<TreeItem>;

	constructor() {
		super(TreeItem.TYPE);
	}

	/**
	 * 显示的文本，从data中获取。
	 */
	public get text() : string {
		return this._data.text;
	}
	
	/**
	 * 显示的图标，从data中获取。
	 */
	public get icon() : ImageTile{
		return this._data.icon;
	}

	/**
	 * 显示的图标，从data中获取。
	 */
	public get userData() : any{
		return this._data.userData;
	}

	public get desireWidth() : number {
		var text = this.data.text;
		var style = this.getStyle();
		var w = this._level * this._indention + this.h;
		
		if(text) {
			w += Graphics.measureText(text, style.font);
		}

		return w;
	}

	/**
	 * 可见性判断：要求父控件没有折叠。
	 */
	public get visible() {
		var item:TreeItem = this.parentItem;
		while(item !== null) {
			if(!item.expanded) {
				return false;
			}
			item = item.parentItem;
		}

		return this._visible;
	}
	
	public get parentItem() : TreeItem {
		return this._parentItem;
	}
	public set parentItem(parentItem:TreeItem) {
		this._parentItem = parentItem;
		if(parentItem) {
			parentItem._childrenItems.push(this);
		}
	}
	
	public get childrenItems() : Array<TreeItem> {
		return this._childrenItems;
	}

	public get level() : number {
		return this._level;
	}
	public set level(value:number) {
		this._level = value;
	}
	
	public get selected() : boolean {
		return this.data.selected;
	}
	public set selected(value:boolean) {
		this.data.selected = value;
	}
	
	public get isLeaf() : boolean {
		var data = this._data;
		return !data.children || !data.children.length;
	}

	public get data() : TreeItemData{
		return this._data;
	}
	public set data(value:TreeItemData) {
		this._data = value;
	}

	public get indention() : number {
		return this._indention;
	}
	public set indention(value:number) {
		this._indention = value;
	}

	public get expanded() : boolean{
		return this.data.expanded;
	}
	public set expanded(value:boolean) {
		this.data.expanded = value;
	}

	protected getStateForStyle() : WidgetState {
		return this.selected ? WidgetState.SELECTED : this._state;
	}

	protected getStyleType() : string {
		if(this._styleType) {
			return this._styleType;
		}

		var appendix = this.isLeaf ? "leaf" : (this.expanded ? "expanded":"collapsed"); 
		
		return (this.type) +"."+appendix;
	}
	
	protected drawImage(ctx:any, style:Style) : Widget {
		var img = style.foreGroundImage;
		if(img) {
			var y = 0;
			var w = this.h;
			var h = this.h;
			var x = this._level * this._indention;

			img.draw(ctx, ImageDrawType.ICON, x, y, w, h);
		}

		return this;
	}
	
	protected drawText(ctx:any, style:Style) : Widget {
		var text = this.data.text;
		if(text && style.textColor) {
			var y = 0;
			var h = this.h;
			var x = this._level * this._indention;
			if(style.foreGroundImage) {
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

		var parent = <TreeView>this.parent;
		if(evt.ctrlKey && parent.multiSelectable) {
			parent.setItemSelected(this, !this.selected, false);
		}
		else{
			parent.setItemSelected(this, true, true);
		}
		super.dispatchClick(evt);
	}

	public dispose() {
		super.dispose();
		this._data = null;
		this.parentItem = null;
		this._childrenItems = null;
		TreeItem.recyclbale.recycle(this);
	}
	
	public reset(type:string) : Widget {
		super.reset(type);
		this._level = 0;
		this._data = null;
		this._indention = 30;
		this._parentItem = null;
		this._childrenItems = [];

		return this;
	}

	public static TYPE = "tree-item";
	private static recyclbale = new RecyclableCreator<TreeItem>(function() {return new TreeItem()});
	public static create() : Widget {
		return TreeItem.recyclbale.create().reset(TreeItem.TYPE);
	}
};

WidgetFactory.register(TreeItem.TYPE, TreeItem.create);

