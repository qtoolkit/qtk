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
var Events = require("../events");
var html_element_1 = require("./html-element");
var event_detail_1 = require("../event-detail");
var HtmlEdit = (function (_super) {
    __extends(HtmlEdit, _super);
    function HtmlEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeEvent = Events.ChangeEvent.create();
        _this.keyEvent = Events.KeyEvent.create(null, event_detail_1.KeyEventDetail.create(0));
        return _this;
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
        this._visible = true;
        this.dispatchEvent({ type: Events.SHOW });
        return this;
    };
    HtmlEdit.prototype.hide = function () {
        if (this._visible) {
            this._visible = false;
            this.element.blur();
            this.dispatchEvent({ type: Events.HIDE });
        }
        this.removeAllListeners();
        return _super.prototype.hide.call(this);
    };
    HtmlEdit.prototype.create = function (tag) {
        _super.prototype.create.call(this, tag);
        var me = this;
        var element = this.element;
        element.onkeyup = function (e) {
            var evt = me.changeEvent;
            var detail = { oldValue: this.value, newValue: this.value };
            me.dispatchEvent(me.keyEvent.init(Events.KEYUP, event_detail_1.KeyEventDetail.create(e.keyCode)));
            if (e.keyCode === 13 && tag === "input") {
                me.dispatchEvent(evt.init(Events.CHANGE, detail));
                this.blur();
            }
            else {
                me.dispatchEvent(evt.init(Events.CHANGING, detail));
            }
        };
        element.onkeydown = function (e) {
            me.dispatchEvent(me.keyEvent.init(Events.KEYDOWN, event_detail_1.KeyEventDetail.create(e.keyCode)));
        };
        element.oninput = function (evt) {
            var detail = { oldValue: this.value, newValue: this.value };
            me.dispatchEvent(me.changeEvent.init(Events.CHANGING, detail));
        };
        element.onchange = function (evt) {
            var detail = { oldValue: this.value, newValue: this.value };
            me.changeEvent.init(Events.CHANGE, detail);
            me.dispatchEvent(me.changeEvent);
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
