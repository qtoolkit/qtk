
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var listView = qtk.ListView.create({dragToScroll:true, slideToScroll:true, itemH:40});
	listView.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	win.addChild(listView);

	var templateItem = qtk.ListItem.create();
	var imageURL = "/demos/assets/icons/@density/" + "favor.normal.png";
	
	templateItem.childrenLayouter = qtk.SimpleLayouter.create();
	templateItem.addChild(qtk.Label.create({text:"template", 
		layoutParam:qtk.SimpleLayouterParam.create({w:"80%", h:"100%", y:"center"})}));
	templateItem.addChild(qtk.Image.create({value:imageURL, 
		layoutParam:qtk.SimpleLayouterParam.create({x:"-40", y:"center", w:30, h:30})}));
	
	listView.templateItem = templateItem;

	for(var i = 0; i < 100; i++) {
		var item = listView.addChildWithTemplate(true);
	}
	listView.relayoutChildren();

	win.open();
}
