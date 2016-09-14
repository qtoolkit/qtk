import {Style} from "./style";
import {assign} from "./utils";
import {IThemeManager} from "./itheme-manager";

/**
 * 主题用来统一控制Widget的外观风格。
 */
export class ThemeManager implements IThemeManager {
	private data : any;

	constructor() {
		this.data = {};
	}

	/**
	 * 设置指定名称和状态下控件的风格。
	 */
	public set(name:string, state:string, style:Style) : IThemeManager {
		if(!this.data[name]) {
			this.data[name] = {};
		}

		this.data[name][state] = style;

		return this;
	}

	/**
	 * 获取指定名称和状态下控件的风格。
	 */
	public get(name:string, state:string) : Style {
		var styles = this.data[name];

		return styles ? styles[state] : null;
	}

	/**
	 * 初始化。
	 */
	public load(data:any, baseURL:string) : ThemeManager {
		var json = this.expand(data);
		for(var itemName in json) {
			var itemInfo = json[itemName];

			for(var stateName in itemInfo) {
				var styleInfo = itemInfo[stateName];
				this.set(itemName, stateName, Style.create(styleInfo, baseURL));
			}
		}

		return this;
	}
	
	protected expandCommon(itemInfo:any, common:any) : any {
		for(var key in itemInfo) {
			var value = itemInfo[key];
			itemInfo[key] = assign(value, common);
		}

		return itemInfo;
	}

	protected expandExtends(extInfo:any, baseInfo:any) : any {
		var ret = {};
		for(var key in baseInfo) {
			ret[key] = assign({}, baseInfo[key]);
		}
		
		for(var key in extInfo) {
			ret[key] = assign(ret[key]||{}, extInfo[key]);
		}

		return ret;
	}

	protected expand(json:any) : any {
		var ret = {};
		for(var itemName in json) {
			var itemInfo = json[itemName];
			var common = itemInfo["common"];
			var ext = itemInfo["extends"];
			delete itemInfo["common"];
			delete itemInfo["extends"];

			if(ext) {
				var baseInfo = JSON.parse(JSON.stringify(ret[ext]));
				if(common) {
					this.expandCommon(baseInfo, common);
				}
				itemInfo = this.expandExtends(itemInfo, baseInfo);
			}else{
				if(common) {
					this.expandCommon(itemInfo, common);
				}
			}

			ret[itemName] = itemInfo;
		}

		return ret;
	}
}

