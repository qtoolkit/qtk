"use strict";
var ChoiceOption = (function () {
    function ChoiceOption(text, iconURL) {
        this.text = text;
        this.choosed = false;
        this.iconURL = iconURL || null;
    }
    ChoiceOption.create = function (text, iconURL) {
        return new ChoiceOption(text, iconURL);
    };
    return ChoiceOption;
}());
exports.ChoiceOption = ChoiceOption;
;
var ChoiceInfo = (function () {
    function ChoiceInfo(title, multiple, w) {
        this.w = w;
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
    ChoiceInfo.create = function (title, multiple, w) {
        return new ChoiceInfo(title, multiple, w);
    };
    return ChoiceInfo;
}());
exports.ChoiceInfo = ChoiceInfo;
;
