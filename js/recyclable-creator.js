"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 可循环的创建器。
 */
var RecyclableCreator = (function () {
    function RecyclableCreator(ctor) {
        this.cache = [];
        this.ctor = ctor;
    }
    /**
     * 回收对象。
     */
    RecyclableCreator.prototype.recycle = function (obj) {
        if (obj) {
            this.cache.push(obj);
        }
    };
    /**
     * 创建对象。优先从缓存中取对象，如果缓存中没有对象，则创建新对象。
     */
    RecyclableCreator.prototype.create = function (options) {
        var me = this;
        if (this.cache.length) {
            return this.cache.pop();
        }
        else {
            var obj = (this.ctor());
            obj.recycle = function () {
                me.recycle(this);
            };
            return obj;
        }
    };
    return RecyclableCreator;
}());
exports.RecyclableCreator = RecyclableCreator;
;
