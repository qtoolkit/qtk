
import {Rect} from "../rect";
import {Widget} from "./widget";
import {TreeItem} from "./tree-item";
import {TreeItemData} from "./tree-item-data";
import {ScrollView} from "./scroll-view";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {Layouter} from "../layouters/layouter";
import {ListLayouter} from "../layouters/list-layouter";
import {ListView} from "./list-view";

export class TreeView extends ListView {
	protected _indention : number;
	
	public get indention() : number {
		return this._indention || 30;
	}
	public set indention(value:number) {
		this._indention = value;
	}

	private resetChilren() : Widget{
		this.children.forEach(child => {
			child.deinit();
			child.dispose();
		});
		this.children.length = 0;

		return this;
	}

	public doLoad(data:TreeItemData, parentItem:TreeItem, level:number) {
		var item = TreeItem.create();
		var isLeaf = !data.children || !data.children.length;

		item.set({level:level, data:data, isLeaf:isLeaf, parentItem:parentItem});
		this.addChild(item, true);
		if(!isLeaf) {
			data.children.forEach(iter => {
				this.doLoad(iter, <TreeItem>item, level+1);
			});
		}
	}

	public loadData(data:TreeItemData) : Widget {
		this.resetChilren();
		this.doLoad(data, null, 0);
		
		this.relayoutChildren();

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

		return Math.max(this.w, w + this.itemHeight);
	}

	constructor() {
		super();
		this.type = TreeView.TYPE;
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this.scrollerOptions.scrollingX = true;
		
		return this;
	}

	public dispose() {
		super.dispose();
		TreeView.recyclbaleTreeView.recycle(this);
	}

	public static TYPE = "tree-view";
	private static recyclbaleTreeView = new RecyclableCreator<TreeView>(function() {return new TreeView()});
	public static create() : Widget {
		return TreeView.recyclbaleTreeView.create().reset(TreeView.TYPE);
	}
};

WidgetFactory.register(TreeView.TYPE, TreeView.create);

