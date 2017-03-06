"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数值比较器。
 */
var NumberComparator = (function () {
    function NumberComparator() {
    }
    NumberComparator.prototype.compare = function (a, b) {
        return a - b;
    };
    NumberComparator.create = function () {
        return new NumberComparator();
    };
    return NumberComparator;
}());
exports.NumberComparator = NumberComparator;
;
/**
 * 字符串比较器。
 */
var StringComparator = (function () {
    function StringComparator() {
    }
    StringComparator.prototype.compare = function (a, b) {
        if (a > b) {
            return 1;
        }
        else if (a == b) {
            return 0;
        }
        else {
            return -1;
        }
    };
    StringComparator.create = function () {
        return new StringComparator();
    };
    return StringComparator;
}());
exports.StringComparator = StringComparator;
;
/**
 * 反向比较器。
 */
var RevertComparator = (function () {
    function RevertComparator(comparator) {
        this.comparator = comparator;
    }
    RevertComparator.prototype.compare = function (a, b) {
        var ret = this.comparator.compare(a, b);
        if (ret) {
            ret = -ret;
        }
        return ret;
    };
    RevertComparator.create = function (comparator) {
        return new RevertComparator(comparator);
    };
    return RevertComparator;
}());
exports.RevertComparator = RevertComparator;
;
/**
 * 对象属性比较器。
 */
var ObjectPropComparator = (function () {
    function ObjectPropComparator(comparator, prop) {
        this.prop = prop;
        this.comparator = comparator;
    }
    ObjectPropComparator.prototype.compare = function (a, b) {
        var prop = this.prop;
        return this.comparator.compare(a[prop], b[prop]);
    };
    ObjectPropComparator.create = function (comparator, prop) {
        return new ObjectPropComparator(comparator, prop);
    };
    return ObjectPropComparator;
}());
exports.ObjectPropComparator = ObjectPropComparator;
;
