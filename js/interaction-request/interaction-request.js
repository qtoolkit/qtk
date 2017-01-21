"use strict";
var interaction_types_1 = require("./interaction-types");
/**
 * @class InteractionRequest
 * <p>在使用MVC/MVVM等模式开发应用程序时，Model或View-Model都不应该直接操作View。
 * <p>但是确实存在这种需求：在执行某个Command时，需要用户确认、输入数据或跳转到其它View，此时应该使用InteractionRequest，而不是直接弹出MessageBox或打开某个View。
 * <p>InteractionRequest只是发出一个请求，并不关心谁去执行这个请求，这样就降低了与界面的实现者之间的耦合。界面的实现者可以通过向InteractionService注册，收到请求之后做出相应的处理。
 *
 */
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
    InteractionRequest.prototype.progress = function (info, callback) {
        this.request(interaction_types_1.InteractionTypes.PROGRESS, callback, info);
    };
    InteractionRequest.init = function (service) {
        InteractionRequest.instance = new InteractionRequest(service);
    };
    /**
     * @method toast
     * 显示一段文本提示，在指定的时间后自动关闭。
     * @static
     * @param {ToastInfo} info 参数信息。
     *
     *     @example
     *     InteractionRequest.toast(ToastInfo.create("hello qtk", 500, 128));
     *
     */
    InteractionRequest.toast = function (info) {
        InteractionRequest.instance.toast(info);
    };
    /**
     * @method notify
     * 显示一段文本提示，在用户点击『关闭』按钮之后才关闭。
     * @static
     * @param {NotificationInfo} info 参数信息。
     *
     *     @example
     *     InteractionRequest.notify(NotificationInfo.create("Hello QToolKit", 200));
     */
    InteractionRequest.notify = function (info) {
        InteractionRequest.instance.notify(info);
    };
    /**
     * @method confirm
     * 显示一个确认对话框，用户可以选择『是』或『取消』。
     * @static
     * @param {Function} callback 关闭确认对话框时的回调函数，可以通过ConfirmationInfo的confirmed成员区分用户选择了『是』或『取消』。
     * @param {ConfirmationInfo} info 参数信息。
     *
     *     @example
     *     InteractionRequest.confirm(ConfirmationInfo.create("Are you sure to quit?", 200),
     *         function(info) {
     *         	console.dir(info);
     *     });
     *
     */
    InteractionRequest.confirm = function (info, callback) {
        InteractionRequest.instance.confirm(info, callback);
    };
    /**
     * @method input
     * 显示一个输入对话框，用户可以输入数据，并『确定』或『取消』。
     * @static
     * @param {Function} callback 用户选择『确定』时的回调函数，可以通过InputInfo的value成员获取用户的输入。
     * @param {InputInfo} info 参数信息。
     *
     *      @example
     *		var value = "Jim";
     *		var inputType = "text";
     *		var inputTips = "Name";
     *      var title = "Please input your name:"
     *
     *		InteractionRequest.input(InputInfo.create(title, value, inputTips, inputType, 300),
     *			function(info) {
     * 			console.dir(info);
     *		});
     */
    InteractionRequest.input = function (info, callback) {
        InteractionRequest.instance.input(info, callback);
    };
    /**
     * @method choice
     * 显示一个选择对话框，用户可以选择数据项，并『确定』或『取消』。
     * @static
     * @param {Function} callback 用户选择『确定』时的回调函数，可以通过InputInfo的value获取用户的输入。
     * @param {ChoiceInfo} info 参数信息。
     *
     *      @example
     *      var iconURL = multiple ? null : '/demos/assets/icons/@density/favor.normal.png';
     *      var data = [
     *              {text:"Red", iconURL:iconURL},
     *              {text:"Green", iconURL:iconURL},
     *              {text:"Blue", iconURL:iconURL},
     *              {text:"Yellow", iconURL:iconURL},
     *              {text:"Gold", iconURL:iconURL},
     *              {text:"Orange", iconURL:iconURL},
     *          ];
     *
     *       var choiceInfo = ChoiceInfo.create("Please Choose", multiple, 300, 240);
     *       data.forEach(function(item) {
     *          choiceInfo.addOption(item.text, item.iconURL);
     *       });
     *
     *       InteractionRequest.choice(choiceInfo, function(ret) {
     *           console.dir(ret);
     *       });
     *
     */
    InteractionRequest.choice = function (info, callback) {
        InteractionRequest.instance.choice(info, callback);
    };
    /**
     * @method props
     * 显示一个属性对话框，可以向用户呈现各种复杂的界面。
     * @static
     * @param {Function} callback 用户选择『确定』时的回调函数，可以通过ProgressInfo的data获取用户的输入。
     * @param {PropsInfo} info 参数信息。
     *
     *     @example
     *     var data = {
     *         name:"QTK",
     *         age:100,
     *         desc:"QToolKit",
     *         point:{x:100, y:200},
     *         point3d:{x:1, y:2, z:3},
     *         range:{first:100, second:200},
     *         color:"Red",
     *         opacity:0.5
     *     };
     *
     *     var json = [
     *         {type:"number", name:"Age", desc:"age", path:"age"},
     *         {type:"text", name:"Name", desc:"name", path:"name"},
     *         {type:"text-readonly", name:"Desc", path:"desc"},
     *         {type:"line", name:"Point"},
     *         {type:"vector2", name:"Point", path:"point"},
     *         {type:"vector3", name:"Point3D", path:"point3d"},
     *         {type:"line", name:""},
     *         {type:"range", name:"Range", path:"range"},
     *         {type:"options", name:"Color", path:"color", options:["Green", "Red", "Blue"]},
     *         {type:"slider", name:"Opacity", path:"opacity"},
     *     ];
     *     var propsDesc = PagePropsDesc.create("Property", json);
     *     InteractionRequest.props(PropsInfo.create(propsDesc, data, true, 300), function(ret) {
     *         console.dir(ret);
     *   });
     */
    InteractionRequest.props = function (info, callback) {
        InteractionRequest.instance.props(info, callback);
    };
    /**
     * @method progress
     * 显示一个进度对话框。
     * @static
     * @param {Function} callback 关闭对话框时的回调函数。
     * @param {ProgressInfo} info 参数信息。
     *
     *     @example
     *     function download(onProgress) {
     *			var progress = 0;
     *			function updateProgress() {
     *				progress += 0.1;
     *				onProgress(progress);
     *				if(progress < 1) {
     *					setTimeout(updateProgress, 200);
     *				}
     *			}
     *			updateProgress();
     *		}
     *
     *		var info = ProgressInfo.create("Downloading...", download, 300);
     *
     *		InteractionRequest.progress(info, function(ret) {
     *			console.dir(ret);
     *		});
     */
    InteractionRequest.progress = function (info, callback) {
        InteractionRequest.instance.progress(info, callback);
    };
    /**
     * @method request
     * 通用的界面请求，一般用于打开指定的View。
     * @static
     * @param {string} name 关闭对话框时的回调函数。
     * @param {Function} callback View关闭时的回调函数。
     * @param {any} 传递给目标View的参数信息。
     */
    InteractionRequest.request = function (name, callback, payload) {
        InteractionRequest.instance.request(name, callback, payload);
    };
    return InteractionRequest;
}());
exports.InteractionRequest = InteractionRequest;
