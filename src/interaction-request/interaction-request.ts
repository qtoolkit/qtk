import Events = require("../events");

import {ToastInfo} from "./toast-info";
import {InputInfo} from "./input-info";
import {PropsInfo} from "./props-info";
import {ChoiceInfo} from "./choice-info";
import {ConfirmationInfo} from "./confirmation-info";
import {NotificationInfo} from "./notification-info";
import {InteractionTypes} from "./interaction-types";
import {IInteractionService} from "./iinteraction-service";

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

	constructor(service:IInteractionService) {
		this.service = service;
	}

	protected static instance : InteractionRequest;

	public static init(service:IInteractionService) {
		InteractionRequest.instance = new InteractionRequest(service);
	}

	public static toast(info:ToastInfo) {
		InteractionRequest.instance.toast(info);
	}
	
	public static notify(info:NotificationInfo) {
		InteractionRequest.instance.notify(info);
	}
	
	public static confirm(info:ConfirmationInfo, callback?:Function) {
		InteractionRequest.instance.confirm(info, callback);
	}
	
	public static input(info:InputInfo, callback?:Function) {
		InteractionRequest.instance.input(info, callback);
	}
	
	public static choice(info:ChoiceInfo, callback?:Function) {
		InteractionRequest.instance.choice(info, callback);
	}
	
	public static props(info:PropsInfo, callback?:Function) {
		InteractionRequest.instance.props(info, callback);
	}
	
	public static request(name:string, callback?:Function, payload?:any) {
		InteractionRequest.instance.request(name, callback, payload);
	}
}

