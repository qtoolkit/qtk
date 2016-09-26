/**
 * 设备信息。可以获取语言，操作系统和浏览器等相关信息(单例对象，直接调用)。
 */
"use strict";
var userAgent;
function init(_locale, userAgent) {
    exports.locale = (_locale || navigator.language).toLowerCase();
    exports.language = exports.locale.split("-")[0];
    var ua = userAgent = userAgent || navigator.userAgent;
    exports.isWindowsPhone = ua.indexOf("Windows Phone") >= 0;
    exports.isAndroid = ua.indexOf("Android") >= 0;
    exports.isIPhone = ua.indexOf("iPhone;") >= 0;
    exports.isIPad = ua.indexOf("iPad;") >= 0;
    exports.isLinux = !exports.isAndroid && ua.indexOf("Linux;") >= 0;
    exports.isMacOS = !exports.isIPhone && !exports.isIPad && ua.indexOf("Macintosh;") >= 0;
    exports.isWindows = !exports.isWindowsPhone && ua.indexOf("Windows NT") >= 0;
    exports.isMobile = ua.indexOf("Mobile") >= 0;
    exports.isPointerSupported = window.navigator.pointerEnabled;
    exports.isMSPointerSupported = window.navigator.msPointerEnabled;
    var msTouchEnabled = !!window.navigator.msMaxTouchPoints;
    var generalTouchEnabled = "ontouchstart" in document.createElement("div");
    exports.isTouchSupported = !!msTouchEnabled || generalTouchEnabled;
}
exports.init = init;
