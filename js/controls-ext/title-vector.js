"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var vector_edit_1 = require("./vector-edit");
var title_value_1 = require("./title-value");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var TitleVector = (function (_super) {
    __extends(TitleVector, _super);
    function TitleVector(type) {
        _super.call(this, type || TitleVector.TYPE);
    }
    Object.defineProperty(TitleVector.prototype, "d", {
        /**
         * dimension
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
        var widget = TitleVector.recycleBin.create();
        widget.d = options ? (options.d || 2) : 2;
        widget.reset(TitleVector.TYPE, options);
        return widget;
    };
    TitleVector.TYPE = "title-vector";
    TitleVector.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleVector(); });
    return TitleVector;
}(title_value_1.TitleValue));
exports.TitleVector = TitleVector;
;
widget_factory_1.WidgetFactory.register(TitleVector.TYPE, TitleVector.create);
