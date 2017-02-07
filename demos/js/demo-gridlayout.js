
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app,  w:vp.width, h:vp.height, padding : 10});
	
	win.childrenLayouter = qtk.GridLayouter.createWithOptions({rowHeight:60, cols:6, margin:10});
	
	for(var i = 0; i < 30; i++) {
		var item = qtk.Button.create();
		item.set({text:i.toString()});
		win.addChild(item, true);
	}
	win.relayoutChildren();
	win.open();
}
