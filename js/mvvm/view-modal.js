"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view_modal_default_1 = require("./view-modal-default");
var ViewModal = (function (_super) {
    __extends(ViewModal, _super);
    function ViewModal() {
        _super.apply(this, arguments);
    }
    ViewModal.create = function (data) {
        var viewModal = new ViewModal(data);
        return viewModal;
    };
    return ViewModal;
}(view_modal_default_1.ViewModalDefault));
exports.ViewModal = ViewModal;
;
