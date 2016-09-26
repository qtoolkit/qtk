export declare class Rect {
    x: number;
    y: number;
    w: number;
    h: number;
    constructor(x: number, y: number, w: number, h: number);
    init(x: number, y: number, w: number, h: number): Rect;
    dispose(): void;
    clone(): Rect;
    equal(other: Rect): boolean;
    copy(other: Rect): Rect;
    merge(other: Rect): Rect;
    static create(x?: number, y?: number, w?: number, h?: number): Rect;
    static rect: Rect;
}
