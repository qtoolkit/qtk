"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var label_1 = require("../controls/label");
var edit_1 = require("../controls/edit");
var widget_1 = require("../controls/widget");
var Events = require("../events");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 范围编辑器。
 */
var RangeEdit = (function (_super) {
    __extends(RangeEdit, _super);
    function RangeEdit() {
        _super.call(this, RangeEdit.TYPE);
    }
    Object.defineProperty(RangeEdit.prototype, "inputable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeEdit.prototype, "firstEditor", {
        get: function () {
            return this._firstEditor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeEdit.prototype, "secondEditor", {
        get: function () {
            return this._secondEditor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeEdit.prototype, "value", {
        get: function () {
            if (!this._value) {
                this._value = {};
            }
            if (this._firstEditor) {
                this._value.first = +this._firstEditor.value;
            }
            if (this._secondEditor) {
                this._value.second = +this._secondEditor.value;
            }
            return this._value;
        },
        set: function (value) {
            this._value = value;
            if (this._firstEditor) {
                this._firstEditor.value = value.first;
            }
            if (this._secondEditor) {
                this._secondEditor.value = value.second;
            }
        },
        enumerable: true,
        configurable: true
    });
    RangeEdit.prototype.onToJson = function (json) {
        delete json._value;
    };
    RangeEdit.prototype.relayoutChildren = function () {
        this.requestRedraw();
        if (this.w && this.h && this._firstEditor && this._label && this._secondEditor) {
            var x = this.leftPadding;
            var y = this.topPadding;
            var h = this.clientH;
            var labelW = 15;
            var w = (this.clientW - labelW) >> 1;
            this._firstEditor.moveResizeTo(x, y, w, h, 0);
            x += w;
            this._label.moveResizeTo(x, y, labelW, h, 0);
            x += labelW;
            this._secondEditor.moveResizeTo(x, y, w, h, 0);
        }
        return this.getLayoutRect();
    };
    RangeEdit.prototype.dispose = function () {
        this._firstEditor = null;
        this._secondEditor = null;
        _super.prototype.dispose.call(this);
    };
    RangeEdit.prototype.forwardChangeEvent = function (evt) {
        var e = this.eChangeEvent;
        e.init(evt.type, { value: this.value });
        this.dispatchEvent(e);
    };
    RangeEdit.prototype.onReset = function () {
        var _this = this;
        _super.prototype.onReset.call(this);
        this.padding = 0;
        var value = this._value || { first: 0, second: 0 };
        this._firstEditor = edit_1.Edit.create({ value: value.first, inputType: "number" });
        this.addChild(this._firstEditor, false);
        this._firstEditor.on(Events.CHANGE, function (evt) {
            _this.forwardChangeEvent(evt);
        });
        this._firstEditor.on(Events.CHANGING, function (evt) {
            _this.forwardChangeEvent(evt);
        });
        this._label = label_1.Label.create({ text: "-", multiLineMode: false });
        this.addChild(this._label, false);
        this._secondEditor = edit_1.Edit.create({ value: value.second, inputType: "number" });
        this.addChild(this._secondEditor, false);
        this._secondEditor.on(Events.CHANGE, function (evt) {
            _this.forwardChangeEvent(evt);
        });
        this._secondEditor.on(Events.CHANGING, function (evt) {
            _this.forwardChangeEvent(evt);
        });
        this.relayoutChildren();
    };
    RangeEdit.create = function (options) {
        return RangeEdit.rBin.create().reset(RangeEdit.TYPE, options);
    };
    RangeEdit.TYPE = "range.edit";
    RangeEdit.rBin = new recyclable_creator_1.RecyclableCreator(function () {
        return new RangeEdit();
    });
    return RangeEdit;
}(widget_1.Widget));
exports.RangeEdit = RangeEdit;
;
widget_factory_1.WidgetFactory.register(RangeEdit.TYPE, RangeEdit.create);
