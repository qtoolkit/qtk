import { Style } from "../style";
import { Widget } from "../controls/widget";
export declare class Ruler extends Widget {
    protected _originX: number;
    protected _originY: number;
    protected _scale: number;
    protected _pointerX: number;
    protected _pointerY: number;
    originX: number;
    originY: number;
    scale: number;
    pointerX: number;
    pointerY: number;
    setPointer(x: number, y: number): Ruler;
    setOrigin(x: number, y: number): Ruler;
    drawBackground(ctx: any, style: Style): Widget;
    static SIZE: number;
    constructor(type: string);
}
export declare class VRuler extends Ruler {
    protected drawColorBackground(ctx: any, style: Style): Widget;
    relayout(): void;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): VRuler;
}
export declare class HRuler extends Ruler {
    protected drawColorBackground(ctx: any, style: Style): Widget;
    relayout(): void;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): HRuler;
}
