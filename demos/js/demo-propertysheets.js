
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = qtk.SimpleLayouter.create();

	var propertySheets = qtk.PropertySheets.create({padding:1, titleHeight:30});
	propertySheets.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	win.addChild(propertySheets);

	propertySheets.addPage("Image1", qtk.Image.create({value:imageURL, h:100}));
	propertySheets.addPage("Image2", qtk.Image.create({value:imageURL, h:200}));
	propertySheets.addPage("Image3", qtk.Image.create({value:imageURL, h:300}));
	
	win.open();
}
