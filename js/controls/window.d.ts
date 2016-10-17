import { Point } from "../point";
import { Widget } from "./widget";
import Events = require("../events");
import { MatrixStack } from "../matrix-stack";
/**
 * 窗口的基类。
 */
export declare abstract class Window extends Widget {
    private _grabbed;
    private _hasOwnCanvas;
    private _pointerPosition;
    private _shouldGrabWhenVisible;
    constructor(type: string);
    /**
     * 是否有自己的Canvas元素(此属性需要在窗口打开之前赋值)。
     * PC上运行时，每个窗口都有自己的Canvas元素。
     * Mobile上运行是，每个窗口共享一个Canvas。
     */
    hasOwnCanvas: boolean;
    /**
     * 获取鼠标在当前窗口上的位置。
     */
    readonly pointerPosition: Point;
    protected dispatchPointerDown(evt: Events.PointerEvent, ctx: MatrixStack): void;
    protected dispatchPointerMove(evt: Events.PointerEvent, ctx: MatrixStack): void;
    /**
     * 抓住事件，让输入事件始终发到当前窗口，直到ungrab为止。
     */
    grab(): Widget;
    /**
     * 取消抓住事件。
     */
    ungrab(): Widget;
    /**
     * 窗口隐藏或显示时，需要grab/ungrab事件。
     */
    setVisible(value: any): void;
    /**
     * 打开窗口。创建窗口的Canvas元素，初始化窗口内的控件，布局窗口内的控件。
     */
    open(): Widget;
    /**
     * 关闭窗口。
     */
    close(): void;
    /**
     * 让窗口最大化，即填满父控件(窗口管理器)或整个可见区域。
     */
    maximize(): Widget;
    /**
     * 将对话框移动到屏幕中间。
     */
    moveToCenter(): Widget;
    protected onReset(): void;
}
