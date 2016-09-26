/// <reference path="../typings/globals/eventemitter3/index.d.ts" />
import { Emitter } from "./emitter";
import { ImageDrawType, ImageTile } from "./image-tile";
/**
 * Style用来控制Widget的外观效果，如背景和字体等等。
 */
export declare class Style extends Emitter {
    private _backGroundColor;
    private _foreGroundColor;
    private _backGroundImage;
    private _backGroundImageDrawType;
    private _foreGroundImage;
    private _foreGroundImageDrawType;
    private _lineCap;
    private _lineJoin;
    private _dashLine;
    private _lineWidth;
    private _lineColor;
    private _roundRadius;
    private _roundType;
    private _fontFamily;
    private _fontSize;
    private _textColor;
    private _fontBold;
    private _fontItalic;
    private _fontUnderline;
    private _textAlign;
    private _textBaseline;
    constructor();
    private notifyChanged();
    readonly textLineHeight: number;
    clone(): Style;
    toJson(): any;
    fromJson(json: any, baseURL: string): void;
    backGroundColor: string;
    foreGroundColor: string;
    backGroundImage: ImageTile;
    backGroundImageDrawType: ImageDrawType;
    foreGroundImage: ImageTile;
    foreGroundImageDrawType: ImageDrawType;
    readonly font: string;
    fontFamily: string;
    fontSize: number;
    textColor: string;
    fontBold: boolean;
    fontItalic: boolean;
    fontUnderline: boolean;
    textAlign: string;
    textBaseline: string;
    lineWidth: number;
    lineJoin: number;
    lineCap: number;
    dashLine: number[];
    lineColor: string;
    roundRadius: number;
    roundType: string;
    static create(json?: any, baseURL?: string): Style;
    static fillStyles: {};
    static fill(ctx: any, fillStyle: string, h: number): void;
}
