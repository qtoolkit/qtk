import Events = require("./events");
import {KeyEvent} from "./key-event";
import {Emitter} from "./emitter";
import {PointerEventDetail, KeyEventDetail, WheelEventDetail} from "./event-detail";

var grabs = [];
var lastDetail : PointerEventDetail;
var ctrlKey = false;
var altKey = false;
var shiftKey = false;
var commandKey = false;
var pointerDeviceType : string;
var pointerDown = false;
var pointerDownX = 0;
var pointerDownY = 0;
var pointerDownTime = 0;
var globalInputEmitter = new Emitter();

function dispatchEvent(target:any, type:string, detail:any) {
	var realTarget = target;
	if(grabs.length) {
		realTarget = grabs[grabs.length-1];
	}

	var event = new CustomEvent(type, {detail:detail});

	globalInputEmitter.dispatchEvent(event);
	realTarget.dispatchEvent(event);
}

function getPointerDetail(e) : PointerEventDetail {
	if(e) {
		var id = e.identifier||0;
		var x = Math.max(e.pageX||0, e.x || e.clientX);
		var y = Math.max(e.pageY||0, e.y || e.clientY);
		lastDetail = PointerEventDetail.create(id, x, y, altKey, ctrlKey, shiftKey, commandKey);
		lastDetail.timeStamp = e.timeStamp;
	}

	return lastDetail;
}

function dispatchPointerEvent(type, target, detail) {
	if(target) {
		detail.x -= target.offsetLeft || 0;
		detail.y -= target.offsetTop || 0;
	}

	if(type === Events.POINTER_DOWN) {
		pointerDown = true;
		pointerDownX = detail.x;
		pointerDownY = detail.y;
		pointerDownTime = Date.now();
	}else if(type === Events.POINTER_UP) {
		detail.setPointerDown(pointerDown, pointerDownX, pointerDownY, pointerDownTime);
		var dx = Math.abs(detail.x - pointerDownX);
		var dy = Math.abs(detail.y - pointerDownY);	
		var isClick = dx < 5 && dy < 5;
		pointerDown = false;
		if(isClick) {
			dispatchEvent(target, Events.CLICK, detail);
		}
	}else{
		detail.setPointerDown(pointerDown, pointerDownX, pointerDownY, pointerDownTime);
	}

	dispatchEvent(target, type, detail);
	detail.dispose();
}

function onMouseDown(evt) {
	dispatchPointerEvent(Events.POINTER_DOWN, evt.target, getPointerDetail(evt));
}

function onMouseMove(evt) {
	dispatchPointerEvent(Events.POINTER_MOVE, evt.target, getPointerDetail(evt));
}

function onMouseUp(evt) {
	dispatchPointerEvent(Events.POINTER_UP, evt.target, getPointerDetail(evt));
}

function onDblClick(evt) {
	dispatchPointerEvent(Events.DBLCLICK, evt.target, getPointerDetail(evt));
}

function onMouseOut(evt) {
	dispatchPointerEvent(Events.POINTER_OUT, evt.target, getPointerDetail(evt));
}

function onMouseOver(evt) {
	dispatchPointerEvent(Events.POINTER_OVER, evt.target, getPointerDetail(evt));
}

function getTouchPoints(evt) {
	var touches = evt.touches || evt.changedTouches || evt.touchList;
	
	var ret = touches.map(touch => {
		return getPointerDetail(touch);
	});

	if(ret.length < 1) {
		ret.push(getPointerDetail(null));
	}

	return ret;
}

function onTouchStart(evt) {
	var detail = getPointerDetail(getTouchPoints(evt)[0]);
	dispatchPointerEvent(Events.POINTER_DOWN, evt.target, detail);
}

function onTouchMove(evt) {
	var detail = getPointerDetail(getTouchPoints(evt)[0]);
	dispatchPointerEvent(Events.POINTER_MOVE, evt.target, detail);
}

function onTouchEnd(evt) {
	var detail = getPointerDetail(getTouchPoints(evt)[0]);
	dispatchPointerEvent(Events.POINTER_UP, evt.target, detail);
}

function onPointerDown(evt) {
	dispatchPointerEvent(Events.POINTER_DOWN, evt.target, getPointerDetail(evt));
}

function onPointerMove(evt) {
	dispatchPointerEvent(Events.POINTER_MOVE, evt.target, getPointerDetail(evt));
}

function onPointerUp(evt) {
	dispatchPointerEvent(Events.POINTER_UP, evt.target, getPointerDetail(evt));
}

function onWheel(evt) {
	var delta = evt.wheelDelta || evt.detail * -8;
	var detail = WheelEventDetail.create(delta, altKey, ctrlKey, shiftKey, commandKey);
	detail.timeStamp = evt.timeStamp;
	dispatchEvent(evt.target, Events.WHEEL, detail);
	detail.dispose();
}

