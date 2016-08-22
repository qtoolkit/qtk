describe('InputEventAdapter:', function() {
	this.timeout(3000);
	var doc = new qtk.Emitter();
	var win = new qtk.Emitter();
	var target = new qtk.Emitter();
	var grabTarget = new qtk.Emitter();
	var evt = {type:"mousemove",
		pageX:100,
		pageY:200,
		x:100,
		y:200,
		keyCode:56,
		wheelDelta:10,
		target:target,
		touches : [{x:100, y:200, identifier:1}, {x:100, y:200, identifier:2}]
	};

    it('test dispatch mouse down event', (done) => {
		qtk.inputEventAdapter.init(doc, win); 
    	target.removeAllListeners();
    	target.on(qtk.Events.POINTER_DOWN, (e) => {
    		var result = evt.x === e.detail.x && evt.y === e.detail.y;
    		done(result ? null : new Error("mousedown to qtk-pointer-down fail"));
		});
		evt.type = "mousedown";
    	doc.dispatchEvent(evt);
    });
    
    it('test dispatch mouse move event', (done) => {
		qtk.inputEventAdapter.init(doc, win); 
    	target.removeAllListeners();
    	target.on(qtk.Events.POINTER_MOVE, (e) => {
    		var result = evt.x === e.detail.x && evt.y === e.detail.y;
    		done(result ? null : new Error("mousemove to qtk-pointer-move fail"));
		});
		evt.type = "mousemove";
    	doc.dispatchEvent(evt);
    });
    
    it('test dispatch mouse up event', (done) => {
		qtk.inputEventAdapter.init(doc, win); 
    	target.removeAllListeners();
    	target.on(qtk.Events.POINTER_UP, (e) => {
    		var result = evt.x === e.detail.x && evt.y === e.detail.y;
    		done(result ? null : new Error("mouseup to qtk-pointer-up fail"));
		});
		evt.type = "mouseup";
    	doc.dispatchEvent(evt);
    });
    
    it('test dispatch key down event', (done) => {
		qtk.inputEventAdapter.init(doc, win); 
    	target.removeAllListeners();
    	target.on(qtk.Events.KEYDOWN, (e) => {
    		var result = evt.keyCode === e.detail.keyCode
    		done(result ? null : new Error("keydown to qtk-keydown fail"));
		});
		evt.type = "keydown";
    	doc.dispatchEvent(evt);
    });
    
    it('test dispatch key up event', (done) => {
		qtk.inputEventAdapter.init(doc, win); 
    	target.removeAllListeners();
    	target.on(qtk.Events.KEYUP, (e) => {
    		var result = evt.keyCode === e.detail.keyCode
    		done(result ? null : new Error("keyup to qtk-keyup fail"));
		});
		evt.type = "keyup";
    	doc.dispatchEvent(evt);
    });
    
    it('test dispatch wheel event', (done) => {
		qtk.inputEventAdapter.init(doc, win); 
    	target.removeAllListeners();
    	target.on(qtk.Events.WHEEL, (e) => {
    		var result = evt.wheelDelta === e.detail.delta
    		done(result ? null : new Error("mousewheel to qtk-wheel fail"));
		});
		evt.type = "mousewheel";
    	doc.dispatchEvent(evt);
    });
    
    it('test grab', (done) => {
		qtk.inputEventAdapter.init(doc, win); 
    	qtk.inputEventAdapter.grab(grabTarget);
    	grabTarget.on(qtk.Events.WHEEL, (e) => {
    		var result = evt.wheelDelta === e.detail.delta
    		done(result ? null : new Error("grab fail"));
    		qtk.inputEventAdapter.ungrab(grabTarget);
		});
		evt.type = "mousewheel";
    	doc.dispatchEvent(evt);
    });
    
    it('test dispatch touch event', (done) => {
		qtk.inputEventAdapter.init(doc, win, false, false, true); 
    	target.removeAllListeners();
    	target.on(qtk.Events.POINTER_DOWN, (e) => {
    		var result = evt.x === e.detail.x && evt.y === e.detail.y;
    		done(result ? null : new Error("touch start to qtk-pointer-down fail"));
		});
		evt.type = "touchstart";
    	doc.dispatchEvent(evt);
    });
});
