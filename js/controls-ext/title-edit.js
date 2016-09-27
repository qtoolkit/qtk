"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var edit_1 = require("../controls/edit");
var title_value_1 = require("./title-value");
var recyclable_creator_1 = require("../recyclable-creator");
var TitleEdit = (function (_super) {
    __extends(TitleEdit, _super);
    function TitleEdit(type) {
        _super.call(this, type || TitleEdit.TYPE);
    }
    Object.defineProperty(TitleEdit.prototype, "inputFilter", {
        get: function () {
            return this._inputFilter;
        },
        set: function (value) {
            this._inputFilter = value;
            if (this._valueWidget) {
                this._valueWidget.set({ inputFilter: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleEdit.prototype, "inputType", {
        get: function () {
            return this._inputType;
        },
        set: function (value) {
            this._inputType = value;
            if (this._valueWidget) {
                this._valueWidget.set({ inputType: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleEdit.prototype, "inputTips", {
        get: function () {
            return this._inputTips;
        },
        set: function (value) {
            this._inputTips = value;
            if (this._valueWidget) {
                this._valueWidget.set({ inputTips: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    TitleEdit.prototype.createValueWidget = function (options) {
        var opts = options || {};
        if (this._inputTips) {
            opts.inputTips = this._inputTips;
        }
        if (this._inputType) {
            opts.inputType = this._inputType;
        }
        if (this._inputFilter) {
            opts.inputFilter = this._inputFilter;
        }
        return edit_1.Edit.create(opts);
    };
    TitleEdit.create = function (options) {
        return TitleEdit.recycleBin.create().reset(TitleEdit.TYPE).set(options);
    };
    TitleEdit.TYPE = "title-edit";
    TitleEdit.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleEdit(); });
    return TitleEdit;
}(title_value_1.TitleValue));
exports.TitleEdit = TitleEdit;
;
