/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import EventEmitter = require("eventemitter3");

class EmitterImpl extends EventEmitter {
	constructor() {
		super();
	}
}

function toCaptureEventName(name:string) : string {
	return name + ".capture";
}

/**
 * 事件分发器。
 */
export class Emitter {
	private emitter : EmitterImpl;
	constructor() {
		this.emitter = new EmitterImpl();
	}

	/***
	 * 注册事件处理函数。
	 * @param type 事件的名称。
	 * @param callback 回调函数。
	 * @param useCapture 是否注册为capture阶段的处理函数。
	 */
	public on(type:string, callback:Function, useCapture?:boolean) {
		this.addEventListener(type, callback, useCapture);
	}

	/***
	 * 注册事件处理函数(只执行一次)。
	 * @param type 事件的名称。
	 * @param callback 回调函数。
	 * @param useCapture 是否注册为capture阶段的处理函数。
	 */
	public once(type:string, callback:Function) {
		this.emitter.once(type, callback, this);
	}
	/***
	 * 注消事件处理函数。
	 * @param type 事件的名称。
	 * @param callback 回调函数。
	 * @param useCapture 是否注消capture阶段的处理函数。
	 */
	public off(type:string, callback:Function, useCapture?:boolean) {
		this.removeEventListener(type, callback, useCapture);
	}

	/***
	 * 注册事件处理函数。
	 * @param type 事件的名称。
	 * @param callback 回调函数。
	 * @param useCapture 是否注册为capture阶段的处理函数。
	 */
	public addEventListener(type:string, callback:Function, useCapture?:boolean) {
		if(!callback) {
			return;
		}

		if(useCapture) {
			this.emitter.addListener(toCaptureEventName(type), callback, this);
		}else{
			this.emitter.addListener(type, callback, this);
		}
	}
	
	/***
	 * 注消事件处理函数。
	 * @param type 事件的名称。
	 * @param callback 回调函数。
	 * @param useCapture 是否注消capture阶段的处理函数。
	 */
	public removeEventListener(type:string, callback:Function, useCapture?:boolean) {
		if(useCapture) {
			this.emitter.removeListener(toCaptureEventName(type), callback, this);
		}else{
			this.emitter.removeListener(type, callback, this);
		}
	}

	/***
	 * 分发异步事件。
	 * @param evt 事件。
	 * @param useCapture 是否触发capture阶段的处理函数。
	 */
	public dispatchEventAsync(evt:any, useCapture?:boolean) {
		setTimeout(e => {
			this.dispatchEvent(evt, useCapture);
		}, 0);
	}

	/***
	 * 分发事件。
	 * @param evt 事件。
	 * @param useCapture 是否触发capture阶段的处理函数。
	 */
	public dispatchEvent(evt:any, useCapture?:boolean) {
		if(evt.propagationStopped) {
			console.log("evt.propagationStopped = true;");
			return;
		}

		var emitter = this.emitter;
		if(useCapture) {
			emitter.emit(toCaptureEventName(evt.type), evt);
		}else{
			emitter.emit(evt.type, evt);
		}
	}

	public removeAllListeners(event?: string) {
		this.emitter.removeAllListeners(event);
	}
}
