
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var accordion = qtk.Accordion.create({padding:1, titleHeight:30});
	accordion.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	win.addChild(accordion);

	accordion.addPanel("Image1", qtk.Image.create({value:imageURL}));
	accordion.addPanel("Image2", qtk.Image.create({value:imageURL}));
	accordion.addPanel("Image3", qtk.Image.create({value:imageURL}));
	
	var listView = qtk.ListView.create({dragToScroll:true, slideToScroll:true, itemHeight:40});
	for(var i = 0; i < 30; i++) {
		var item = qtk.ListItem.create({text:i.toString()});
		listView.addChild(item, true);
	}
	accordion.addPanel("ListView", listView);

	win.open();
}
