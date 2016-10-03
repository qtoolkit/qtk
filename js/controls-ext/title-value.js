"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var label_1 = require("../controls/label");
var widget_1 = require("../controls/widget");
var linear_layouter_1 = require("../layouters/linear-layouter");
var TitleValue = (function (_super) {
    __extends(TitleValue, _super);
    function TitleValue(type) {
        _super.call(this, type);
    }
    Object.defineProperty(TitleValue.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleValue.prototype, "titleW", {
        get: function () {
            return this._titleW;
        },
        set: function (value) {
            this._titleW = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleValue.prototype, "valueW", {
        get: function () {
            return this._valueW;
        },
        set: function (value) {
            this._valueW = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleValue.prototype, "titleWidget", {
        get: function () {
            return this._titleWidget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleValue.prototype, "valueWidget", {
        get: function () {
            return this._valueWidget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleValue.prototype, "value", {
        get: function () {
            return this._valueWidget ? this.valueWidget.value : this._value;
        },
        set: function (value) {
            this._value = value;
            if (this._valueWidget) {
                this._valueWidget.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Child must override
     */
    TitleValue.prototype.createValueWidget = function (options) {
        return null;
    };
    TitleValue.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this.titleWidget.text = this._title;
        this.titleWidget.layoutParam = linear_layouter_1.LinearLayouterParam.create({ w: this._titleW, h: "100%" });
        this.valueWidget.layoutParam = linear_layouter_1.LinearLayouterParam.create({ w: this._valueW, h: "100%" });
    };
    TitleValue.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.childrenLayouter = linear_layouter_1.LinearLayouter.createH({ spacing: 5 });
        var titleWidget = label_1.Label.create();
        this.addChild(titleWidget);
        this._titleWidget = titleWidget;
        var valueWidget = this.createValueWidget();
        this.addChild(valueWidget);
        this._valueWidget = valueWidget;
    };
    TitleValue.prototype.getDefProps = function () {
        return TitleValue.defProps;
    };
    TitleValue.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._titleWidget = null;
        this._valueWidget = null;
    };
    TitleValue.defProps = Object.assign({}, widget_1.Widget.defProps, { _lp: 2, _tp: 2, _rp: 2, _bp: 2,
        _title: null, _titleW: 60, _valueW: 60 });
    return TitleValue;
}(widget_1.Widget));
exports.TitleValue = TitleValue;
;
