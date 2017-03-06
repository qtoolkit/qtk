"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 把当前对象转换成JSON对象或从JSON对象来初始化当前对象。
 */
var JsonSerializer = (function () {
    function JsonSerializer() {
    }
    JsonSerializer.prototype.toJson = function () {
        var json = {};
        for (var key in this) {
            var value = this[key];
            if (this.hasOwnProperty(key) && typeof value !== "function") {
                json[key] = value;
            }
        }
        return json;
    };
    JsonSerializer.prototype.fromJson = function (json) {
        for (var key in json) {
            this[key] = json[key];
        }
    };
    return JsonSerializer;
}());
exports.JsonSerializer = JsonSerializer;
