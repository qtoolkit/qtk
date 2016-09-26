import { Style } from "./style";
import { IThemeManager } from "./itheme-manager";
/**
 * 主题用来统一控制Widget的外观风格。
 */
export declare class ThemeManager implements IThemeManager {
    private data;
    constructor();
    /**
     * 设置指定名称和状态下控件的风格。
     */
    set(name: string, state: string, style: Style): IThemeManager;
    /**
     * 获取指定名称和状态下控件的风格。
     */
    get(name: string, state: string): Style;
    /**
     * 初始化。
     */
    load(data: any, baseURL: string): ThemeManager;
    protected expandCommon(itemInfo: any, common: any): any;
    protected expandExtends(extInfo: any, baseInfo: any): any;
    protected expand(json: any): any;
}
