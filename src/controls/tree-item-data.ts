
import {Emitter} from "../emitter";
import {TreeItem} from "./tree-item";

export class TreeItemData extends Emitter {
	public data : any;
	public text : string;
	public image : string;
	public treeItem : TreeItem;
	public parent : TreeItemData;
	public children : Array<TreeItemData>;

	public addChild(text:string, image:string, data:any) : TreeItemData{
		var item = TreeItemData.create(text, image, data);
		this.children.push(item);
		item.parent = this;

		return this;
	}

	public dispose() {
		this.data = null;
		this.text = null;
		this.image = null;
		this.parent = null;
		
		this.children.forEach((child:TreeItemData) => {
			child.dispose();
		});
	}
	
	constructor(text:string, image:string, data:any) {
		super();

		this.data = data;
		this.text = text;
		this.image = image;
		this.children = [];
		this.parent = null;

		return;
	}

	public static create(text:string, image:string, data:any) : TreeItemData { 
		return new TreeItemData(text, image, data);	
	}

	public static loadFromJson(json:any) : TreeItemData {
		var item = TreeItemData.create(json.text, json.image, json.data);
		var arr = json.children;
		
		if(arr) {
			arr.forEach(iter => {
				item.children.push(TreeItemData.loadFromJson(iter));
			});
		}

		return item;
	}
}

