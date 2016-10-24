"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 可循环的创建器。
 */
var WidgetRecyclableCreator = (function (_super) {
    __extends(WidgetRecyclableCreator, _super);
    function WidgetRecyclableCreator(ctor) {
        _super.call(this, function () {
            return new ctor;
        });
        this._type = ctor.TYPE;
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
