"use strict";
/**
 * 数据有效性检查的结果。
 */
var ValidationResult = (function () {
    function ValidationResult(code, message) {
        this.code = code;
        this.message = message;
    }
    /**
     * 创建函数。
     */
    ValidationResult.create = function (code, message) {
        return new ValidationResult(code, message);
    };
    /**
     * 数据有效时，可以共用的结果，不能在运行是修改。
     */
    ValidationResult.validResult = ValidationResult.create(0, "valid");
    return ValidationResult;
}());
exports.ValidationResult = ValidationResult;
;
