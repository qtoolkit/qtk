/// <reference path="../typings/globals/node/index.d.ts"/>
/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require("whatwg-fetch");
var path = require("path");
var emitter_1 = require("./emitter");
var Assets = require("./assets");
var Events = require("./events");
(function (ImageDrawType) {
    /**
     * 画在填满指定的矩形区域。
     */
    ImageDrawType[ImageDrawType["DEFAULT"] = 1] = "DEFAULT";
    /**
     * 按1比1大小画在指定的矩形区域的中间。
     */
    ImageDrawType[ImageDrawType["CENTER"] = 2] = "CENTER";
    /**
     * 把图分成3行3列等大小的区域，按9宫格的方式填满指定的矩形区域。
     */
    ImageDrawType[ImageDrawType["PATCH9"] = 3] = "PATCH9";
    /**
     * 把图分成3行1列等大小的区域，按3宫格的方式填满指定的矩形区域。
     */
    ImageDrawType[ImageDrawType["PATCH3_V"] = 4] = "PATCH3_V";
    /**
     * 把图分成1行1列等大小的区域，按3宫格的方式填满指定的矩形区域。
     */
    ImageDrawType[ImageDrawType["PATCH3_H"] = 5] = "PATCH3_H";
    /**
     * 按平铺的方式填满指定的矩形区域。
     */
    ImageDrawType[ImageDrawType["TILE"] = 6] = "TILE";
    /**
     * 按垂直平铺的方式填满指定的矩形区域。
     */
    ImageDrawType[ImageDrawType["TILE_V"] = 7] = "TILE_V";
    /**
     * 按水平平铺的方式填满指定的矩形区域。
     */
    ImageDrawType[ImageDrawType["TILE_H"] = 8] = "TILE_H";
    /**
     * 保持比例缩放到指定的矩形区域。
     */
    ImageDrawType[ImageDrawType["AUTO"] = 9] = "AUTO";
    /**
     * ICON
     */
    ImageDrawType[ImageDrawType["ICON"] = 10] = "ICON";
})(exports.ImageDrawType || (exports.ImageDrawType = {}));
var ImageDrawType = exports.ImageDrawType;
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
var ImageTile = (function (_super) {
    __extends(ImageTile, _super);
    function ImageTile(src) {
        _super.call(this);
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this._id = 0;
        this.img = null;
        this.src = src;
        if (src) {
            this.create(src);
        }
    }
    ImageTile.prototype.toJson = function () {
        return this.src;
    };
    ImageTile.prototype.create = function (src) {
        var index = src.indexOf('#');
        if (index < 0) {
            this.createNormal(src);
        }
        else {
            var base = src.substr(0, index);
            var ext = src.substr(index + 1);
            if (ext[0] === 'x') {
                this.createXYWH(base, ext);
            }
            else if (ext[0] === 'r') {
                this.createRowColIndex(base, ext);
            }
            else {
                this.createTexturePacker(base, ext);
            }
        }
    };
    ImageTile.prototype.init = function (img, x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        if (ImageTile.onImageLoaded) {
            ImageTile.onImageLoaded(this);
        }
        this.dispatchEventAsync({ type: Events.LOAD, detail: this });
    };
    Object.defineProperty(ImageTile.prototype, "complete", {
        get: function () {
            return this.img && this.img.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageTile.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
            if (this.img) {
                this.img.imgID = id;
            }
        },
        enumerable: true,
        configurable: true
    });
    ImageTile.prototype.createNormal = function (src) {
        var _this = this;
        Assets.loadImage(src).then(function (img) {
            _this.init(img, 0, 0, img.width, img.height);
        }).catch(function (err) {
            _this.init(null, 0, 0, 0, 0);
        });
    };
    ImageTile.prototype.createXYWH = function (base, meta) {
        var _this = this;
        var xywh = meta.match(/x([0-9]+)y([0-9]+)w([0-9]+)h([0-9]+)/i);
        var x = parseInt(xywh[1]);
        var y = parseInt(xywh[2]);
        var w = parseInt(xywh[3]);
        var h = parseInt(xywh[4]);
        Assets.loadImage(base).then(function (img) {
            _this.init(img, x, y, w, h);
        }).catch(function (err) {
            _this.init(null, 0, 0, 0, 0);
        });
    };
    ImageTile.prototype.createRowColIndex = function (base, meta) {
        var _this = this;
        var rowcolIndex = meta.match(/r([0-9]+)c([0-9]+)i([0-9]+)/i);
        var rows = parseInt(rowcolIndex[1]);
        var cols = parseInt(rowcolIndex[2]);
        var index = parseInt(rowcolIndex[3]);
        Assets.loadImage(base).then(function (img) {
            var w = img.width / cols;
            var h = img.height / rows;
            var r = (index / cols) >> 0;
            var c = index % cols;
            var x = c * w;
            var y = r * h;
            _this.init(img, x, y, w, h);
        }).catch(function (err) {
            _this.init(null, 0, 0, 0, 0);
        });
    };
    ImageTile.prototype.createTexturePacker = function (jsonURL, name) {
        var _this = this;
        Assets.loadJSON(jsonURL).then(function (json) {
            var info = json.frames[name];
            var imgSRC = path.dirname(jsonURL) + "/" + (json.file || json.meta.image);
            Assets.loadImage(imgSRC).then(function (img) {
                var rect = info.frame || info;
                var x = rect.x;
                var y = rect.y;
                var w = rect.w;
                var h = rect.h;
                if (!info.trimmed && !info.rotate) {
                    _this.init(img, x, y, w, h);
                }
                else {
                    console.log("Not support trimmed mode or rotated mode");
                    _this.init(null, 0, 0, 0, 0);
                }
            }).catch(function (err) {
                _this.init(null, 0, 0, 0, 0);
            });
        }).catch(function (err) {
            _this.init(null, 0, 0, 0, 0);
        });
    };
    ImageTile.prototype.drawDefault = function (ctx, dx, dy, dw, dh) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h, dx, dy, dw, dh);
    };
    ImageTile.prototype.drawIcon = function (ctx, dx, dy, dw, dh) {
        var cx = dx + (dw >> 1);
        var cy = dy + (dh >> 1);
        var x = dx + ((dw - this.w) >> 1);
        var y = dy + ((dh - this.h) >> 1);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(ImageTile.scale, ImageTile.scale);
        ctx.translate(-cx, -cy);
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h, x, y, this.w, this.h);
        ctx.restore();
    };
    ImageTile.prototype.drawCenter = function (ctx, dx, dy, dw, dh) {
        var x = dx + ((dw - this.w) >> 1);
        var y = dy + ((dh - this.h) >> 1);
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h, x, y, this.w, this.h);
    };
    ImageTile.prototype.drawAuto = function (ctx, dx, dy, dw, dh) {
        var x = dx;
        var y = dy;
        var w = 0;
        var h = 0;
        var scaleX = dw / this.w;
        var scaleY = dh / this.h;
        if (scaleX >= scaleY) {
            h = dh;
            w = scaleY * this.w;
            x += ((dw - w) >> 1);
        }
        else {
            w = dw;
            h = scaleX * this.h;
            y += ((dh - h) >> 1);
        }
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h, x, y, w, h);
    };
    ImageTile.prototype.draw3PatchH = function (ctx, dx, dy, dw, dh) {
        var w = Math.min(dw >> 1, (this.w / 3) >> 0);
        ctx.drawImage(this.img, this.x, this.y, w, this.h, dx, dy, w, dh);
        ctx.drawImage(this.img, this.x + this.w - w, this.y, w, this.h, dx + dw - w, dy, w, dh);
        var cw = dw - w - w;
        if (cw > 0) {
            ctx.drawImage(this.img, this.x + w, this.y, w, this.h, dx + w, dy, cw, dh);
        }
    };
    ImageTile.prototype.draw9Patch = function (ctx, dx, dy, dw, dh) {
        var w = Math.min(dw >> 1, (this.w / 3) >> 0);
        var h = Math.min(dh >> 1, (this.h / 3) >> 0);
        var cw = dw - w - w;
        var ch = dh - h - h;
        var rightSX = this.x + this.w - w;
        var rightDX = dx + dw - w;
        var bottomSY = this.y + this.h - h;
        var bottomDY = dy + dh - h;
        ctx.drawImage(this.img, this.x, this.y, w, h, dx, dy, w, h);
        ctx.drawImage(this.img, rightSX, this.y, w, h, rightDX, dy, w, h);
        if (cw > 0) {
            ctx.drawImage(this.img, this.x + w, this.y, w, h, dx + w, dy, cw, h);
        }
        ctx.drawImage(this.img, this.x, this.y + h, w, h, dx, dy + h, w, ch);
        ctx.drawImage(this.img, rightSX, this.y + h, w, h, rightDX, dy + h, w, ch);
        if (cw > 0 && ch > 0) {
            ctx.drawImage(this.img, this.x + w, this.y + h, w, h, dx + w, dy + h, cw, ch);
        }
        ctx.drawImage(this.img, this.x, bottomSY, w, h, dx, bottomDY, w, h);
        ctx.drawImage(this.img, rightSX, bottomSY, w, h, rightDX, bottomDY, w, h);
        if (cw > 0) {
            ctx.drawImage(this.img, this.x + w, bottomSY, w, h, dx + w, bottomDY, cw, h);
        }
    };
    ImageTile.prototype.draw3PatchV = function (ctx, dx, dy, dw, dh) {
        var h = Math.min(dh >> 1, (this.h / 3) >> 0);
        ctx.drawImage(this.img, this.x, this.y, this.w, h, dx, dy, dw, h);
        ctx.drawImage(this.img, this.x, this.y + this.h - h, this.w, h, dx, dy + dh - h, dw, h);
        var ch = dh - h - h;
        if (ch > 0) {
            ctx.drawImage(this.img, this.x, this.y + h, this.w, h, dx, dy + h, dw, ch);
        }
    };
    ImageTile.prototype.drawTileH = function (ctx, dx, dy, dw, dh) {
        var x = dx;
        var w = 0;
        var remainW = dw;
        while (remainW > 0) {
            w = Math.min(this.w, remainW);
            ctx.drawImage(this.img, this.x, this.y, w, this.h, x, dy, w, dh);
            x += w;
            remainW -= w;
        }
    };
    ImageTile.prototype.drawTileV = function (ctx, dx, dy, dw, dh) {
        var y = dy;
        var h = 0;
        var remainH = dh;
        while (remainH > 0) {
            h = Math.min(this.h, remainH);
            ctx.drawImage(this.img, this.x, this.y, this.w, h, dx, y, dw, h);
            y += h;
            remainH -= h;
        }
    };
    ImageTile.prototype.drawTile = function (ctx, dx, dy, dw, dh) {
        var x = dx;
        var y = dy;
        var w = 0;
        var h = 0;
        var remainW = dw;
        var remainH = dh;
        while (remainH > 0) {
            h = Math.min(this.h, remainH);
            while (remainW > 0) {
                w = Math.min(this.w, remainW);
                ctx.drawImage(this.img, this.x, this.y, w, h, x, y, w, h);
                x += w;
                remainW -= w;
            }
            x = 0;
            remainW = dw;
            y += h;
            remainH -= h;
        }
    };
    ImageTile.prototype.draw = function (ctx, type, dx, dy, dw, dh) {
        if (ctx && this.complete) {
            if (type === ImageDrawType.CENTER) {
                this.drawCenter(ctx, dx, dy, dw, dh);
            }
            else if (type === ImageDrawType.AUTO) {
                this.drawAuto(ctx, dx, dy, dw, dh);
            }
            else if (type === ImageDrawType.PATCH3_H) {
                this.draw3PatchH(ctx, dx, dy, dw, dh);
            }
            else if (type === ImageDrawType.PATCH3_V) {
                this.draw3PatchV(ctx, dx, dy, dw, dh);
            }
            else if (type === ImageDrawType.PATCH9) {
                this.draw9Patch(ctx, dx, dy, dw, dh);
            }
            else if (type === ImageDrawType.TILE_H) {
                this.drawTileH(ctx, dx, dy, dw, dh);
            }
            else if (type === ImageDrawType.TILE_V) {
                this.drawTileV(ctx, dx, dy, dw, dh);
            }
            else if (type === ImageDrawType.TILE) {
                this.drawTile(ctx, dx, dy, dw, dh);
            }
            else if (type === ImageDrawType.ICON) {
                this.drawIcon(ctx, dx, dy, dw, dh);
            }
            else {
                this.drawDefault(ctx, dx, dy, dw, dh);
            }
        }
    };
    ImageTile.init = function (density, scale, onImageLoaded) {
        ImageTile.scale = scale;
        ImageTile.density = density;
        ImageTile.onImageLoaded = onImageLoaded;
    };
    ImageTile.fixURL = function (src) {
        var ret = src.replace("@density", "x" + ImageTile.density);
        return ret;
    };
    ImageTile.create = function (_src, onDone) {
        var src = ImageTile.fixURL(_src);
        var it = ImageTile.cache[src];
        if (!it) {
            it = new ImageTile(src);
            ImageTile.cache[src] = it;
        }
        if (onDone) {
            if (it.complete) {
                setTimeout(onDone, 0);
            }
            else {
                it.once(Events.LOAD, onDone);
            }
        }
        return it;
    };
    ImageTile.scale = 1;
    ImageTile.density = 1;
    ImageTile.cache = {};
    return ImageTile;
}(emitter_1.Emitter));
exports.ImageTile = ImageTile;
;
