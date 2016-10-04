
describe('DeviceInfo:', function() {
	this.timeout(3000);
    
    it('MacOS Chrome', (done) => {
    	var deviceInfo = qtk.DeviceInfo;
    	deviceInfo.init("zh-CN", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36");
		
		var result = deviceInfo.locale === "zh-cn"
			&& deviceInfo.isMacOS 
			&& !deviceInfo.isLinux
			&& !deviceInfo.isWindows
			&& !deviceInfo.isAndroid
			&& !deviceInfo.isIPhone
			&& !deviceInfo.isMobile
			&& !deviceInfo.isWindowsPhone
			&& deviceInfo.language === "zh"

		done(result ? null : "MacOS Chrome");
	});
    
    it('Windows Chrome', (done) => {
    	var deviceInfo = qtk.DeviceInfo;
    	deviceInfo.init("zh-CN", "Mozilla/5.0(Windows NT 6.1; WOW64) AppleWebKit/537.36(KHTML,likeGecko)Chrome/50.0.2661.87Safari/537.36");
		
		var result = deviceInfo.locale === "zh-cn"
			&& !deviceInfo.isMacOS 
			&& !deviceInfo.isLinux
			&& deviceInfo.isWindows
			&& !deviceInfo.isAndroid
			&& !deviceInfo.isIPhone
			&& !deviceInfo.isMobile
			&& !deviceInfo.isWindowsPhone

		done(result ? null : "Windows Chrome");
	});
    it('IPhone', (done) => {
    	var deviceInfo = qtk.DeviceInfo;
    	deviceInfo.init("zh-CN", "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E188a Safari/601.1");
		
		var result = deviceInfo.locale === "zh-cn"
			&& !deviceInfo.isMacOS 
			&& !deviceInfo.isLinux
			&& !deviceInfo.isWindows
			&& !deviceInfo.isAndroid
			&& deviceInfo.isIPhone
			&& deviceInfo.isMobile
			&& !deviceInfo.isWindowsPhone

		done(result ? null : "IPhone");
	});
    
    it('iPad', (done) => {
    	var deviceInfo = qtk.DeviceInfo;
    	deviceInfo.init("zh-CN", "Mozilla/5.0 (iPad; CPU OS 10_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E188a Safari/601.1");
		
		var result = deviceInfo.locale === "zh-cn"
			&& !deviceInfo.isMacOS 
			&& !deviceInfo.isLinux
			&& !deviceInfo.isWindows
			&& !deviceInfo.isAndroid
			&& !deviceInfo.isIPhone
			&& deviceInfo.isIPad
			&& deviceInfo.isMobile

		done(result ? null : "iPad");
	});
    
    it('Android', (done) => {
    	var deviceInfo = qtk.DeviceInfo;
    	deviceInfo.init("zh-CN", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19");
		
		var result = deviceInfo.locale === "zh-cn"
			&& !deviceInfo.isMacOS 
			&& !deviceInfo.isLinux
			&& !deviceInfo.isWindows
			&& deviceInfo.isMobile
			&& deviceInfo.isAndroid
			&& !deviceInfo.isIPhone
			&& !deviceInfo.isIPad
			&& !deviceInfo.isWindowsPhone

		done(result ? null : "isAndroid");
	});
    
    it('Touch/Pointer Detect', (done) => {
    	var deviceInfo = qtk.DeviceInfo;
    	deviceInfo.init("zh-CN", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19");
		
		var isTouchSupported = window.navigator.msMaxTouchPoints || "ontouchstart" in document.createElement("div");
		var result = deviceInfo.isPointerSupported === window.navigator.pointerEnabled
			&& deviceInfo.isMSPointerSupported === window.navigator.msPointerEnabled
			&& deviceInfo.isTouchSupported === isTouchSupported 

		done(result ? null : "Touch/Pointer Detect");
	});
});
