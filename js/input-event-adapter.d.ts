/**
 * 初始化。
 *
 * InputEventAdapter如其名所示，是对输入事件的适配，为上层提供统一的接口。主要功能有：
 *
 * 1.把鼠标事件、触屏事件和指针事件统一成qtk-pointer事件。
 *
 * 2.把DOMMouseScroll和mousewheel事件统一成qtk-wheel事件。
 *
 * 3.把keydown/keyup事件转换成qtk-keydown/qtk-keyup事件。
 *
 * 4.把tizen和phonegap的按键事件转换成标准的key事件。
 *
 * 5.实现grab/ungrab功能。事件优先发给最后grab的target。
 *
 * @param doc document对象。
 * @param win window对象。
 * @param pointerSupported 当前系统是否支持pointer事件。
 * @param msPointerSupported 当前系统是否支持ms pointer事件。
 * @param touchSupported 当前系统是否支持触屏事件。
 *
 */
export declare function init(doc: any, win: any, pointerSupported: any, msPointerSupported: any, touchSupported: any): void;
/**
 * grab输入事件。输入事件后发送给最后grab的target。
 */
export declare function grab(target: any): void;
/**
 * ungrab移出最后grab的target。
 */
export declare function ungrab(target?: any): boolean;
/**
 * grab输入事件。输入事件后发送给最后grab的target。
 */
export declare function grabKey(target: any): void;
/**
 * ungrab移出最后grab的target。
 */
export declare function ungrabKey(target?: any): any;
/**
 * 注册全局的Input事件。
 */
export declare function on(type: string, callback: Function): void;
/**
 * 注销全局的Input事件。
 */
export declare function off(type: string, callback: Function): void;
