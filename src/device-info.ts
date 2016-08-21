
/**
 * 设备信息。可以获取语言，操作系统和浏览器等相关信息(单例对象，直接调用)。
 */

var userAgent : string;

export var locale : string;
export var language : string;
export var isMacOS : boolean;
export var isLinux : boolean;
export var isWindows : boolean;
export var isAndroid : boolean;
export var isIPhone : boolean;
export var isIPad: boolean;
export var isEdge: boolean;
export var isWindowsPhone : boolean;
export var isMobile: boolean;
export var isPointerSupported : boolean;
export var isMSPointerSupported : boolean;
export var isTouchSupported : boolean;

export function init(_locale:string, userAgent:string) {
	locale = (_locale || navigator.language).toLowerCase();
	language = locale.split("-")[0];

	var ua = userAgent = userAgent || navigator.userAgent;
	
	isWindowsPhone = ua.indexOf("Windows Phone") >= 0;
	isAndroid = ua.indexOf("Android") >= 0;
	isIPhone = ua.indexOf("iPhone;") >= 0;
	isIPad = ua.indexOf("iPad;") >= 0;
	
	isLinux = !isAndroid && ua.indexOf("Linux;") >= 0;
	isMacOS = !isIPhone && !isIPad && ua.indexOf("Macintosh;") >= 0;
	isWindows = !isWindowsPhone && ua.indexOf("Windows NT") >= 0;
	isMobile = ua.indexOf("Mobile") >= 0;

	isPointerSupported = window.navigator.pointerEnabled;
	isMSPointerSupported = window.navigator.msPointerEnabled;
		
	var msTouchEnabled = !!window.navigator.msMaxTouchPoints;
    	var generalTouchEnabled = "ontouchstart" in document.createElement("div");
 		isTouchSupported = !!msTouchEnabled || generalTouchEnabled;
}


