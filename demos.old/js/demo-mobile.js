
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app});
	win.childrenLayouter = qtk.SimpleLayouter.createWithOptions();

	var listView = qtk.ListView.create({dragToScroll:false, slideToScroll:true, itemH:40});
	listView.layoutParam = qtk.SimpleLayouterParam.createWithOptions({w:"100%", h:"100%"});
	win.addChild(listView);
	
	for(var i = 0; i < 1000; i++) {
		var item = qtk.ListItem.create({text:i.toString()});
		listView.addChild(item, true);
	}
	listView.relayoutChildren();

	win.open();
}
