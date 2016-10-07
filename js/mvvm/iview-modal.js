"use strict";
;
;
/**
 * 数据绑定模式。
 */
(function (BindingMode) {
    /**
     * 双向数据绑定。
     * 界面数据变化时自动更新ViewModal，ViewModal数据有变化时自动更新界面。
     */
    BindingMode[BindingMode["TWO_WAY"] = 0] = "TWO_WAY";
    /**
     * 单向数据绑定。
     * 界面数据变化时不更新ViewModal，ViewModal数据有变化时自动更新界面。
     */
    BindingMode[BindingMode["ONE_WAY"] = 1] = "ONE_WAY";
    /**
     * 只在初始化时绑定。
     * 界面数据变化时不更新ViewModal，ViewModal数据有变化时不更新界面。
     */
    BindingMode[BindingMode["ONE_TIME"] = 2] = "ONE_TIME";
    /**
     * 单向数据绑定。
     * 界面数据变化时自动更新ViewModal，ViewModal数据有变化时不更新界面。
     */
    BindingMode[BindingMode["ONE_WAY_TO_SOURCE"] = 3] = "ONE_WAY_TO_SOURCE";
})(exports.BindingMode || (exports.BindingMode = {}));
var BindingMode = exports.BindingMode;
;
var BindingModeNames = ["two-way", "one-way", "one-time", "one-way-to-source"];
function toBindingMode(name) {
    return Math.max(0, BindingModeNames.indexOf(name));
}
exports.toBindingMode = toBindingMode;
/**
 * 更新ViewModal的时机。
 */
(function (UpdateTiming) {
    /**
     * 有变化时立即更新(如编辑器正在输入)。
     */
    UpdateTiming[UpdateTiming["CHANGING"] = 0] = "CHANGING";
    /**
     * 变化完成时才更新(如编辑器失去焦点时)。
     */
    UpdateTiming[UpdateTiming["CHANGED"] = 1] = "CHANGED";
    /**
     * 手动更新。
     */
    UpdateTiming[UpdateTiming["EXPLICIT"] = 2] = "EXPLICIT";
})(exports.UpdateTiming || (exports.UpdateTiming = {}));
var UpdateTiming = exports.UpdateTiming;
;
var UpdateTimingNames = ["changing", "changed", "explicit"];
function toUpdateTiming(name) {
    return Math.max(0, UpdateTimingNames.indexOf(name));
}
exports.toUpdateTiming = toUpdateTiming;
