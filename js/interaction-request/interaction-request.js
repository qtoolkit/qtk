"use strict";
var interaction_types_1 = require("./interaction-types");
var InteractionRequest = (function () {
    function InteractionRequest(service) {
        this.service = service;
    }
    InteractionRequest.prototype.request = function (name, callback, payload) {
        var detail = { name: name, callback: callback, payload: payload };
        this.service.dispatchRequest(detail);
    };
    InteractionRequest.prototype.toast = function (info) {
        this.request(interaction_types_1.InteractionTypes.TOAST, null, info);
    };
    InteractionRequest.prototype.notify = function (info) {
        this.request(interaction_types_1.InteractionTypes.NOTIFICATION, null, info);
    };
    InteractionRequest.prototype.confirm = function (info, callback) {
        this.request(interaction_types_1.InteractionTypes.CONFIRMATION, callback, info);
    };
    InteractionRequest.prototype.input = function (info, callback) {
        this.request(interaction_types_1.InteractionTypes.INPUT, callback, info);
    };
    InteractionRequest.prototype.choice = function (info, callback) {
        this.request(interaction_types_1.InteractionTypes.CHOICE, callback, info);
    };
    InteractionRequest.prototype.props = function (info, callback) {
        this.request(interaction_types_1.InteractionTypes.PROPS, callback, info);
    };
    InteractionRequest.init = function (service) {
        InteractionRequest.instance = new InteractionRequest(service);
    };
    InteractionRequest.toast = function (info) {
        InteractionRequest.instance.toast(info);
    };
    InteractionRequest.notify = function (info) {
        InteractionRequest.instance.notify(info);
    };
    InteractionRequest.confirm = function (info, callback) {
        InteractionRequest.instance.confirm(info, callback);
    };
    InteractionRequest.input = function (info, callback) {
        InteractionRequest.instance.input(info, callback);
    };
    InteractionRequest.choice = function (info, callback) {
        InteractionRequest.instance.choice(info, callback);
    };
    InteractionRequest.props = function (info, callback) {
        InteractionRequest.instance.props(info, callback);
    };
    InteractionRequest.request = function (name, callback, payload) {
        InteractionRequest.instance.request(name, callback, payload);
    };
    return InteractionRequest;
}());
exports.InteractionRequest = InteractionRequest;
