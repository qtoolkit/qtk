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
var rect_1 = require("../rect");
var point_1 = require("../point");
var label_1 = require("./label");
var Events = require("../events");
var key_event_1 = require("../key-event");
var html_edit_1 = require("../html/html-edit");
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var graphics_1 = require("../graphics");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * 编辑器。multiLineMode决定是多行编辑器还是单行编辑器。
 */
var Edit = (function (_super) {
    __extends(Edit, _super);
    function Edit() {
        var _this = _super.call(this, Edit.TYPE) || this;
        _this.onWheel = function () {
            var input = this._input;
            if (input) {
                input.hide();
                this.hideEditor();
            }
        }.bind(_this);
        _this.drawInvalidInputTips = function (evt) {
            var win = this.win;
            var tm = this._themeManager;
            var text = this._validationTips;
            var style = tm.get("edit.invalid.tips", this.stateToString(widget_1.WidgetState.NORMAL));
            if (!this._isEditing || !text || !style) {
                return;
            }
            var maxH = win.h;
            var maxW = win.w;
            var ctx = evt.ctx;
            var p = this.toGlobalPoint(point_1.Point.point.init(0, 0));
            var width = graphics_1.Graphics.measureText(text, style.font) + 20;
            var x = p.x - win.x;
            var y = p.y - win.y + 5;
            if ((x + width) >= maxW) {
                x = maxW - width;
            }
            var r = null;
            if ((y + this.h) < maxH) {
                r = rect_1.Rect.rect.init(x, y + this.h, width, 30);
            }
            else {
                r = rect_1.Rect.rect.init(x, y, width, 30);
            }
            graphics_1.Graphics.drawRoundRect(ctx, style.backGroundColor, style.lineColor, style.lineWidth, r.x, r.y, r.w, r.h, style.roundRadius);
            graphics_1.Graphics.drawTextSL(ctx, text, style, r);
        }.bind(_this);
        return _this;
    }
    Object.defineProperty(Edit.prototype, "inputable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edit.prototype, "inputFilter", {
        /**
         * 输入过滤器，对输入的文本进行转换。
         */
        set: function (value) {
            this._inputFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edit.prototype, "inputTips", {
        get: function () {
            return this._it;
        },
        /**
         * 输入提示。
         */
        set: function (value) {
            this._it = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edit.prototype, "inputType", {
        get: function () {
            return this._itp;
        },
        /**
         * 输入类型。
         */
        set: function (value) {
            this._itp = value;
        },
        enumerable: true,
        configurable: true
    });
    Edit.prototype.draw = function (ctx) {
        if (!this._isEditing) {
            _super.prototype.draw.call(this, ctx);
        }
        else {
        }
    };
    Edit.prototype.relayoutText = function () {
        if (!this._isEditing) {
            _super.prototype.relayoutText.call(this);
        }
        return this;
    };
    Edit.prototype.drawText = function (ctx, style) {
        if (this._textLines && this._textLines.length) {
            _super.prototype.drawText.call(this, ctx, style);
        }
        else if (this._it) {
            this.drawTextSL(ctx, this._it, style);
        }
        return this;
    };
    Edit.prototype.getStyleType = function () {
        if (this._styleType) {
            return this._styleType;
        }
        else {
            if (this._text || this._isEditing) {
                return this.multiLineMode ? "edit.ml" : "edit.sl";
            }
            else {
                return this.multiLineMode ? "edit.ml.tips" : "edit.sl.tips";
            }
        }
    };
    Edit.prototype.filterText = function (value) {
        return this._inputFilter ? this._inputFilter(value) : value;
    };
    Edit.prototype.hideEditor = function () {
        if (this._isEditing) {
            this._isEditing = false;
            this.relayoutText();
            this._input = null;
            this.dispatchEvent({ type: Events.BLUR });
            this.win.off(Events.WHEEL, this.onWheel);
        }
        this.requestRedraw();
    };
    Edit.prototype.notifyChangeEx = function (type, value, oldValue) {
        var e = this.eChangeEvent;
        e.init(type, { value: value, oldValue: oldValue });
        ;
        this.dispatchEvent(e);
    };
    Edit.prototype.showEditor = function () {
        var _this = this;
        var style = this.getStyle();
        this._input = this.multiLineMode ? html_edit_1.HtmlEdit.textArea : html_edit_1.HtmlEdit.input;
        var input = this._input;
        var vp = this.app.getViewPort();
        var p = this.toViewPoint(point_1.Point.point.init(0, 0));
        var borderWidth = input.borderWidth * 2;
        var x = Math.max(0, p.x);
        var y = Math.max(0, p.y);
        var w = Math.min(this.w, vp.w - x - borderWidth);
        var h = Math.min(this.h, vp.h - y - borderWidth);
        input.move(x, y);
        input.resize(w, h);
        input.fontSize = style.fontSize;
        input.inputType = this.inputType;
        input.textColor = style.textColor;
        input.fontFamily = style.fontFamily;
        input.text = this.text || "";
        input.show();
        input.z = this.win.z + 1;
        var oldValue = this.value;
        this.dispatchEvent({ type: Events.FOCUS });
        this.win.on(Events.WHEEL, this.onWheel);
        input.on(Events.HIDE, function (evt) {
            _this.hideEditor();
        });
        input.on(Events.CHANGING, function (evt) {
            _this.text = _this.filterText(evt.value);
            var value = _this.inputType === "number" ? +_this.text : _this.text;
            _this.notifyChangeEx(Events.CHANGING, value, null);
        });
        input.on(Events.CHANGE, function (evt) {
            _this.text = _this.filterText(evt.value);
            var value = _this.inputType === "number" ? +_this.text : _this.text;
            _this.notifyChangeEx(Events.CHANGE, value, oldValue);
        });
        input.on(Events.KEYDOWN, function (evt) {
            _this.dispatchEvent(evt);
        });
        input.on(Events.KEYUP, function (evt) {
            if (!_this.multiLineMode && evt.keyCode === key_event_1.KeyEvent.VK_RETURN) {
                _this.dispatchEvent({ type: Events.CONFIRM });
            }
            _this.dispatchEvent(evt);
        });
    };
    Object.defineProperty(Edit.prototype, "validationTips", {
        set: function (value) {
            this._validationTips = value;
        },
        enumerable: true,
        configurable: true
    });
    Edit.prototype.onInvalidInput = function (message) {
        var win = this.win;
        if (this._validationTips === message) {
            return;
        }
        this._validationTips = message;
        win.off(Events.AFTER_DRAW, this.drawInvalidInputTips);
        if (message) {
            win.on(Events.AFTER_DRAW, this.drawInvalidInputTips);
        }
        win.requestRedraw();
    };
    Edit.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._input = null;
        this._inputFilter = null;
    };
    Edit.prototype.dispatchClick = function (evt) {
        _super.prototype.dispatchClick.call(this, evt);
        if (!this._isEditing) {
            this._isEditing = true;
            this.showEditor();
        }
    };
    Edit.prototype.getDefProps = function () {
        return Edit.defProps;
    };
    Edit.create = function (options) {
        return Edit.r.create(options);
    };
    return Edit;
}(label_1.Label));
Edit.defProps = Object.assign({}, label_1.Label.defProps, { _mlm: false, _it: null, _itp: null });
Edit.TYPE = "edit";
Edit.r = widget_recyclable_creator_1.WidgetRecyclableCreator.create(Edit);
exports.Edit = Edit;
;
widget_factory_1.WidgetFactory.register(Edit.TYPE, Edit.create);
