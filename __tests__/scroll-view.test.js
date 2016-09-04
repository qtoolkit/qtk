describe('Button', function() {
	this.timeout(3000);
	
	var scrollBarStyle = new qtk.ScrollBarStyle();

    it('test attrs', (done) => {
    	var scrollView = qtk.ScrollView.create();
		var attrs = {
			contentWidth:600,
			contentHeight:800,
			w:300,
			h:300,
			dragToScroll:true, 
			slideToScroll:true, 
			scrollBarStyle:scrollBarStyle,
			offsetX:10,
			offsetY:20
		};

		scrollView.set(attrs);
        var result = true;
        for(var key in attrs) {
			if(scrollView[key] !== attrs[key]) {
				result = false;
				break;
			}
		}

        done(result ? null : new Error("scrollView attrs"));
    });
   
   	var Events = qtk.Events;
	var matrixStack = qtk.MatrixStack.create();
	function dispatchEventToScrollView(win, downX, downY, moveX, moveY) {
    	var detail = {pointerDown:true, pointerDownX:downX, pointerDownY:downY, x:downX, y:downX, id:1};	
    	var e = Events.PointerEvent.create(Events.POINTER_DOWN, detail);

		win.dispatchPointerDown(e, matrixStack);
		detail.x = moveX;
		detail.y = moveY;
    	e = Events.PointerEvent.create(Events.POINTER_MOVE, detail);
		win.dispatchPointerMove(e, matrixStack);
    	e = Events.PointerEvent.create(Events.POINTER_UP, detail);
		win.dispatchPointerUp(e, matrixStack);
	}

    it('test event drag vbar', (done) => {
		var win = qtk.WindowNormal.create().init(null, 0, 0, 1000, 1000, false);
    	var scrollView = qtk.ScrollView.create();
		var attrs = {
			x:0, 
			y:0,
			contentWidth:600,
			contentHeight:600,
			w:300,
			h:300,
			dragToScroll:true 
		};
		scrollView.set(attrs);
		win.addChild(scrollView);
		dispatchEventToScrollView(win, 295, 10, 295, 20);
		
		var result = scrollView.offsetY = 20;
        done(result ? null : new Error("scrollView drag vbar"));
	});
    
    it('test event drag hbar', (done) => {
		var win = qtk.WindowNormal.create().init(null, 0, 0, 1000, 1000, false);
    	var scrollView = qtk.ScrollView.create();
		var attrs = {
			x:0, 
			y:0,
			contentWidth:600,
			contentHeight:600,
			w:300,
			h:300,
			dragToScroll:true 
		};
		scrollView.set(attrs);
		win.addChild(scrollView);
		dispatchEventToScrollView(win, 10, 295, 20, 295);
		
		var result = scrollView.offsetX = 20;
        done(result ? null : new Error("scrollView drag hbar"));
	});
})
