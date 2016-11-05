"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view_model_default_1 = require("./view-model-default");
/**
 * IViewModel的基本实现。如果不能满足要求，可以重载部分函数。
 */
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.apply(this, arguments);
    }
    ViewModel.create = function (data) {
        var viewModel = new ViewModel(data);
        return viewModel;
    };
    return ViewModel;
}(view_model_default_1.ViewModelDefault));
exports.ViewModel = ViewModel;
;
