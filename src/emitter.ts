/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import EventEmitter = require("eventemitter3");

export class Emitter extends EventEmitter {
	constructor() {
		super();
	}

	public addEventListener(type, callback) {
		this.addListener(type, callback);
	}
	
	public removeEventListener(type, callback) {
		this.removeListener(type, callback);
	}

	public dispatchEventAsync(evt) {
		setTimeout(e => {
			this.dispatchEvent(evt);
		}, 0);
	}

	public dispatchEvent(evt) {
		this.emit(evt.type, evt);
	}
}
