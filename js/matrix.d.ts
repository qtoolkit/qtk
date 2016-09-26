import { Point } from "./point";
/**
 * 2维矩阵变换
 */
export declare class Matrix {
    data: Float32Array;
    constructor();
    identity(): this;
    clone(): Matrix;
    set(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
    rotate(rad: number): Matrix;
    scale(sx: number, sy: number): Matrix;
    translate(dx: number, dy: number): this;
    transformPoint(x: number, y: number, out?: Point): Point;
    equal(other: any): boolean;
    invert(): Matrix;
    toString(): string;
    dispose(): void;
    private static cache;
    static create(): Matrix;
}
