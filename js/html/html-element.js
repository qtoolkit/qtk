"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var emitter_1 = require("../emitter");
var HtmlElement = (function (_super) {
    __extends(HtmlElement, _super);
    function HtmlElement() {
        _super.call(this);
    }
    Object.defineProperty(HtmlElement.prototype, "x", {
        get: function () {
            return parseInt(this.element.style.left);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlElement.prototype, "y", {
        get: function () {
            return parseInt(this.element.style.top);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlElement.prototype, "z", {
        get: function () {
            return parseInt(this.element.style.zIndex);
        },
        set: function (value) {
            this.element.style.zIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlElement.prototype, "tag", {
        get: function () {
            return this._tag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlElement.prototype, "textColor", {
        set: function (color) {
            this.element.style.color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlElement.prototype, "backgroundColor", {
        set: function (color) {
            this.element.style.background = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlElement.prototype, "fontSize", {
        set: function (fontSize) {
            this.element.style.fontSize = fontSize + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlElement.prototype, "fontFamily", {
        set: function (fontFamily) {
            this.element.style.fontFamily = fontFamily;
        },
        enumerable: true,
        configurable: true
    });
    HtmlElement.prototype.show = function () {
        this.element.style.visibility = 'visible';
        this.element.style.opacity = 1;
        this.element.style.display = 'block';
        return this;
    };
    HtmlElement.prototype.hide = function () {
        this.element.style.opacity = 0;
        this.element.style.zIndex = -1;
        this.element.style.visibility = 'hidden';
        this.element.style.display = 'none';
        return this;
    };
    HtmlElement.prototype.move = function (x, y) {
        this.element.style.position = "absolute";
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
        return this;
    };
    HtmlElement.prototype.resize = function (w, h) {
        this.element.style.width = w + "px";
        this.element.style.height = (h - 4) + "px";
        return this;
    };
    HtmlElement.prototype.destroy = function () {
        if (this.element) {
            document.body.removeChild(this.element);
            this.element = null;
        }
    };
    HtmlElement.prototype.create = function (tag) {
        this.element = document.createElement(tag);
        document.body.appendChild(this.element);
        this._tag = tag;
        return this;
    };
    return HtmlElement;
}(emitter_1.Emitter));
exports.HtmlElement = HtmlElement;
;
