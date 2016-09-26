import { Style } from "./style";
/**
 * 主题用来统一控制Widget的外观风格。
 */
export interface IThemeManager {
    /**
     * 获取指定名称和状态的Style。
     * @param name 名称。如"button"
     * @param state 状态。如"selected"
     * @returns Style
     */
    get(name: string, state: string): Style;
}
