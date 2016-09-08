
import {Emitter} from "../emitter";
import {TreeItem} from "./tree-item";
export class TreeItemData extends Emitter {
	public text : string;
	public image : string;
	public data : any;
	public treeItem : TreeItem;
	public children : Array<TreeItemData>;

	public addChild(text:string, image:string, data:any) : TreeItemData{
		var item = TreeItemData.create(text, image, data);
		this.children.push(item);

		return this;
	}

	constructor(text:string, image:string, data:any) {
		super();

		this.data = data;
		this.text = text;
		this.image = image;
		this.children = [];

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
	};
};
