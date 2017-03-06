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
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 可循环的创建器。
 */
var WidgetRecyclableCreator = (function (_super) {
    __extends(WidgetRecyclableCreator, _super);
    function WidgetRecyclableCreator(ctor) {
        var _this = _super.call(this, function () {
            return new ctor;
        }) || this;
        _this._type = ctor.TYPE;
        return _this;
    }
    WidgetRecyclableCreator.prototype.create = function (options) {
        var obj = _super.prototype.create.call(this);
        obj.reset(this._type, options);
        return obj;
    };
    WidgetRecyclableCreator.create = function (ctor) {
        return new WidgetRecyclableCreator(ctor);
    };
    return WidgetRecyclableCreator;
}(recyclable_creator_1.RecyclableCreator));
exports.WidgetRecyclableCreator = WidgetRecyclableCreator;
;
