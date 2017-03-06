"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = require("./rect");
var point_1 = require("./point");
var matrix_stack_1 = require("./matrix-stack");
var DirtyRectContext = (function (_super) {
    __extends(DirtyRectContext, _super);
    function DirtyRectContext() {
        var _this = _super.call(this) || this;
        _this._rect = rect_1.Rect.create(0, 0, 0, 0);
        _this.reset();
        return _this;
    }
    DirtyRectContext.prototype.addRect = function (x, y, w, h) {
        var p = point_1.Point.point;
        this.addPoint(this.transformPoint(x, y, p));
        this.addPoint(this.transformPoint(x + w, y, p));
        this.addPoint(this.transformPoint(x + w, y + h, p));
        this.addPoint(this.transformPoint(x, y + h, p));
    };
    DirtyRectContext.prototype.addPoint = function (p) {
        var x = p.x;
        var y = p.y;
        if (!this._pointsNr) {
            this._minX = this._maxX = x;
            this._minY = this._maxY = y;
        }
        else {
            if (this._minX > x) {
                this._minX = x;
            }
            if (this._maxX < x) {
                this._maxX = x;
            }
            if (this._minY > y) {
                this._minY = y;
            }
            if (this._maxY < y) {
                this._maxY = y;
            }
        }
        this._pointsNr++;
    };
    DirtyRectContext.prototype.getRect = function () {
        var r = this._rect;
        r.x = this._minX;
        r.y = this._minY;
        r.w = this._maxX - this._minX;
        r.h = this._maxY - this._minY;
        return r;
    };
    DirtyRectContext.prototype.reset = function () {
        this._pointsNr = 0;
        this.identity();
        this._minX = -1;
        this._minY = -1;
        this._maxX = -1;
        this._maxY = -1;
    };
    DirtyRectContext.create = function () {
        return new DirtyRectContext();
    };
    return DirtyRectContext;
}(matrix_stack_1.MatrixStack));
exports.DirtyRectContext = DirtyRectContext;
;
