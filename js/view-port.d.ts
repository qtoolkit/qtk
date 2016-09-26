/// <reference path="../typings/globals/eventemitter3/index.d.ts" />
import { Emitter } from "./emitter";
import { IViewPort } from "./iview-port";
/**
 * 表示屏幕大小和密度。
 */
export declare class ViewPort extends Emitter implements IViewPort {
    private _width;
    private _height;
    private _density;
    constructor();
    private getScaleValues();
    private updateHeadViewportMeta(value);
    init(width?: number, height?: number, density?: number): void;
    readonly width: number;
    readonly height: number;
    readonly w: number;
    readonly h: number;
    readonly density: number;
    static create(width?: number, height?: number, density?: number): IViewPort;
}
