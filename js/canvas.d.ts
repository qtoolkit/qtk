import { Emitter } from "./emitter";
/**
 *
 * @class Canvas
 * Canvas是对HTMLCanvasElement的包装，主要解决两个问题：
 *
 * 1.对指针事件坐标的转换，让绝对坐标变成相对与Canvas左上角的坐标。
 *
 * 2.支持高清屏。为了避免在高清屏上图片模糊，让Canvas的宽高乘以devicePixelRatio, Canvas的style.width/style.height仍然用实际的宽高，getContext时预先将矩阵乘以devicePixelRatio，从而让使用者无需关心当前屏幕的类型。
 *
 */
export declare class Canvas extends Emitter {
    canvas: HTMLCanvasElement;
    constructor(x?: number, y?: number, w?: number, h?: number, devicePixelRatio?: number, offline?: boolean);
    private onWheelEvent;
    private onKeyEvent;
    private onPointerEvent;
    private _offline;
    private _devicePixelRatio;
    /**
     * @property {number} x
     * X 坐标
     */
    x: number;
    private _x;
    /**
     * @property {number} y
     * Y 坐标
     */
    y: number;
    private _y;
    /**
     * @property {number} z
     * Z 坐标
     */
    z: any;
    private _z;
    /**
     * @property {number} w
     * 宽度
     */
    w: number;
    width: number;
    private _w;
    /**
     * @property {number} h
     * 高度
     */
    h: number;
    height: number;
    private _h;
    /**
     * @property {string} id
     * ID
     */
    id: string;
    private _id;
    /**
     * @method grabKey
     * Grab Key事件。
     */
    grabKey(): void;
    /**
     * @method ungrabKey
     * ungrabKey Key事件。
     */
    ungrabKey(): void;
    /**
     * @method grab
     * grab事件。
     */
    grab(): void;
    /**
     * @method ungrab
     * ungrab事件。
     */
    ungrab(): void;
    private transformXY(detail);
    private moveCanvas(canvas);
    private resizeCanvas(canvas);
    dispose(): void;
    createCanvas(): HTMLCanvasElement;
    ensureCanvas(): void;
    /**
     * @method getContext
     * 获取Canvas的绘图Context。
     */
    getContext(type: string): CanvasRenderingContext2D;
    /**
     * @method create
     * @static
     * 创建一个Canvas对象。
     * @param {number} x X坐标。
     * @param {number} y Y坐标。
     * @param {number} w 宽度。
     * @param {number} h 高度。
     * @param {number} devicePixelRatio 屏幕密度。
     * @param {boolean} offline 是否是离线Canvas。
     */
    static create(x?: number, y?: number, w?: number, h?: number, devicePixelRatio?: number, offline?: boolean): Canvas;
}
