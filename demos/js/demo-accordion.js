
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var accordion = qtk.Accordion.create({padding:1, titleH:30});
	accordion.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	win.addChild(accordion);

	var page1 = accordion.addPage("Image1", qtk.Image.create({value:imageURL}));
	var page2 = accordion.addPage("Image2", qtk.Image.create({value:imageURL}));
	accordion.addPage("Image3", qtk.Image.create({value:imageURL}));
	
	var listView = qtk.ListView.create({dragToScroll:true, slideToScroll:true, itemH:40});
	for(var i = 0; i < 30; i++) {
		var item = qtk.ListItem.create({text:i.toString()});
		listView.addChild(item, true);
	}
	accordion.addPage("ListView", listView);
	accordion.setActivePage(page2, false);

	win.open();
}
