"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var html_edit_1 = require("./html-edit");
var HtmlInputText = (function (_super) {
    __extends(HtmlInputText, _super);
    function HtmlInputText() {
        _super.call(this);
        this.create("input");
        this.element.type = "text";
    }
    Object.defineProperty(HtmlInputText, "input", {
        get: function () {
            if (!HtmlInputText._input) {
                HtmlInputText._input = new HtmlInputText();
            }
            return HtmlInputText._input;
        },
        enumerable: true,
        configurable: true
    });
    return HtmlInputText;
}(html_edit_1.HtmlEdit));
exports.HtmlInputText = HtmlInputText;
;
