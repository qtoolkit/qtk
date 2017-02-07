var imageURL = "/demos/assets/test.jpg";

function createImage(text) {
	var image = qtk.Image.create();
	image.on(qtk.Events.RESIZE_BEGIN, function(evt) {
		console.log(evt.type);
	});
	image.on(qtk.Events.RESIZING, function(evt) {
		console.log(evt.type);
	});
	image.on(qtk.Events.RESIZE_END, function(evt) {
		console.log(evt.type);
	});
	image.on(qtk.Events.RESIZE_CANCEL, function(evt) {
		console.log(evt.type);
	});
	image.set({value:imageURL, text:text});	

	return image;
}
function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.w, h:vp.h});
	win.childrenLayouter = qtk.SimpleLayouter.createWithOptions();
	
	var image = createImage("I'm resizable");
	image.useBehavior("resizable", {all:true});
	image.layoutParam = qtk.SimpleLayouterParam.createWithOptions({x:"center", y:"middle", w:"200", h:"200"});
	
	win.addChild(image);
	win.open();
}
