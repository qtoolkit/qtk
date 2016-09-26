import { Point } from "./point";
import { Matrix } from "./matrix";
export declare class MatrixStack {
    private matrix;
    private stack;
    constructor();
    save(): MatrixStack;
    restore(): MatrixStack;
    identity(): MatrixStack;
    set(a: number, b: number, c: number, d: number, tx: number, ty: number): MatrixStack;
    rotate(rad: number): MatrixStack;
    scale(sx: number, sy: number): MatrixStack;
    translate(dx: number, dy: number): void;
    transformPoint(x: number, y: number, out?: Point): Point;
    invert(): Matrix;
    matrixToString(): string;
    static create(): MatrixStack;
}
