"use strict";
/**
 * @class InputInfo
 * InteractionRequest.input的参数。
 */
var InputInfo = (function () {
    function InputInfo(title, value, inputTips, inputType, w) {
        this.w = w;
        this.value = value;
        this.title = title;
        this.inputTips = inputTips;
        this.inputType = inputType;
        this.isValueValid = function (value) {
            return !!value;
        };
    }
    /**
     * @method create
     * @static
     * 创建InputInfo对象。
     *
     * @param {string} title 标题。
     * @param {string} value 缺省值。
     * @param {string} inputTips 输入提示（可选）。
     * @param {string} inputType 输入类型（可选）, "text"表示文本，"number"表示数值。
     * @param {number} w 宽度（单位为像素）（可选）。
     *
     * @return {InputInfo}
     */
    InputInfo.create = function (title, value, inputTips, inputType, w) {
        return new InputInfo(title, value, inputTips, inputType, w);
    };
    return InputInfo;
}());
exports.InputInfo = InputInfo;
;
