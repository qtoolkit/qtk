/**
 * 输入事件的详细信息。
 */
export declare class InputEventDetail {
    /**
     * alt键是否按下。
     */
    altKey: boolean;
    /**
     * ctrl键是否按下。
     */
    ctrlKey: boolean;
    /**
     * shift键是否按下。
     */
    shiftKey: boolean;
    /**
     * command键是否按下。
     */
    commandKey: boolean;
    timeStamp: number;
    constructor(altKey?: boolean, ctrlKey?: boolean, shiftKey?: boolean, commandKey?: boolean);
}
/**
 * 指针事件的详细信息。
 */
export declare class PointerEventDetail extends InputEventDetail {
    /**
     * 指针事件的ID。
     */
    id: number;
    /**
     * 指针事件的x坐标。
     */
    x: number;
    /**
     * 指针事件的y坐标。
     */
    y: number;
    /**
     * 指针是否按下。
     */
    pointerDown: boolean;
    /**
     * 如果指针按下，按下时的x坐标。
     */
    pointerDownX: number;
    /**
     * 如果指针按下，按下时的y坐标。
     */
    pointerDownY: number;
    /**
     * 如果指针按下，按下时的时间。
     */
    pointerDownTime: number;
    constructor(id: number, x: number, y: number, altKey?: boolean, ctrlKey?: boolean, shiftKey?: boolean, commandKey?: boolean);
    /**
     * 设置指针按下的状态。
     */
    setPointerDown(pointerDown: boolean, x?: number, y?: number, t?: number): void;
    dispose(): void;
    static create(id: number, x: number, y: number, altKey?: boolean, ctrlKey?: boolean, shiftKey?: boolean, commandKey?: boolean): PointerEventDetail;
}
/**
 * 按键事件的详细信息。
 */
export declare class KeyEventDetail extends InputEventDetail {
    /**
     * 键值。
     */
    keyCode: number;
    constructor(keyCode: number, altKey?: boolean, ctrlKey?: boolean, shiftKey?: boolean, commandKey?: boolean);
    dispose(): void;
    static create(keyCode: number, altKey?: boolean, ctrlKey?: boolean, shiftKey?: boolean, commandKey?: boolean): KeyEventDetail;
}
/**
 * 滚轮事件的详细信息。
 */
export declare class WheelEventDetail extends InputEventDetail {
    /**
     * 滚动的间隔。
     */
    delta: number;
    constructor(delta: number, altKey?: boolean, ctrlKey?: boolean, shiftKey?: boolean, commandKey?: boolean);
    dispose(): void;
    static create(delta: number, altKey?: boolean, ctrlKey?: boolean, shiftKey?: boolean, commandKey?: boolean): WheelEventDetail;
}
