/// <reference path="../typings/globals/es6-promise/index.d.ts" />
/// <reference path="../typings/globals/node/index.d.ts" />
/// <reference path="../typings/globals/eventemitter3/index.d.ts" />
import "whatwg-fetch";
import { Emitter } from "./emitter";
export declare enum ImageDrawType {
    /**
     * 画在填满指定的矩形区域。
     */
    DEFAULT = 1,
    /**
     * 按1比1大小画在指定的矩形区域的中间。
     */
    CENTER = 2,
    /**
     * 把图分成3行3列等大小的区域，按9宫格的方式填满指定的矩形区域。
     */
    PATCH9 = 3,
    /**
     * 把图分成3行1列等大小的区域，按3宫格的方式填满指定的矩形区域。
     */
    PATCH3_V = 4,
    /**
     * 把图分成1行1列等大小的区域，按3宫格的方式填满指定的矩形区域。
     */
    PATCH3_H = 5,
    /**
     * 按平铺的方式填满指定的矩形区域。
     */
    TILE = 6,
    /**
     * 按垂直平铺的方式填满指定的矩形区域。
     */
    TILE_V = 7,
    /**
     * 按水平平铺的方式填满指定的矩形区域。
     */
    TILE_H = 8,
    /**
     * 保持比例缩放到指定的矩形区域。
     */
    AUTO = 9,
    /**
     * ICON
     */
    ICON = 10,
}
/**
 * 把多个小的图片合并成一张大图，不但可以减少网路请求和GPU的调用次数，还可以提高内存的利用率。
 * ImageTile用来表示大图中的一张小图，QTK中支持下面几种方式：
 *
 * 0.普通图片。如果URL中没有#，则表示一张普通图片，它的位置为(0,0)，大小为图片的整个大小。
 *
 * 1.指定子图的位置和大小，#之前的部分是大图的URL，后面是子图的位置和大小信息。
 *  字母x后紧跟x坐标，字母y后紧跟y坐标，字母w后紧跟宽度，字母h后紧跟高度。
 *  下面的URL表示图片demo.png中位置为(100,200)，大小为(300,400)的子图。
 *
 * ```
 * https://qtoolkit.github.io/demo.png#x100y200w300h400
 * ```
 *
 * 2.指定图片的行列数以及小图的序数，#之前的部分是大图的URL，后面是行数、列数和序数。
 *  字母r紧跟行数，字母c后紧跟列数，字母i后紧跟序数。
 *
 *  下面的URL表示图片demo.png分成3行3列，序数为0的子图。
 *
 * ```
 * https://qtoolkit.github.io/demo.png#r3c3i0
 * ```
 *
 * 3.用TexturePacker打包的JSON Hash格式。#之前部分是JSON的URL，后面是子图的名称。如：
 *
 * ```
 * https://qtoolkit.github.io/demo.json#demo.png
 * ```
 *
 *
 */
export declare class ImageTile extends Emitter {
    x: number;
    y: number;
    w: number;
    h: number;
    img: any;
    src: string;
    _id: number;
    constructor(src: string);
    toJson(): string;
    private create(src);
    private init(img, x, y, w, h);
    readonly complete: boolean;
    id: number;
    private createNormal(src);
    private createXYWH(base, meta);
    private createRowColIndex(base, meta);
    private createTexturePacker(jsonURL, name);
    private drawDefault(ctx, dx, dy, dw, dh);
    private drawIcon(ctx, dx, dy, dw, dh);
    private drawCenter(ctx, dx, dy, dw, dh);
    private drawAuto(ctx, dx, dy, dw, dh);
    private draw3PatchH(ctx, dx, dy, dw, dh);
    private draw9Patch(ctx, dx, dy, dw, dh);
    private draw3PatchV(ctx, dx, dy, dw, dh);
    private drawTileH(ctx, dx, dy, dw, dh);
    private drawTileV(ctx, dx, dy, dw, dh);
    private drawTile(ctx, dx, dy, dw, dh);
    draw(ctx: any, type: number, dx: number, dy: number, dw: number, dh: number): void;
    private static scale;
    private static density;
    private static onImageLoaded;
    static init(density: number, scale: number, onImageLoaded: Function): void;
    static cache: {};
    static fixURL(src: string): string;
    static create(_src: string, onDone?: Function): ImageTile;
}
