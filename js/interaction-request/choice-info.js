"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChoiceOption = (function () {
    function ChoiceOption(text, iconURL) {
        this.text = text;
        this.iconURL = iconURL || null;
    }
    ChoiceOption.create = function (text, iconURL) {
        return new ChoiceOption(text, iconURL);
    };
    return ChoiceOption;
}());
exports.ChoiceOption = ChoiceOption;
;
/**
 * @class ChoiceInfo
 * InteractionRequest.choice 的参数。
 */
var ChoiceInfo = (function () {
    function ChoiceInfo(title, multiple, w, h) {
        this.w = w;
        this.h = h;
        this.title = title;
        this.multiple = multiple;
        this.resetOptions();
    }
    ChoiceInfo.prototype.resetOptions = function () {
        this.options = [];
    };
    ChoiceInfo.prototype.addOption = function (text, iconURL) {
        this.options.push(ChoiceOption.create(text, iconURL));
    };
    /**
     * @method create
     * @static
     * 创建ChoiceInfo对象。
     *
     * @param {string} title 标题
     * @param {boolean} multiple 是否多选。
     * @param {number} w 宽度（单位为像素）。
     * @param {number} h 高度（单位为像素）。
     *
     * @return {ToastInfo}
     */
    ChoiceInfo.create = function (title, multiple, w, h) {
        return new ChoiceInfo(title, multiple, w, h);
    };
    return ChoiceInfo;
}());
exports.ChoiceInfo = ChoiceInfo;
;
