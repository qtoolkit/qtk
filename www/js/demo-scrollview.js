
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.init(app, 0, 0, vp.width, vp.height, true);
	win.childrenLayouter = qtk.SimpleLayouter.create();
	win.z = 100;
	
	var scrollView = qtk.ScrollView.create();
	scrollView.dragToScroll = true;
//	scrollView.slideToScroll = true;
	scrollView.scrollBarOpacity = 0.5;
	scrollView.scrollBarOptions.hBarVisibility = qtk.ScrollerBarVisibility.INVISIBLE;

	scrollView.name = "scrollView1";
	scrollView.layoutParam = qtk.SimpleLayouterParam.create("25%", "25%", "50%", "50%");
	scrollView.set({contentWidth:500, contentHeight:6000});	
	win.addChild(scrollView);

	var button = qtk.Button.create();
	button.set({x:0, y:0, w:scrollView.w, h:60, text:"1"});
	scrollView.addChild(button);
	
	var button = qtk.Button.create();
	button.set({x:0, y:300, w:scrollView.w, h:60, text:"2"});
	scrollView.addChild(button);
	
	var button = qtk.Button.create();
	button.set({x:0, y:540, w:400, h:60, text:"3"});
	button.on(qtk.Events.CLICK, function(evt) {
		scrollView.scrollTo(0, 0, 500);
	});
	scrollView.addChild(button);
	
	var button = qtk.Button.create();
	button.set({x:0, y:300, w:560, h:60, text:"4"});
	scrollView.addChild(button);
	
}
