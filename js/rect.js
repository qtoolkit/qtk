"use strict";
/**
 * @class Rect
 * 用左上角坐标、宽度和高度来描述一个矩形区域。
 */
var Rect = (function () {
    function Rect(x, y, w, h) {
        this.init(x, y, w, h);
    }
    /**
     * @method init
     * 初始化Rect。
     * @param {number} x 左上角X坐标。
     * @param {number} y 左上角Y坐标。
     * @param {number} w 宽度。
     * @param {number} h 高度。
     *
     * return {Rect} Rect自己。
     */
    Rect.prototype.init = function (x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        return this;
    };
    Rect.prototype.dispose = function () {
    };
    /**
     * @method clone
     * 克隆。
     */
    Rect.prototype.clone = function () {
        return Rect.create(this.x, this.y, this.w, this.h);
    };
    /**
     * @method equal
     * 判断两个Rect的区域是否相同。
     */
    Rect.prototype.equal = function (other) {
        return this.x === other.x && this.y === other.y && this.w === other.w && this.h === other.h;
    };
    /**
     * @method copy
     * 拷贝另外一个Rect的属性到当前的Rect。
     */
    Rect.prototype.copy = function (other) {
        return this.init(other.x, other.y, other.w, other.h);
    };
    /**
     * @method merge
     * 扩展当前的Rect去包含指定的Rect。
     *
     * @return {Rect} Rect本身。
     */
    Rect.prototype.merge = function (other) {
        var x = Math.min(this.x, other.x);
        var y = Math.min(this.y, other.y);
        this.w = Math.max(this.x + this.w, other.x + other.w) - x;
        this.h = Math.max(this.y + this.h, other.y + other.h) - y;
        this.x = x;
        this.y = y;
        return this;
    };
    /**
     * @method containsPoint
     * 判断Rect是否包含指定的点。
     */
    Rect.prototype.containsPoint = function (x, y) {
        return x >= this.x && x < (this.x + this.w) && y >= this.y && y < (this.y + this.h);
    };
    /**
     * @method normalize
     * 规范化Rect，让w/h总是非负的，但表示的区域不变。
     * @param {Rect} out 保存规范化之后的Rect，如果为空，则直接修改Rect本身。
     * @return {Rect} 规范化之后的Rect。
     */
    Rect.prototype.normalize = function (out) {
        var x = this.w > 0 ? this.x : (this.x + this.w);
        var y = this.h > 0 ? this.y : (this.y + this.h);
        var w = Math.abs(this.w);
        var h = Math.abs(this.h);
        if (!out) {
            out = this;
        }
        out.init(x, y, w, h);
        return out;
    };
    Rect.create = function (x, y, w, h) {
        var r = new Rect(x || 0, y || 0, w || 0, h || 0);
        return r;
    };
    Rect.rect = Rect.create(0, 0, 0, 0);
    return Rect;
}());
exports.Rect = Rect;
;
