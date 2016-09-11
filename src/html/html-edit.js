"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("../events");
var html_element_1 = require("./html-element");
var HtmlEdit = (function (_super) {
    __extends(HtmlEdit, _super);
    function HtmlEdit() {
        _super.apply(this, arguments);
        this.e = Events.ChangeEvent.create();
    }
    Object.defineProperty(HtmlEdit.prototype, "inputType", {
        set: function (value) {
            if (this.tag === "input") {
                this.element.type = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlEdit.prototype, "text", {
        get: function () {
            return this.element.value;
        },
        set: function (value) {
            this.element.value = value;
        },
        enumerable: true,
        configurable: true
    });
    HtmlEdit.prototype.show = function () {
        _super.prototype.show.call(this);
        this.element.focus();
        this.dispatchEvent({ type: Events.SHOW });
        return this;
    };
    HtmlEdit.prototype.hide = function () {
        this.element.blur();
        this.dispatchEvent({ type: Events.HIDE });
        return _super.prototype.hide.call(this);
    };
    HtmlEdit.prototype.create = function (tag) {
        _super.prototype.create.call(this, tag);
        var me = this;
        var element = this.element;
        element.onkeypress = function (e) {
            var detail = { oldValue: this.value, newValue: this.value };
            if (e.keyCode === 13 && tag === "input") {
                this.blur();
                me.e.init(Events.CHANGE, detail);
            }
            else {
                me.e.init(Events.CHANGING, detail);
            }
            me.dispatchEvent(me.e);
        };
        element.onchange = function (evt) {
            var detail = { oldValue: this.value, newValue: this.value };
            me.e.init(Events.CHANGE, detail);
            me.dispatchEvent(me.e);
        };
        element.onblur = function (evt) {
            me.hide();
        };
        return this;
    };
    Object.defineProperty(HtmlEdit, "input", {
        get: function () {
            if (!HtmlEdit._input) {
                HtmlEdit._input = new HtmlEdit();
                HtmlEdit._input.create("input");
                HtmlEdit._input.element.type = "text";
            }
            return HtmlEdit._input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlEdit, "textArea", {
        get: function () {
            if (!HtmlEdit._textArea) {
                HtmlEdit._textArea = new HtmlEdit();
                HtmlEdit._textArea.create("textarea");
            }
            return HtmlEdit._textArea;
        },
        enumerable: true,
        configurable: true
    });
    return HtmlEdit;
}(html_element_1.HtmlElement));
exports.HtmlEdit = HtmlEdit;
;
