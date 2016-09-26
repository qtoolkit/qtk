import { Rect } from "./rect";
export declare class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
    dispose(): void;
    init(x: number, y: number): Point;
    copy(p: Point): Point;
    isInRect(r: Rect): boolean;
    isIn(x: number, y: number, w: number, h: number): boolean;
    static create(x?: number, y?: number): Point;
    static point: Point;
}
