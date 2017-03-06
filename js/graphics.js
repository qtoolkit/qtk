"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("./style");
var carota = require('carota');
var ut = require('unicode-tokenizer');
var tokenizer = ut.createTokenizerStream();
var Token = ut.Token;
var Break = ut.Break;
var RoundType;
(function (RoundType) {
    RoundType[RoundType["TL"] = 1] = "TL";
    RoundType[RoundType["TR"] = 2] = "TR";
    RoundType[RoundType["BL"] = 4] = "BL";
    RoundType[RoundType["BR"] = 8] = "BR";
})(RoundType = exports.RoundType || (exports.RoundType = {}));
;
var TextLine = (function () {
    function TextLine() {
        this.text = "";
        this.width = 0;
    }
    return TextLine;
}());
exports.TextLine = TextLine;
;
var Graphics = (function () {
    function Graphics() {
    }
    Graphics.measureText = function (text, font) {
        var ctx = Graphics.canvas.getContext("2d");
        ctx.font = font;
        var width = ctx.measureText(text).width;
        return width;
    };
    Graphics.layoutText = function (text, maxWidth, font, _ctx) {
        var ret = [];
        if (!text || maxWidth < 5) {
            return ret;
        }
        var line = new TextLine();
        var tokenizer = ut.createTokenizerStream();
        var ctx = _ctx ? _ctx : Graphics.canvas.getContext("2d");
        ctx.font = font;
        tokenizer.on('token', function (token, type, action) {
            var width = ctx.measureText(token).width;
            switch (type) {
                case Token.LF:
                case Token.CR: {
                    ret.push(line);
                    line = new TextLine();
                    line.text = "\n";
                    ret.push(line);
                    line = new TextLine();
                    return;
                }
                case Token.CL:
                case Token.EX: {
                    line.text += token;
                    line.width += width;
                    return;
                }
                default: break;
            }
            if (line.width >= maxWidth) {
                ret.push(line);
                line = new TextLine();
            }
            var n = token.length;
            if ((line.width + width) <= maxWidth || n < 2) {
                line.text += token;
                line.width += width;
            }
            else if (type === Token.AL && action === Break.PROHIBITED && width < maxWidth) {
                ret.push(line);
                line = new TextLine();
                line.text = token;
                line.width = width;
            }
            else {
                for (var i = 0; i < n; i++) {
                    var c = token[i];
                    width = ctx.measureText(c).width;
                    if (line.width >= maxWidth) {
                        ret.push(line);
                        line = new TextLine();
                    }
                    line.text += c;
                    line.width += width;
                }
            }
        });
        tokenizer.write(text);
        tokenizer.end();
        ret.push(line);
        return ret;
    };
    Graphics.drawTextML = function (ctx, lines, style, r) {
        var x = 0;
        var y = 0;
        var n = lines.length;
        var lineHeight = style.textLineHeight;
        var height = n * lineHeight;
        switch (style.textAlign) {
            case "right": {
                x = r.x + r.w;
                break;
            }
            case "center": {
                x = r.x + (r.w >> 1);
                break;
            }
            default: {
                x = r.x;
                break;
            }
        }
        switch (style.textBaseline) {
            case "top": {
                y = r.y;
                break;
            }
            case "bottom": {
                y = r.y + r.h - height;
                break;
            }
            default: {
                y = r.y + ((r.h - height) >> 1);
                break;
            }
        }
        y = Math.max(y, 0);
        x = Math.max(x, 0);
        var maxY = r.y + r.h;
        ctx.font = style.font;
        ctx.fillStyle = style.textColor;
        ctx.textAlign = style.textAlign;
        ctx.textBaseline = "top";
        for (var i = 0; i < n; i++) {
            var text = lines[i].text;
            ctx.fillText(text, x, y, r.w);
            y += lineHeight;
            if ((y + lineHeight) > maxY) {
                break;
            }
        }
        return;
    };
    Graphics.drawTextSL = function (ctx, text, style, r) {
        var x = 0;
        var y = 0;
        switch (style.textAlign) {
            case "right": {
                x = r.x + r.w;
                break;
            }
            case "center": {
                x = r.x + (r.w >> 1);
                break;
            }
            default: {
                x = r.x;
                break;
            }
        }
        switch (style.textBaseline) {
            case "top": {
                y = r.y;
                break;
            }
            case "bottom": {
                y = r.y + r.h;
                break;
            }
            default: {
                y = r.y + (r.h >> 1);
                break;
            }
        }
        if (text && style.textColor) {
            ctx.font = style.font;
            ctx.fillStyle = style.textColor;
            ctx.textAlign = style.textAlign;
            ctx.textBaseline = style.textBaseline;
            ctx.fillText(text, x, y);
        }
    };
    Graphics.drawLine = function (ctx, strokeStyle, lineWidth, x1, y1, x2, y2) {
        if (strokeStyle && lineWidth > 0) {
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = strokeStyle;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    };
    Graphics.drawCircle = function (ctx, fillStyle, strokeStyle, lineWidth, x, y, r) {
        if (fillStyle || (strokeStyle && lineWidth > 0)) {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                ctx.fill();
            }
            if (strokeStyle && lineWidth > 0) {
                ctx.strokeStyle = strokeStyle;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    };
    Graphics.drawRect = function (ctx, fillStyle, strokeStyle, lineWidth, x, y, w, h) {
        if (fillStyle || (strokeStyle && lineWidth > 0)) {
            ctx.beginPath();
            ctx.rect(x, y, w, h);
            if (fillStyle) {
                style_1.Style.fill(ctx, fillStyle, h);
            }
            if (strokeStyle && lineWidth > 0) {
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = strokeStyle;
                ctx.stroke();
            }
        }
    };
    Graphics.drawRoundRect = function (ctx, fillStyle, strokeStyle, lineWidth, x, y, w, h, r, type) {
        if (fillStyle || (strokeStyle && lineWidth > 0)) {
            Graphics.roundRect(ctx, x, y, w, h, r, type);
            if (fillStyle) {
                style_1.Style.fill(ctx, fillStyle, h);
            }
            if (strokeStyle && lineWidth > 0) {
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = strokeStyle;
                ctx.stroke();
            }
        }
    };
    Graphics.roundRect = function (ctx, x, y, w, h, r, type) {
        if (!type) {
            type = RoundType.TL | RoundType.TR | RoundType.BL | RoundType.BR;
        }
        var d = r << 1;
        ctx.beginPath();
        if (d > w || d > h) {
            var cx = x + (w >> 1);
            var cy = y + (h >> 1);
            r = Math.min(w >> 1, h >> 1);
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            return;
        }
        if (!r) {
            ctx.rect(x, y, w, h);
            return;
        }
        ctx.translate(x, y);
        if (type & RoundType.TL) {
            ctx.moveTo(0, r);
            ctx.quadraticCurveTo(0, 0, r, 0);
        }
        else {
            ctx.moveTo(0, 0);
        }
        if (type & RoundType.TR) {
            ctx.lineTo(w - r, 0);
            ctx.quadraticCurveTo(w, 0, w, r);
        }
        else {
            ctx.lineTo(w, 0);
        }
        if (type & RoundType.BR) {
            ctx.lineTo(w, h - r);
            ctx.quadraticCurveTo(w, h, w - r, h);
        }
        else {
            ctx.lineTo(w, h);
        }
        if (type & RoundType.BL) {
            ctx.lineTo(r, h);
            ctx.quadraticCurveTo(0, h, 0, h - r);
        }
        else {
            ctx.lineTo(0, h);
        }
        ctx.closePath();
        ctx.translate(-x, -y);
    };
    return Graphics;
}());
Graphics.canvas = document.createElement("canvas");
exports.Graphics = Graphics;
;
