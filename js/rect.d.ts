/**
 * @class Rect
 * 用左上角坐标、宽度和高度来描述一个矩形区域。
 */
export declare class Rect {
    /**
     * @property {number} x
     * 左上角X坐标。
     */
    x: number;
    /**
     * @property {number} y
     * 左上角Y坐标。
     */
    y: number;
    /**
     * @property {number} w
     * 宽度。
     */
    w: number;
    /**
     * @property {number} h
     * 高度。
     */
    h: number;
    constructor(x: number, y: number, w: number, h: number);
    /**
     * @method init
     * 初始化Rect。
     * @param {number} x 左上角X坐标。
     * @param {number} y 左上角Y坐标。
     * @param {number} w 宽度。
     * @param {number} h 高度。
     *
     * return {Rect} Rect自己。
     */
    init(x: number, y: number, w: number, h: number): Rect;
    dispose(): void;
    /**
     * @method clone
     * 克隆。
     */
    clone(): Rect;
    /**
     * @method equal
     * 判断两个Rect的区域是否相同。
     */
    equal(other: Rect): boolean;
    /**
     * @method copy
     * 拷贝另外一个Rect的属性到当前的Rect。
     */
    copy(other: Rect): Rect;
    /**
     * @method merge
     * 扩展当前的Rect去包含指定的Rect。
     *
     * @return {Rect} Rect本身。
     */
    merge(other: Rect): Rect;
    /**
     * @method containsPoint
     * 判断Rect是否包含指定的点。
     */
    containsPoint(x: number, y: number): boolean;
    /**
     * @method normalize
     * 规范化Rect，让w/h总是非负的，但表示的区域不变。
     * @param {Rect} out 保存规范化之后的Rect，如果为空，则直接修改Rect本身。
     * @return {Rect} 规范化之后的Rect。
     */
    normalize(out: Rect): Rect;
    static create(x?: number, y?: number, w?: number, h?: number): Rect;
    static rect: Rect;
}
