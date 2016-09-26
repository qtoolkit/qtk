import { Emitter } from "./emitter";
/**
 * Canvas是对HTMLCanvasElement的包装，主要解决两个问题：
 *
 * 1.对指针事件坐标的转换，让绝对坐标变成相对与Canvas左上角的坐标。
 *
 * 2.支持高清屏。为了避免在高清屏上图片模糊，让Canvas的宽高乘以devicePixelRatio, Canvas的style.width/style.height仍然用实际的宽高，getContext时预先将矩阵乘以devicePixelRatio，从而让使用者无需关心当前屏幕的类型。
 *
 */
export declare class Canvas extends Emitter {
    private _x;
    private _y;
    private _z;
    private _w;
    private _h;
    private _id;
    private _offline;
    private _devicePixelRatio;
    canvas: HTMLCanvasElement;
    private onWheelEvent;
    private onKeyEvent;
    private onPointerEvent;
    private transformXY(detail);
    constructor(x?: number, y?: number, w?: number, h?: number, devicePixelRatio?: number, offline?: boolean);
    id: string;
    x: number;
    y: number;
    w: number;
    h: number;
    width: number;
    height: number;
    grabKey(): void;
    ungrabKey(): void;
    grab(): void;
    ungrab(): void;
    private moveCanvas(canvas);
    private resizeCanvas(canvas);
    z: any;
    dispose(): void;
    createCanvas(): HTMLCanvasElement;
    ensureCanvas(): void;
    getContext(type: string): CanvasRenderingContext2D;
    static create(x?: number, y?: number, w?: number, h?: number, devicePixelRatio?: number, offline?: boolean): Canvas;
}
