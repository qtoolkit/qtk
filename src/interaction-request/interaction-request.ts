import Events = require("../events");

import {ToastInfo} from "./toast-info";
import {InputInfo} from "./input-info";
import {PropsInfo} from "./props-info";
import {ChoiceInfo} from "./choice-info";
import {ProgressInfo} from "./progress-info";
import {ConfirmationInfo} from "./confirmation-info";
import {NotificationInfo} from "./notification-info";
import {InteractionTypes} from "./interaction-types";
import {IInteractionService} from "./iinteraction-service";

/**
 * @class InteractionRequest
 * <p>在使用MVC/MVVM等模式开发应用程序时，Model或View-Model都不应该直接操作View。
 * <p>但是确实存在这种需求：在执行某个Command时，需要用户确认、输入数据或跳转到其它View，此时应该使用InteractionRequest，而不是直接弹出MessageBox或打开某个View。
 * <p>InteractionRequest只是发出一个请求，并不关心谁去执行这个请求，这样就降低了与界面的实现者之间的耦合。界面的实现者可以通过向InteractionService注册，收到请求之后做出相应的处理。
 * 
 */
export class InteractionRequest {
	protected service : IInteractionService;

	public request(name:string, callback?:Function, payload?:any) {
		var detail = {name:name, callback:callback, payload:payload};
		this.service.dispatchRequest(detail);
	}

	public toast(info:ToastInfo) {
		this.request(InteractionTypes.TOAST, null, info);
	}
	
	public notify(info:NotificationInfo) {
		this.request(InteractionTypes.NOTIFICATION, null, info);
	}
	
	public confirm(info:ConfirmationInfo, callback?:Function) {
		this.request(InteractionTypes.CONFIRMATION, callback, info);
	}
	
	public input(info:InputInfo, callback?:Function) {
		this.request(InteractionTypes.INPUT, callback, info);
	}
	
	public choice(info:ChoiceInfo, callback?:Function) {
		this.request(InteractionTypes.CHOICE, callback, info);
	}
	
	public props(info:PropsInfo, callback?:Function) {
		this.request(InteractionTypes.PROPS, callback, info);
	}
	
	public progress(info:ProgressInfo, callback?:Function) {
		this.request(InteractionTypes.PROGRESS, callback, info);
	}

	constructor(service:IInteractionService) {
		this.service = service;
	}

	protected static instance : InteractionRequest;

	public static init(service:IInteractionService) {
		InteractionRequest.instance = new InteractionRequest(service);
	}

    /**
     * @method toast
     * 显示一段文本提示，在指定的时间后自动关闭。
     * @static
     * @param {ToastInfo} info 参数信息。
     * @return void
     */
	public static toast(info:ToastInfo) {
		InteractionRequest.instance.toast(info);
	}
	
    /**
     * @method notify 
     * 显示一段文本提示，在用户点击『关闭』按钮之后才关闭。
     * @static
     * @param {NotificationInfo} info 参数信息。
     * @return void
     */
	public static notify(info:NotificationInfo) {
		InteractionRequest.instance.notify(info);
	}
	
    /**
     * @method confirm 
     * 显示一个确认对话框，用户可以选择『是』或『取消』。
     * @static
     * @param {Function} callback 关闭确认对话框时的回调函数，可以通过ConfirmationInfo的confirmed成员区分用户选择了『是』或『取消』。
     * @param {ConfirmationInfo} info 参数信息。
     * @return void
     */
	public static confirm(info:ConfirmationInfo, callback?:Function) {
		InteractionRequest.instance.confirm(info, callback);
	}
	
    /**
     * @method input 
     * 显示一个输入对话框，用户可以输入数据，并『确定』或『取消』。
     * @static
     * @param {Function} callback 用户选择『确定』时的回调函数，可以通过InputInfo的value成员获取用户的输入。
     * @param {InputInfo} info 参数信息。
     * @return void
     */
	public static input(info:InputInfo, callback?:Function) {
		InteractionRequest.instance.input(info, callback);
	}
	
    /**
     * @method choice 
     * 显示一个选择对话框，用户可以选择数据项，并『确定』或『取消』。
     * @static
     * @param {Function} callback 用户选择『确定』时的回调函数，可以通过InputInfo的value获取用户的输入。
     * @param {ChoiceInfo} info 参数信息。
     * @return void
     */
	public static choice(info:ChoiceInfo, callback?:Function) {
		InteractionRequest.instance.choice(info, callback);
	}
	
    /**
     * @method props 
     * 显示一个属性对话框，可以向用户呈现各种复杂的界面。
     * @static
     * @param {Function} callback 用户选择『确定』时的回调函数，可以通过ProgressInfo的data获取用户的输入。
     * @param {PropsInfo} info 参数信息。
     * @return void
     */
	public static props(info:PropsInfo, callback?:Function) {
		InteractionRequest.instance.props(info, callback);
	}
	
    /**
     * @method progress
     * 显示一个进度对话框。
     * @static
     * @param {Function} callback 关闭对话框时的回调函数。
     * @param {ProgressInfo} info 参数信息。
     * @return void
     */
	public static progress(info:ProgressInfo, callback?:Function) {
		InteractionRequest.instance.progress(info, callback);
	}
	
    /**
     * @method request 
     * 通用的界面请求，一般用于打开指定的View。
     * @static
     * @param {string} name 关闭对话框时的回调函数。
     * @param {Function} callback View关闭时的回调函数。
     * @param {any} 附加数据。 
     * @return void
     */
	public static request(name:string, callback?:Function, payload?:any) {
		InteractionRequest.instance.request(name, callback, payload);
	}
}

