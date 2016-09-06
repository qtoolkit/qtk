
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var listView = qtk.ListView.create();
	listView.dragToScroll = true;
	listView.slideToScroll = true;

	listView.itemHeight = 60;
	listView.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	listView.set({name:"listView", contentWidth:500, contentHeight:2000});	
	win.addChild(listView);
	
	for(var i = 0; i < 10000; i++) {
		var item = qtk.ListItem.create();
		item.set({text:i.toString()});
		listView.addChild(item, true);
	}
	listView.relayoutChildren();

	win.open();
}
