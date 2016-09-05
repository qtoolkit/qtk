
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.init(app, 0, 0, vp.width, vp.height, true);
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var scrollView = qtk.ScrollView.create();
	scrollView.dragToScroll = true;
	scrollView.slideToScroll = true;

	scrollView.layoutParam = qtk.SimpleLayouterParam.create("25%", "25%", "50%", "50%");
	scrollView.set({name:"scrollView", contentWidth:500, contentHeight:2000});	
	win.addChild(scrollView);

	var button = qtk.Button.create();
	button.set({x:0, y:0, w:400, h:60, text:"Scroll to end"});
	button.on(qtk.Events.CLICK, function(evt) {
		scrollView.scrollTo(0, 1900, 500);
	});
	scrollView.addChild(button);
	
	var button = qtk.Button.create();
	button.set({x:0, y:1000, w:400, h:60, text:"do nothing"});
	scrollView.addChild(button);
	
	var button = qtk.Button.create();
	button.set({x:0, y:1900, w:400, h:60, text:"Scroll to start"});
	button.on(qtk.Events.CLICK, function(evt) {
		scrollView.scrollTo(0, 0, 500);
	});
	scrollView.addChild(button);
}
