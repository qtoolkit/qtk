import KeyEvent = require("./key-event");
import Events = require("./events");

var grabs = [];
var lastDetail : any;
var ctrlKey = false;
var altKey = false;
var shiftKey = false;
var commandKey = false;
var pointerDeviceType : string;

function dispatchEvent(target:any, type:string, detail:any) {
	var realTarget = target;
	detail.altKey = altKey;
	detail.ctrlKey = ctrlKey;
	detail.shiftKey = shiftKey;
	detail.commandKey = commandKey;

	if(grabs.length) {
		realTarget = grabs[grabs.length-1];
	}

	var event = new CustomEvent(type, {detail : detail});
	realTarget.dispatchEvent(event);
}

function getPointerDetail(e) {
	if(e) {
		lastDetail = {
			id: e.identifier||0,
			x:  Math.max(e.pageX||0, e.x || e.clientX),
			y:  Math.max(e.pageY||0, e.y || e.clientY)
		};
	}

	return lastDetail;
}

function onMouseDown(evt) {
	dispatchEvent(evt.target, Events.POINTER_DOWN, getPointerDetail(evt));
}

function onMouseMove(evt) {
	dispatchEvent(evt.target, Events.POINTER_MOVE, getPointerDetail(evt));
}

function onMouseUp(evt) {
	dispatchEvent(evt.target, Events.POINTER_UP, getPointerDetail(evt));
}

function onMouseOut(evt) {
	dispatchEvent(evt.target, Events.POINTER_OUT, getPointerDetail(evt));
}

function onMouseOver(evt) {
	dispatchEvent(evt.target, Events.POINTER_OVER, getPointerDetail(evt));
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
	var detail = getTouchPoints(evt)[0];
	dispatchEvent(evt.target, Events.POINTER_DOWN, detail);
}

function onTouchMove(evt) {
	var detail = getTouchPoints(evt)[0];
	dispatchEvent(evt.target, Events.POINTER_MOVE, detail);
}

function onTouchEnd(evt) {
	var detail = getTouchPoints(evt)[0];
	dispatchEvent(evt.target, Events.POINTER_UP, detail);
}

function onPointerDown(evt) {
	dispatchEvent(evt.target, Events.POINTER_DOWN, getPointerDetail(evt));
}

function onPointerMove(evt) {
	dispatchEvent(evt.target, Events.POINTER_MOVE, getPointerDetail(evt));
}

function onPointerUp(evt) {
	dispatchEvent(evt.target, Events.POINTER_UP, getPointerDetail(evt));
}

function onWheel(evt) {
	var detail = {delta : evt.wheelDelta || evt.detail * -8};
	dispatchEvent(evt.target, Events.WHEEL, detail);
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
	var detail = {
		keyCode:evt.keyCode
	};
	
	updateKeysStatus(detail.keyCode, true);
	dispatchEvent(evt.target, Events.KEYDOWN, detail);
}

function onKeyUp(evt) {
	var detail = {
		keyCode:evt.keyCode
	};
	updateKeysStatus(detail.keyCode, false);
	dispatchEvent(evt.target, Events.KEYUP, detail);
}

function dispatchKeyEvent(target, keyCode) {
	var detail = {
		keyCode:keyCode
	};
	dispatchEvent(target, Events.KEYDOWN, detail);
	dispatchEvent(target, Events.KEYUP, detail);
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

