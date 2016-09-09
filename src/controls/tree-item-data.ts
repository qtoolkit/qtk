
import {aRemove} from "../utils";
import {Emitter} from "../emitter";
import {TreeItem} from "./tree-item";
import {ImageTile} from "../image-tile";

/**
 * TreeItem对应的数据信息。
 */
export class TreeItemData extends Emitter {
	/**
	 * TreeItem上的用户数据，与具体的应用场景有关。
	 */
	public userData : any;
	
	/**
	 * 用于显示的文本。
	 */
	public text : string;
	
	/**
	 * 用于查找的名称。
	 */
	public name : string;

	/**
	 * 用于显示的图标。
	 */
	public icon : ImageTile;

	/**
	 * 当前项是否展开。
	 */
	public expanded : boolean;
	/**
	 * 当前项是否被选中。
	 */
	public selected : boolean;
	/**
	 * 当前项对应的TreeItem。
	 */
	public treeItem : TreeItem;

	/**
	 * 当前项的父节点。
	 */
	public parent   : TreeItemData;
	/**
	 * 当前项的子节点。
	 */
	public children : Array<TreeItemData>;

	/**
	 * 从子节点数组中删除指定的子节点。
	 * @param data 子节点。
	 * @param destroy 是否销毁该子节点。
	 * @returns 成功返回true失败返回false。
	 */
	public removeChild(data:TreeItemData, destroy:boolean) : boolean {
		if(aRemove(this.children, data)) {
			data.parent = null;
			if(destroy) {
				data.dispose();
			}
			return true;
		}else{
			return false;
		}
	}

	/**
	 * 增加一个子节点。
	 * @param text 文本
	 * @param icon 图标 
	 * @param data 数据
	 * @returns 成功返回新增的子节点，失败返回null。
	 */
	public addChild(text:string, icon:string, userData:any) : TreeItemData{
		var itemData = TreeItemData.create(text, icon, userData);
		this.children.push(itemData);
		itemData.parent = this;

		return itemData;
	}

	public dispose() {
		this.userData = null;
		this.text = null;
		this.icon = null;
		this.parent = null;
		
		this.children.forEach((child:TreeItemData) => {
			child.dispose();
		});
		this.children = null;
	}

	public reset() : TreeItemData  {
		this.userData = null;
		this.text = null;
		this.icon = null;
		this.children = [];
		this.parent = null;

		return this;
	}

	constructor(text:string, iconURL:string, userData:any) {
		super();
		this.userData = userData;
		this.text = text;
		if(iconURL) {
			this.icon = ImageTile.create(iconURL, (evt) => {
				
			});
		}else{
			this.icon = null;
		}
		this.children = [];	

		return;
	}

	public static create(text:string, icon:string, userData:any) : TreeItemData { 
		return new TreeItemData(text, icon, userData);	
	}
}

