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
    Object.defineProperty(VectorEdit.prototype, "xTitle", {
        get: function () {
            return this._xTitle;
        },
        set: function (value) {
            if (value || value === "") {
                this._xTitle;
                this._xLabel.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorEdit.prototype, "yTitle", {
        get: function () {
            return this._yTitle;
        },
        set: function (value) {
            if (value || value === "") {
                this._yTitle;
                this._yLabel.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorEdit.prototype, "zTitle", {
        get: function () {
            return this._zTitle;
        },
        set: function (value) {
            if (value || value === "") {
                this._zTitle;
                this._zLabel.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorEdit.prototype, "wTitle", {
        get: function () {
            return this._wTitle;
        },
        set: function (value) {
            if (value || value === "") {
                this._wTitle;
                this._wLabel.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(VectorEdit.prototype, "wEditor", {
        get: function () {
            return this._wEditor;
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
                this._value.x = +(this._xEditor.value);
            }
            if (this._yEditor) {
                this._value.y = +(this._yEditor.value);
            }
            if (this._zEditor) {
                this._value.z = +(this._zEditor.value);
            }
            if (this._wEditor) {
                this._value.w = +(this._wEditor.value);
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
            if (this._wEditor) {
                this._wEditor.value = +value.w;
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
        this._wEditor = null;
        this._xLabel = null;
        this._yLabel = null;
        this._zLabel = null;
        this._wLabel = null;
        _super.prototype.dispose.call(this);
    };
    VectorEdit.prototype.forwardChangeEvent = function (evt) {
        var e = this.eChangeEvent;
        e.init(evt.type, { value: this.value });
        this.dispatchEvent(e);
    };
    VectorEdit.prototype.createEdit = function (value) {
        var _this = this;
        var edit = edit_1.Edit.create({ multiLineMode: false, value: value, inputType: "number" });
        this.addChild(edit, false);
        edit.on(Events.CHANGE, function (evt) {
            _this.forwardChangeEvent(evt);
        });
        edit.on(Events.CHANGING, function (evt) {
            _this.forwardChangeEvent(evt);
        });
        return edit;
    };
    VectorEdit.prototype.createLabel = function (text) {
        var label = label_1.Label.create({ text: text });
        label.set({ multiLineMode: false, topPadding: 10, bottomPadding: 0, styleType: "label.small" });
        this.addChild(label, false);
        return label;
    };
    VectorEdit.prototype.onCreated = function () {
        _super.prototype.onCreated.call(this);
        this.padding = 0;
        var value = this._value || { x: 0, y: 0, z: 0, w: 0 };
        this.d = Math.max(2, Math.min(4, this.d || 2));
        var cols = this.d;
        var rows = 2;
        this.childrenLayouter = grid_layouter_1.GridLayouter.createWithOptions({ rows: rows, cols: cols, rightMargin: 10 });
        this._xLabel = this.createLabel(this._xTitle);
        this._yLabel = this.createLabel(this._yTitle);
        if (this.d > 2) {
            this._zLabel = this.createLabel(this._zTitle);
        }
        if (this.d > 3) {
            this._wLabel = this.createLabel(this._wTitle);
        }
        this._xEditor = this.createEdit(value.x);
        this._yEditor = this.createEdit(value.y);
        if (this.d > 2) {
            this._zEditor = this.createEdit(value.z);
        }
        if (this.d > 3) {
            this._wEditor = this.createEdit(value.w);
        }
        this.relayoutChildren();
    };
    VectorEdit.prototype.getDefProps = function () {
        return VectorEdit.defProps;
    };
    VectorEdit.create = function (options) {
        return VectorEdit.rBin.create().reset(VectorEdit.TYPE, options);
    };
    VectorEdit.defProps = Object.assign({}, widget_1.Widget.defProps, { _d: 2, _xTitle: "X", _yTitle: "Y", _zTitle: "Z", _wTitle: "W" });
    VectorEdit.TYPE = "vector.edit";
    VectorEdit.rBin = new recyclable_creator_1.RecyclableCreator(function () {
        return new VectorEdit();
    });
    return VectorEdit;
}(widget_1.Widget));
exports.VectorEdit = VectorEdit;
;
widget_factory_1.WidgetFactory.register(VectorEdit.TYPE, VectorEdit.create);
