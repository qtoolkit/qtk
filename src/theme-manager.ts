import {Style} from "./style";
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
	public init(json:any) : ThemeManager {
		for(var itemName in json) {
			var itemInfo = json[itemName];

			for(var stateName in itemInfo) {
				var styleInfo = itemInfo[stateName];
				this.set(itemName, stateName, Style.create(styleInfo));
			}
		}

		return this;
	}
}

