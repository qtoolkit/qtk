
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.w, h:vp.h});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var scrollView = qtk.ScrollView.create({dragToScroll:true, slideToScroll:true});

	scrollView.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	scrollView.set({name:"scrollView", contentWidth:500, contentHeight:2000});	
	win.addChild(scrollView);

	var button = qtk.Button.create({x:10, y:10, w:400, h:60, text:"Scroll to end"});
	button.on(qtk.Events.CLICK, function(evt) {
		scrollView.scrollTo(0, 1900, 500);
	});
	scrollView.addChild(button);
	
	var button = qtk.Button.create({x:10, y:1000, w:400, h:60, text:"do nothing"});
	scrollView.addChild(button);
	
	var button = qtk.Button.create({x:10, y:1900, w:400, h:60, text:"Scroll to start"});
	button.on(qtk.Events.CLICK, function(evt) {
		scrollView.scrollTo(0, 0, 500);
	});
	scrollView.addChild(button);
	win.target = scrollView;

	win.open();
}
