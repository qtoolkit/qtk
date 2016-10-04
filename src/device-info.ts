
/**
 * 设备信息。可以获取语言，操作系统和浏览器等相关信息(单例对象，直接调用)。
 */

export class DeviceInfo {
	public static locale : string;
	public static language : string;
	public static isMacOS : boolean;
	public static isLinux : boolean;
	public static isWindows : boolean;
	public static isAndroid : boolean;
	public static isIPhone : boolean;
	public static isIPad: boolean;
	public static isEdge: boolean;
	public static isWindowsPhone : boolean;
	public static isMobile: boolean;
	public static isPointerSupported : boolean;
	public static isMSPointerSupported : boolean;
	public static isTouchSupported : boolean;

	public static init(_locale:string, userAgent:string) {
		DeviceInfo.locale = (_locale || navigator.language).toLowerCase();
		DeviceInfo.language = DeviceInfo.locale.split("-")[0];

		var ua = userAgent = userAgent || navigator.userAgent;
		
		DeviceInfo.isWindowsPhone = ua.indexOf("Windows Phone") >= 0;
		DeviceInfo.isAndroid = ua.indexOf("Android") >= 0;
		DeviceInfo.isIPhone = ua.indexOf("iPhone;") >= 0;
		DeviceInfo.isIPad = ua.indexOf("iPad;") >= 0;
		
		DeviceInfo.isLinux = !DeviceInfo.isAndroid && ua.indexOf("Linux;") >= 0;
		DeviceInfo.isMacOS = !DeviceInfo.isIPhone && !DeviceInfo.isIPad && ua.indexOf("Macintosh;") >= 0;
		DeviceInfo.isWindows = !DeviceInfo.isWindowsPhone && ua.indexOf("Windows NT") >= 0;
		DeviceInfo.isMobile = ua.indexOf("Mobile") >= 0;

		DeviceInfo.isPointerSupported = window.navigator.pointerEnabled;
		DeviceInfo.isMSPointerSupported = window.navigator.msPointerEnabled;
			
		var msTouchEnabled = !!window.navigator.msMaxTouchPoints;
	    var generalTouchEnabled = "ontouchstart" in document.createElement("div");
	 	DeviceInfo.isTouchSupported = !!msTouchEnabled || generalTouchEnabled;
	}
}

