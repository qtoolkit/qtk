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
var grid_layouter_1 = require("../layouters/grid-layouter");
/**
 * 范围编辑器。
 */
var VectorEdit = (function (_super) {
    __extends(VectorEdit, _super);
    function VectorEdit() {
        _super.call(this, VectorEdit.TYPE);
    }
    Object.defineProperty(VectorEdit.prototype, "inputable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorEdit.prototype, "d", {
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
    Object.defineProperty(VectorEdit.prototype, "xEditor", {
        get: function () {
            return this._xEditor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorEdit.prototype, "yEditor", {
        get: function () {
            return this._yEditor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorEdit.prototype, "zEditor", {
        get: function () {
            return this._zEditor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorEdit.prototype, "value", {
        get: function () {
            if (!this._value) {
                this._value = {};
            }
            if (this._xEditor) {
                this._value.x = this._xEditor.value;
            }
            if (this._yEditor) {
                this._value.y = this._yEditor.value;
            }
            if (this._zEditor) {
                this._value.z = this._zEditor.value;
            }
            return this._value;
        },
        set: function (value) {
            this._value = value;
            if (this._xEditor) {
                this._xEditor.value = +value.x;
            }
            if (this._yEditor) {
                this._yEditor.value = +value.y;
            }
            if (this._zEditor) {
                this._zEditor.value = +value.z;
            }
        },
        enumerable: true,
        configurable: true
    });
    VectorEdit.prototype.onToJson = function (json) {
        delete json._value;
    };
    VectorEdit.prototype.dispose = function () {
        this._xEditor = null;
        this._yEditor = null;
        this._zEditor = null;
        this._xLabel = null;
        this._yLabel = null;
        this._zLabel = null;
        _super.prototype.dispose.call(this);
    };
    VectorEdit.prototype.forwardChangeEvent = function (evt) {
        var e = this.eChangeEvent;
        e.init(evt.type, { value: this.value });
        this.dispatchEvent(e);
    };
    VectorEdit.prototype.onCreated = function () {
        var _this = this;
        _super.prototype.onCreated.call(this);
        this.padding = 0;
        var value = this._value || { x: 0, y: 0, z: 0 };
        this.d = Math.max(2, Math.min(3, this.d || 2));
        var cols = this.d;
        var rows = 2;
        this.childrenLayouter = grid_layouter_1.GridLayouter.create({ rows: rows, cols: cols, rightMargin: 10 });
        var labelOptions = { multiLineMode: false, topPadding: 10, bottomPadding: 0 };
        this._xLabel = label_1.Label.create({ text: "X" });
        this._xLabel.set(labelOptions);
        this.addChild(this._xLabel, false);
        this._yLabel = label_1.Label.create({ text: "Y" });
        this._yLabel.set(labelOptions);
        this.addChild(this._yLabel, false);
        if (this.d > 2) {
            this._zLabel = label_1.Label.create({ text: "Z" });
            this._zLabel.set(labelOptions);
            this.addChild(this._zLabel, false);
        }
        this._xEditor = edit_1.Edit.create({ multiLineMode: false, value: value.x, inputType: "number" });
        this.addChild(this._xEditor, false);
        this._xEditor.on(Events.CHANGE, function (evt) {
            _this.forwardChangeEvent(evt);
        });
        this._xEditor.on(Events.CHANGING, function (evt) {
            _this.forwardChangeEvent(evt);
        });
        this._yEditor = edit_1.Edit.create({ multiLineMode: false, value: value.y, inputType: "number" });
        this.addChild(this._yEditor, false);
        this._yEditor.on(Events.CHANGE, function (evt) {
            _this.forwardChangeEvent(evt);
        });
        this._yEditor.on(Events.CHANGING, function (evt) {
            _this.forwardChangeEvent(evt);
        });
        if (this.d > 2) {
            this._zEditor = edit_1.Edit.create({ inputType: "number" });
            this.addChild(this._zEditor, false);
            this._zEditor.on(Events.CHANGE, function (evt) {
                _this.forwardChangeEvent(evt);
            });
            this._zEditor.on(Events.CHANGING, function (evt) {
                _this.forwardChangeEvent(evt);
            });
        }
        this.relayoutChildren();
    };
    VectorEdit.prototype.getDefProps = function () {
        return VectorEdit.defProps;
    };
    VectorEdit.create = function (options) {
        return VectorEdit.rBin.create().reset(VectorEdit.TYPE, options);
    };
    VectorEdit.defProps = Object.assign({}, widget_1.Widget.defProps, { _d: 2 });
    VectorEdit.TYPE = "vector.edit";
    VectorEdit.rBin = new recyclable_creator_1.RecyclableCreator(function () {
        return new VectorEdit();
    });
    return VectorEdit;
}(widget_1.Widget));
exports.VectorEdit = VectorEdit;
;
widget_factory_1.WidgetFactory.register(VectorEdit.TYPE, VectorEdit.create);
