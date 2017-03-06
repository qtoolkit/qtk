"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var device_info_1 = require("./device-info");
var StringTable = (function () {
    function StringTable() {
    }
    StringTable.set = function (strTable, lang) {
        if (!lang) {
            lang = device_info_1.DeviceInfo.language;
        }
        StringTable.table[lang] = strTable;
    };
    StringTable.add = function (strTable, lang) {
        if (!lang) {
            lang = device_info_1.DeviceInfo.language;
        }
        if (StringTable.table[lang]) {
            var table = StringTable.table[lang];
            for (var key in strTable) {
                table[key] = strTable[key];
            }
        }
        else {
            StringTable.table[lang] = strTable;
        }
    };
    StringTable.get = function (lang) {
        return StringTable.table[lang];
    };
    StringTable.tr = function (str) {
        var lang = device_info_1.DeviceInfo.language;
        var table = StringTable.table[lang];
        var tr = table ? table[str] : str;
        return tr ? tr : str;
    };
    return StringTable;
}());
StringTable.table = {};
exports.StringTable = StringTable;
;
