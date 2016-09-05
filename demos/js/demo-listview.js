
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.init(app, 0, 0, vp.width, vp.height, true);
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var listView = qtk.ListView.create();
	listView.dragToScroll = true;
	listView.slideToScroll = true;

	listView.itemHeight = 60;
	listView.layoutParam = qtk.SimpleLayouterParam.create("25%", "25%", "50%", "50%");
	listView.set({name:"listView", contentWidth:500, contentHeight:2000});	
	win.addChild(listView);
	
	for(var i = 0; i < 10000; i++) {
		var item = qtk.ListItem.create();
		item.set({text:i.toString()});
		listView.addChild(item, true);
	}
	listView.relayoutChildren();
}
