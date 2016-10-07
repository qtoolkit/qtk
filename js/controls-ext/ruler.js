"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var Ruler = (function (_super) {
    __extends(Ruler, _super);
    function Ruler(type) {
        _super.call(this, type);
        this.scale = 1;
        this.originX = 0;
        this.originY = 0;
        this.pointerX = 0;
        this.pointerY = 0;
    }
    Object.defineProperty(Ruler.prototype, "originX", {
        get: function () {
            return this._originX;
        },
        set: function (value) {
            this._originX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ruler.prototype, "originY", {
        get: function () {
            return this._originY;
        },
        set: function (value) {
            this._originY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ruler.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (value) {
            this._scale = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ruler.prototype, "pointerX", {
        get: function () {
            return this._pointerX;
        },
        set: function (value) {
            this._pointerX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ruler.prototype, "pointerY", {
        get: function () {
            return this._pointerY;
        },
        set: function (value) {
            this._pointerY = value;
        },
        enumerable: true,
        configurable: true
    });
    Ruler.prototype.setPointer = function (x, y) {
        this._pointerX = x;
        this._pointerY = y;
        this.requestRedraw();
        return this;
    };
    Ruler.prototype.setOrigin = function (x, y) {
        this._originX = x;
        this._originY = y;
        this.requestRedraw();
        return this;
    };
    Ruler.prototype.drawBackground = function (ctx, style) {
        ctx.lineWidth = 1;
        ctx.font = style.font;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.strokeStyle = style.lineColor;
        ctx.fillStyle = style.textColor;
        ctx.beginPath();
        this.drawColorBackground(ctx, style);
        return this;
    };
    Ruler.SIZE = 10;
    return Ruler;
}(widget_1.Widget));
exports.Ruler = Ruler;
;
var VRuler = (function (_super) {
    __extends(VRuler, _super);
    function VRuler() {
        _super.call(this, VRuler.TYPE);
    }
    VRuler.prototype.drawColorBackground = function (ctx, style) {
        var h = this.w;
        var w = this.h;
        var ox = this.originX;
        var oy = this.originY;
        var i = 0;
        var x = 0;
        var y = 0;
        var fh = h;
        var th = h / 3;
        var hh = h / 2;
        var scale = this.scale;
        var rs = Ruler.SIZE;
        var pixels = Math.floor(10 / scale);
        var scaledPixels = pixels * scale;
        ctx.translate(0, oy);
        ctx.rotate(Math.PI * 0.5);
        ctx.translate(0, -h);
        function getH(i) {
            if (i % 10 === 0) {
                return fh;
            }
            else if (i % 5 === 0) {
                return hh;
            }
            else {
                return th;
            }
        }
        ox = oy;
        /////////////////////////////////	
        ctx.beginPath();
        var n = Math.floor((w - ox) / scaledPixels);
        for (i = 0; i < n; i++) {
            h = getH(i);
            x = i * scaledPixels;
            if ((x + ox) < 0)
                continue;
            ctx.moveTo(x + 0.5, 0);
            ctx.lineTo(x + 0.5, h);
        }
        ctx.stroke();
        for (i = 0; i < n; i++) {
            x = i * scaledPixels;
            if ((x + ox) < 0)
                continue;
            if (i % 10 === 0) {
                var str = i * pixels;
                x = x;
                y = fh;
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(Math.PI);
                ctx.fillText(str, 5, th);
                ctx.restore();
            }
        }
        /////////////////////////////////	
        ctx.beginPath();
        var n = Math.floor((ox - rs) / scaledPixels);
        for (i = 1; i < n; i++) {
            h = getH(i);
            x = -i * scaledPixels;
            ctx.moveTo(x + 0.5, 0);
            ctx.lineTo(x + 0.5, h);
        }
        ctx.stroke();
        for (i = 1; i < n; i++) {
            x = -i * scaledPixels;
            if (i % 10 === 0) {
                var str = -i * pixels;
                x = x;
                y = fh;
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(Math.PI);
                ctx.fillText(str, 5, th);
                ctx.restore();
            }
        }
        /////////////////////////////////	
        h = fh;
        x = this.pointerY - oy;
        ctx.fillStyle = style.foreGroundColor;
        ctx.beginPath();
        ctx.moveTo(x - th, hh);
        ctx.lineTo(x + th, hh);
        ctx.lineTo(x, 0);
        ctx.lineTo(x - th, hh);
        ctx.fill();
        return this;
    };
    VRuler.prototype.relayout = function () {
        this.moveTo(0, 0, 0);
        this.resizeTo(this.w, this.parent.h, 0);
    };
    VRuler.create = function (options) {
        return VRuler.recycleBin.create().reset(VRuler.TYPE, options);
    };
    VRuler.TYPE = "vruler";
    VRuler.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new VRuler(); });
    return VRuler;
}(Ruler));
exports.VRuler = VRuler;
;
widget_factory_1.WidgetFactory.register(VRuler.TYPE, VRuler.create);
var HRuler = (function (_super) {
    __extends(HRuler, _super);
    function HRuler() {
        _super.call(this, HRuler.TYPE);
    }
    HRuler.prototype.drawColorBackground = function (ctx, style) {
        var w = this.w;
        var h = this.h;
        var ox = this.originX;
        var oy = this.originY;
        var i = 0;
        var x = 0;
        var fh = h;
        var th = h / 3;
        var hh = h / 2;
        var scale = this.scale;
        var rs = Ruler.SIZE;
        var pixels = Math.floor(10 / scale);
        var scaledPixels = pixels * scale;
        ctx.translate(ox, h);
        function getH(i) {
            if (i % 10 === 0) {
                return fh;
            }
            else if (i % 5 === 0) {
                return hh;
            }
            else {
                return th;
            }
        }
        /////////////////////////////////	
        ctx.beginPath();
        var n = Math.floor((w - ox) / scaledPixels);
        for (i = 0; i < n; i++) {
            h = getH(i);
            x = i * scaledPixels;
            if ((x + ox) < 0)
                continue;
            ctx.moveTo(x + 0.5, 0);
            ctx.lineTo(x + 0.5, -h);
        }
        ctx.stroke();
        for (i = 0; i < n; i++) {
            x = i * scaledPixels;
            if ((x + ox) < 0)
                continue;
            if (i % 10 === 0) {
                var str = i * pixels;
                ctx.fillText(str, x + 5, -hh);
            }
        }
        /////////////////////////////////	
        ctx.beginPath();
        var n = Math.floor((ox - rs) / scaledPixels);
        for (i = 1; i < n; i++) {
            h = getH(i);
            x = -i * scaledPixels;
            ctx.moveTo(x + 0.5, 0);
            ctx.lineTo(x + 0.5, -h);
        }
        ctx.stroke();
        for (i = 1; i < n; i++) {
            x = -i * scaledPixels;
            if (i % 10 === 0) {
                var str = -i * pixels;
                ctx.fillText(str, x + 5, -hh);
            }
        }
        /////////////////////////////////	
        h = fh;
        x = this.pointerX - ox;
        ctx.fillStyle = style.foreGroundColor;
        ctx.beginPath();
        ctx.moveTo(x - th, -hh);
        ctx.lineTo(x + th, -hh);
        ctx.lineTo(x, 0);
        ctx.lineTo(x - th, -hh);
        ctx.fill();
        return this;
    };
    HRuler.prototype.relayout = function () {
        this.moveTo(0, 0, 0);
        this.resizeTo(this.parent.w, this.h, 0);
    };
    HRuler.create = function (options) {
        return HRuler.recycleBin.create().reset(HRuler.TYPE, options);
    };
    HRuler.TYPE = "hruler";
    HRuler.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new HRuler(); });
    return HRuler;
}(Ruler));
exports.HRuler = HRuler;
;
widget_factory_1.WidgetFactory.register(HRuler.TYPE, HRuler.create);
