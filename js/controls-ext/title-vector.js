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
var vector_edit_1 = require("./vector-edit");
var title_value_1 = require("./title-value");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * @class TitleVector
 * @extends Widget
 * 带标题的向量编辑器。
 */
var TitleVector = (function (_super) {
    __extends(TitleVector, _super);
    function TitleVector(type) {
        return _super.call(this, type || TitleVector.TYPE) || this;
    }
    Object.defineProperty(TitleVector.prototype, "d", {
        /**
         * 向量的维度。
         */
        get: function () {
            return this._d;
        },
        set: function (value) {
            this._d = value;
            ;
        },
        enumerable: true,
        configurable: true
    });
    TitleVector.prototype.createValueWidget = function (options) {
        return vector_edit_1.VectorEdit.create({ d: this.d || 2 });
    };
    TitleVector.create = function (options) {
        var widget = TitleVector.recycleBin.create(null);
        widget.d = options ? (options.d || 2) : 2;
        widget.reset(TitleVector.TYPE, options);
        return widget;
    };
    return TitleVector;
}(title_value_1.TitleValue));
TitleVector.TYPE = "title-vector";
TitleVector.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleVector);
exports.TitleVector = TitleVector;
;
widget_factory_1.WidgetFactory.register(TitleVector.TYPE, TitleVector.create);
