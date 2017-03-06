"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemsStorage = (function () {
    function ItemsStorage(prefix) {
        this._prefix = prefix + ".";
    }
    ItemsStorage.prototype.getKey = function (name) {
        return this._prefix + name;
    };
    ItemsStorage.prototype.set = function (name, data) {
        var key = this.getKey(name);
        localStorage.setItem(key, data);
    };
    ItemsStorage.prototype.remove = function (name) {
        var key = this.getKey(name);
        localStorage.removeItem(key);
        return true;
    };
    ItemsStorage.prototype.get = function (name) {
        var key = this.getKey(name);
        return localStorage.getItem(key);
    };
    ItemsStorage.prototype.getItems = function () {
        var n = localStorage.length;
        var items = [];
        var prefix = this._prefix;
        for (var i = 0; i < n; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(prefix) === 0) {
                items.push(key.substr(prefix.length));
            }
        }
        return items;
    };
    ItemsStorage.create = function (prefix) {
        return new ItemsStorage(prefix);
    };
    return ItemsStorage;
}());
exports.ItemsStorage = ItemsStorage;
;
