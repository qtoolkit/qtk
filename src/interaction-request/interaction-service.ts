
import {Emitter} from "../emitter";
import Events = require("../events");

import {ToastDialog} from "./toast-dialog";
import {InputDialog} from "./input-dialog";
import {PropsDialog} from "./props-dialog";
import {ChoiceDialog} from "./choice-dialog";
import {ConfirmationDialog} from "./confirmation-dialog";
import {NotificationDialog} from "./notification-dialog";

import {ToastInfo} from "./toast-info";
import {InputInfo} from "./input-info";
import {PropsInfo} from "./props-info";
import {ChoiceInfo} from "./choice-info";
import {ConfirmationInfo} from "./confirmation-info";
import {NotificationInfo} from "./notification-info";
import {InteractionTypes} from "./interaction-types";
import {IInteractionService, InteractionRequestHandler} from "./iinteraction-service";

export class InteractionService implements IInteractionService {
	protected _emitter : Emitter;

	public onRequest(callback:InteractionRequestHandler) {
		this._emitter.on(Events.INTERACTION_REQUEST, callback);
	}

	public offRequest(callback:InteractionRequestHandler) {
		this._emitter.off(Events.INTERACTION_REQUEST, callback);
	}

	public dispatchRequest(detail:any) {
		var type = Events.INTERACTION_REQUEST;
		var e = <Events.InteractionRequestEvent>Events.InteractionRequestEvent.create(type, detail);
		this._emitter.dispatchEvent(e);

		if(!e.defaultPrevented) {
			this.defaultHandler(e);
		}
		e.dispose();
	}

	public defaultHandler(e:Events.InteractionRequestEvent) {
		var name = e.name;
		var payload = e.payload;

		switch(name) {
			case InteractionTypes.TOAST: {
				ToastDialog.show(e);
				break;
			}
			case InteractionTypes.INPUT: {
				InputDialog.show(e);
				break;
			}
			case InteractionTypes.CHOICE: {
				ChoiceDialog.show(e);
				break;
			}
			case InteractionTypes.PROPS: {
				PropsDialog.show(e);
				break;
			}
			case InteractionTypes.NOTIFICATION: {
				NotificationDialog.show(e);
				break;
			}
			case InteractionTypes.CONFIRMATION: {
				ConfirmationDialog.show(e);
				break;
			}
			default:break;
		}
	}

	constructor() {
		this._emitter = new Emitter();
	}

	protected static instance : InteractionService;
	public static getInstance() : InteractionService {
		return InteractionService.instance;
	}

	public static init() {
		InteractionService.instance = new InteractionService();
	}
	
	public static onRequest(callback:InteractionRequestHandler) {
		InteractionService.instance.onRequest(callback);
	}

	public static offRequest(callback:InteractionRequestHandler) {
		InteractionService.instance.offRequest(callback);
	}
};

