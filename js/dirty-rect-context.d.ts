import { Rect } from "./rect";
import { MatrixStack } from "./matrix-stack";
export declare class DirtyRectContext extends MatrixStack {
    private _rect;
    private _minX;
    private _minY;
    private _maxX;
    private _maxY;
    private _pointsNr;
    constructor();
    addRect(x: number, y: number, w: number, h: number): void;
    private addPoint(p);
    getRect(): Rect;
    reset(): void;
    static create(): DirtyRectContext;
}