function updateKeysStatus(keyCode, value) {
	switch(keyCode) {
		case KeyEvent.VK_CONTROL: {
			ctrlKey = value;
			break;
		}
		case KeyEvent.VK_ALT: {
			altKey= value;
			break;
		}
		case KeyEvent.VK_SHIFT: {
			shiftKey = value;
			break;
		}
		case KeyEvent.VK_META: {
			commandKey = value;
			break;
		}
	}
}

function onKeyDown(evt) {
	updateKeysStatus(evt.keyCode, true);
	var detail = KeyEventDetail.create(evt.keyCode, altKey, ctrlKey, shiftKey, commandKey);
	detail.timeStamp = evt.timeStamp;
	dispatchEvent(evt.target, Events.KEYDOWN, detail);
	detail.dispose();
}

function onKeyUp(evt) {
	updateKeysStatus(evt.keyCode, false);
	var detail = KeyEventDetail.create(evt.keyCode, altKey, ctrlKey, shiftKey, commandKey);
	detail.timeStamp = evt.timeStamp;
	dispatchEvent(evt.target, Events.KEYUP, detail);
	detail.dispose();
}

function dispatchKeyEvent(target, keyCode) {
	var detail = KeyEventDetail.create(keyCode, altKey, ctrlKey, shiftKey, commandKey);
	dispatchEvent(target, Events.KEYDOWN, detail);
	dispatchEvent(target, Events.KEYUP, detail);
	detail.dispose();
}

/**
 * 初始化。
 *
 * InputEventAdapter如其名所示，是对输入事件的适配，为上层提供统一的接口。主要功能有：
 *
 * 1.把鼠标事件、触屏事件和指针事件统一成qtk-pointer事件。
 *
 * 2.把DOMMouseScroll和mousewheel事件统一成qtk-wheel事件。
 *
 * 3.把keydown/keyup事件转换成qtk-keydown/qtk-keyup事件。
 *
 * 4.把tizen和phonegap的按键事件转换成标准的key事件。
 *
 * 5.实现grab/ungrab功能。事件优先发给最后grab的target。
 *
 * @param doc document对象。
 * @param win window对象。
 * @param pointerSupported 当前系统是否支持pointer事件。
 * @param msPointerSupported 当前系统是否支持ms pointer事件。
 * @param touchSupported 当前系统是否支持触屏事件。
 *
 */
export function init(doc, win, pointerSupported, msPointerSupported, touchSupported) {
	doc.addEventListener('tizenhwkey', evt => {
		dispatchKeyEvent(evt.target, KeyEvent.VK_TIZEN_HW);
	});

	doc.addEventListener("backbutton", evt => {
		dispatchKeyEvent(evt.target, KeyEvent.VK_BACK);
	});

	doc.addEventListener("menubutton", evt => {
		dispatchKeyEvent(evt.target, KeyEvent.VK_MENU);
	});

	doc.addEventListener("searchbutton", evt => {
		dispatchKeyEvent(evt.target, KeyEvent.VK_SEARCH);
	});

		
	if(pointerSupported) {
		pointerDeviceType = "pointer";
		doc.addEventListener('pointerdown', onPointerDown);
		doc.addEventListener('pointermove', onPointerMove);
		doc.addEventListener('pointerup', onPointerUp);
		doc.addEventListener('mousewheel', onWheel);
	} else if(msPointerSupported) {
		pointerDeviceType = "pointer";
		doc.addEventListener('MSPointerDown', onPointerDown);
		doc.addEventListener('MSPointerMove', onPointerMove);
		doc.addEventListener('MSPointerUp', onPointerUp);
		doc.addEventListener('mousewheel', onWheel);
	}else if(touchSupported) {
		pointerDeviceType = "touch";
		doc.addEventListener('touchstart', onTouchStart); 
		doc.addEventListener('touchmove', onTouchMove);
		doc.addEventListener('touchend', onTouchEnd);
	}
	else {
		pointerDeviceType = "mouse";
		doc.addEventListener('mousedown', onMouseDown);
		doc.addEventListener('mousemove', onMouseMove);
		doc.addEventListener('mouseup', onMouseUp);
		doc.addEventListener('mouseout', onMouseOut);
		doc.addEventListener('mouseover', onMouseOver);
		doc.addEventListener('dblclick', onDblClick);
	}

	doc.addEventListener('mousewheel', onWheel);
	doc.addEventListener('DOMMouseScroll', onWheel);
	doc.addEventListener('keyup', onKeyUp);
	doc.addEventListener('keydown', onKeyDown);
}

/**
 * grab输入事件。输入事件后发送给最后grab的target。
 */
export function grab(target:any) {
	grabs.push(target);
}

/**
 * ungrab移出最后grab的target。
 */
export function ungrab(target?:any) {
	return grabs.pop();
}

/**
 * 注册全局的Input事件。
 */
export function on(type:string, callback:Function) {
	globalInputEmitter.on(type, callback);
}

/**
 * 注销全局的Input事件。
 */
export function off(type:string, callback:Function) {
	globalInputEmitter.off(type, callback);
}

