import { Rect } from "./rect";
import { Style } from "./style";
export declare enum RoundType {
    TL = 1,
    TR = 2,
    BL = 4,
    BR = 8,
}
export declare class TextLine {
    text: string;
    width: number;
    constructor();
}
export declare class Graphics {
    static canvas: HTMLCanvasElement;
    static measureText(text: string, font: string): number;
    static layoutText(text: string, maxWidth: number, font: string, _ctx?: any): Array<TextLine>;
    static drawTextML(ctx: any, lines: Array<TextLine>, style: Style, r: Rect): void;
    static drawTextSL(ctx: any, text: string, style: Style, r: Rect): void;
    static drawLine(ctx: any, strokeStyle: string, lineWidth: number, x1: number, y1: number, x2: number, y2: number): void;
    static drawCircle(ctx: any, fillStyle: string, strokeStyle: string, lineWidth: number, x: number, y: number, r: number): void;
    static drawRect(ctx: any, fillStyle: string, strokeStyle: string, lineWidth: number, x: number, y: number, w: number, h: number): void;
    static drawRoundRect(ctx: any, fillStyle: string, strokeStyle: string, lineWidth: number, x: number, y: number, w: number, h: number, r: number, type?: RoundType): void;
    static roundRect(ctx: any, x: number, y: number, w: number, h: number, r: number, type?: RoundType): void;
}
