"use strict";
var DelegateValidationRule = (function () {
    function DelegateValidationRule(validate) {
        this._validate = validate;
    }
    DelegateValidationRule.prototype.validate = function (value) {
        return this._validate(value);
    };
    DelegateValidationRule.create = function (validate) {
        return new DelegateValidationRule(validate);
    };
    return DelegateValidationRule;
}());
exports.DelegateValidationRule = DelegateValidationRule;
;
