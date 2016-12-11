"use strict";
/**
 * @class DeviceInfo
 * 设备信息。可以获取语言，操作系统和浏览器等相关信息(单例对象，直接调用)。
 */
var DeviceInfo = (function () {
    function DeviceInfo() {
    }
    DeviceInfo.init = function (_locale, userAgent) {
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
    };
    return DeviceInfo;
}());
exports.DeviceInfo = DeviceInfo;
