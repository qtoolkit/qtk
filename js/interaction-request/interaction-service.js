"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emitter_1 = require("../emitter");
var Events = require("../events");
var toast_dialog_1 = require("./toast-dialog");
var input_dialog_1 = require("./input-dialog");
var props_dialog_1 = require("./props-dialog");
var choice_dialog_1 = require("./choice-dialog");
var progress_dialog_1 = require("./progress-dialog");
var confirmation_dialog_1 = require("./confirmation-dialog");
var notification_dialog_1 = require("./notification-dialog");
var interaction_types_1 = require("./interaction-types");
var InteractionService = (function () {
    function InteractionService() {
        this._emitter = new emitter_1.Emitter();
    }
    InteractionService.prototype.onRequest = function (callback) {
        this._emitter.on(Events.INTERACTION_REQUEST, callback);
    };
    InteractionService.prototype.offRequest = function (callback) {
        this._emitter.off(Events.INTERACTION_REQUEST, callback);
    };
    InteractionService.prototype.dispatchRequest = function (detail) {
        var type = Events.INTERACTION_REQUEST;
        var e = Events.InteractionRequestEvent.create(type, detail);
        this._emitter.dispatchEvent(e);
        if (!e.defaultPrevented) {
            this.defaultHandler(e);
        }
        e.dispose();
    };
    InteractionService.prototype.defaultHandler = function (e) {
        var name = e.name;
        var payload = e.payload;
        switch (name) {
            case interaction_types_1.InteractionTypes.TOAST: {
                toast_dialog_1.ToastDialog.show(e);
                break;
            }
            case interaction_types_1.InteractionTypes.INPUT: {
                input_dialog_1.InputDialog.show(e);
                break;
            }
            case interaction_types_1.InteractionTypes.PROGRESS: {
                progress_dialog_1.ProgressDialog.show(e);
                break;
            }
            case interaction_types_1.InteractionTypes.CHOICE: {
                choice_dialog_1.ChoiceDialog.show(e);
                break;
            }
            case interaction_types_1.InteractionTypes.PROPS: {
                props_dialog_1.PropsDialog.show(e);
                break;
            }
            case interaction_types_1.InteractionTypes.NOTIFICATION: {
                notification_dialog_1.NotificationDialog.show(e);
                break;
            }
            case interaction_types_1.InteractionTypes.CONFIRMATION: {
                confirmation_dialog_1.ConfirmationDialog.show(e);
                break;
            }
            default: break;
        }
    };
    InteractionService.getInstance = function () {
        return InteractionService.instance;
    };
    InteractionService.init = function () {
        InteractionService.instance = new InteractionService();
        return InteractionService.instance;
    };
    InteractionService.onRequest = function (callback) {
        InteractionService.instance.onRequest(callback);
    };
    InteractionService.offRequest = function (callback) {
        InteractionService.instance.offRequest(callback);
    };
    return InteractionService;
}());
exports.InteractionService = InteractionService;
;
