
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var listView = qtk.ListView.create({dragToScroll:true, slideToScroll:true, itemH:40});
	listView.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	win.addChild(listView);
	
	for(var i = 0; i < 1000; i++) {
		var item = qtk.ListItem.create({text:i.toString()});
		listView.addChild(item, true);
	}
	listView.relayoutChildren();

	win.open();
}
