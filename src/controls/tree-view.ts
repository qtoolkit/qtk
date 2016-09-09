
import {Rect} from "../rect";
import {Widget} from "./widget";
import {TreeItem} from "./tree-item";
import {ListView} from "./list-view";
import {ScrollView} from "./scroll-view";
import {TreeItemData} from "./tree-item-data";
import {WidgetFactory} from "./widget-factory";
import {Layouter} from "../layouters/layouter";
import {ListLayouter} from "../layouters/list-layouter";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 树形视图。
 */
export class TreeView extends ListView {
	public get multiSelectable() : boolean {
		return this._multiSelectable;
	}
	public set multiSelectable(value:boolean) {
		this._multiSelectable = value;
	}

	/**
	 * 每一层缩减的距离。
	 */
	public get indention() : number {
		return this._indention || 30;
	}
	public set indention(value:number) {
		this._indention = value;
	}

	/**
	 * 选中一个子项。
	 */
	public setItemSelected(item:TreeItem, selected:boolean, exclude:boolean) : Widget {
		if(!this.multiSelectable || exclude) {
			this.children.forEach((child:TreeItem) => {
				if(child === item) {
					child.selected = selected;
				}else{
					if(child.selected) {
						child.selected = false;
					}
				}
			});
		}else{
			item.selected = selected;
		}

		this.requestRedraw();

		return this;
	}

	public addItem(parentData:TreeItemData, text:string,  data:any, image:string) : TreeItemData {
		parentData = parentData ? parentData : this._rootData;
		var itemData = parentData.addChild(text, image, data);
		
		this.reload();

		return itemData;	
	}

	public removeAllItems() {
		this._rootData.children.length = 0;
		this.reload();
	}

	public removeItem(item:TreeItemData, destroy?:boolean) : boolean {
		var ret = item.parent.removeChild(item, destroy);
		this.reload();

		return ret;
	}

	protected doLoad(data:TreeItemData, parentItem:TreeItem, level:number) {
		var item = <TreeItem>TreeItem.create();
		var isLeaf = !data.children || !data.children.length;

		data.treeItem = item;
		item.set({level:level, indention:this.indention, data:data, parentItem:parentItem});
		this.addChild(item, true);

		if(!isLeaf) {
			data.children.forEach((iter) => {
				this.doLoad(iter, item, level+1);
			});
		}
	}

	public reload() {
		this.resetChilren();
		this._rootData.children.forEach((data:TreeItemData) => {
			this.doLoad(data, null, 0)
		});
		this.relayoutChildren();
	}

	public loadData(data:TreeItemData) : Widget {
		if(data.text === "%root%") {
			this._rootData = data;
		}else{
			this._rootData.children.length = 0;
			this._rootData.children.push(data);
		}
		this.reload();

		return this;
	}

	protected getLayoutWidth() : number {
		var w = 0;
		this.children.forEach((child:TreeItem) => {
			var desireWidth = child.desireWidth;
			if(desireWidth > w) {
				w = desireWidth;
			}
		});

		return Math.max(this.w, w + this.itemHeight * 2);
	}
	
	private resetChilren() : Widget{
		this.children.forEach(child => {
			child.deinit();
			child.dispose();
		});
		this.children.length = 0;

		return this;
	}

	protected _indention : number;
	protected _multiSelectable : boolean;
	protected _rootData : TreeItemData;	
	
	constructor() {
		super();
		this.type = TreeView.TYPE;
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this._rootData = TreeItemData.create("root", null, null);
		this.scrollerOptions.scrollingX = true;
		
		return this;
	}

	public dispose() {
		super.dispose();
		this._rootData = null;
		TreeView.recyclbaleTreeView.recycle(this);
	}

	public static TYPE = "tree-view";
	private static recyclbaleTreeView = new RecyclableCreator<TreeView>(function() {return new TreeView()});
	public static create() : Widget {
		return TreeView.recyclbaleTreeView.create().reset(TreeView.TYPE);
	}
};

WidgetFactory.register(TreeView.TYPE, TreeView.create);

